import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export async function fetchCars() {
    
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const data = await fetch('http://localhost:3000/api/cars', {cache: 'no-store'});
        return data.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    };

};

export async function fetchCarById(id) {
    
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const data = await fetch(`http://localhost:3000/api/cars/${id}`, {cache: 'no-store'});
        return data.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    };

};

export async function deleteCar(id) {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const res = await fetch('http://localhost:3000/api/cars', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id}),
        });
        //console.log(res.json());
        /* return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">Se ha borrado el producto con exito.</Alert>
            </Stack>
          ); */
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to delete data');
    };

};

export async function updateCar(id, data) {
    try {

        const res = await fetch('http://localhost:3000/api/cars', {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, data}),
        });
        return await res.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to update data');
    };

};

export async function uploadImage(file) {
    
    try {
        const formData = new FormData();
        formData.append('images', file);

        const res = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData,
        });
        console.log(res);
        return await res.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to upload data');
    };

};

export async function uploadImages(files) {
    
    try {
        const response = [...files].map(async (file) => {
            
            const formData = new FormData();
            formData.append('images', file);
    
            const res = await fetch('http://localhost:3000/api/upload', {
                method: 'POST',
                body: formData,
            });
            console.log(res);
            return await res.json();
        });

        //return Promise.all(response);
        return response;
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to upload data');
    };

};

export async function deleteImage(filename) {
    
    try {
        const res = await fetch('http://localhost:3000/api/cloudinary/delete', {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({filename}),
        });
        console.log(res);
        return await res.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to delete image');
    };

};
