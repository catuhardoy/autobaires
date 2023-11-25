import { NextResponse, NextRequest} from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import {v2 as cloudinary} from 'cloudinary';
require('dotenv').config();
          
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

export async function POST(request) {
    const data = await request.formData();
    const image = data.get("images");

    if(!image) return NextResponse.json('Failed upload image', {status: 400});

    // Construye un buffer para almacenar archivos y poder enviarlos a traves de las peticiones

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Crea una ruta local a partir de una ubicación y el nombre de la imagen

    //const filepath = path.join(process.cwd(), 'public', image.name);

    // Guardar el archivo en el sistema local a partir del buffer de datos y la ruta creada
    
    //await writeFile(filepath, buffer);

    // Guarda el archivo local anterior en cloudinary

    //const response = await cloudinary.uploader.upload(filepath);

    // Guardar el buffer creado directamente en cloudinary utilizando promesas

    const response = await new Promise ((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, res) => {
            if(err) reject(err);
            resolve(res);
        }).end(buffer);
    });

    console.log(response);

    //Almacenar links en la bdd - pendiente ver si lo manejamos desde aca o desde el componento del front

    return NextResponse.json({
        message: 'Succesfully upload',
        id: response.public_id,
        url: response.secure_url,
    });
};

export async function DELETE(request) {
    const {filename} = await request.json();
    //console.log(filename);
    
    const response = await cloudinary.api.delete_resources(filename, { type: 'upload', resource_type: 'image' });
    console.log(response);

    return NextResponse.json({
        message: 'Succesfully deleted',
        succesfull: true,
    });
};