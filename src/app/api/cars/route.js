import connectMongoDB from '@/libs/mongodb';
import Car from '@/app/models/car';
import { NextResponse , NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
// import multer from 'multer';

export async function POST(request) {

    const {name,year,km, description, price, photoURLs} = await request.json();

    await connectMongoDB() ;
    await Car.create({name, year,km, description, price, photoURLs}) ;
    console.log("car created")
    return NextResponse.json({message: "Car Creates"}, {status: 201});

};

export async function GET() {
    await connectMongoDB();
    const cars = await Car.find();
    return NextResponse.json({ cars });
  }

/* export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id') || request.body.id;

    await connectMongoDB() ;
    await Car.findByIdAndDelete(id);

    return NextResponse.json({message: "Car Deleted"}, {status: 200})
} */

export async function DELETE(request) {
    const {id} = await request.json()
    await connectMongoDB() ;
    await Car.findByIdAndDelete(id);

    return NextResponse.json({message: "Car Deleted"}, {status: 200})
}  








// export async function handler(request) {
//     if (request.method === 'POST') {
//       try {
//         const { name, year, description, price } = request.body;
  
//         if (!name || !year || !description || !price) {
//           return NextResponse.json(
//             { error: 'Nombre, año, descripción y precio son requeridos' },
//             { status: 400 }
//           );
//         }
  
//         let photoBuffer = null;
  
//         if (request.file) {
//           // Si se proporciona una imagen, obtén su contenido como un Buffer
//           photoBuffer = request.file.buffer;
//         }
//         await connectMongoDB();

//         // Crea un nuevo coche con la imagen (si se proporcionó)
//         const newCar = new Car({
//           name,
//           year,
//           description,
//           price,
//           photo: photoBuffer, // Asigna el Buffer de la imagen al campo photo
//         });
  
//         await newCar.save(); // Guarda el coche en la base de datos
  
//         return NextResponse.json({ message: 'Auto creado' }, { status: 201 });
//       } catch (error) {
//         return NextResponse.json({ error: 'No se pudo crear el auto' }, { status: 500 });
//       }
//     } else {
//       return NextResponse.error('Método no permitido', 405);
//     }
//   }
