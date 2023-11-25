import { NextResponse, NextRequest} from "next/server";
import {v2 as cloudinary} from 'cloudinary';
require('dotenv').config();
          
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

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