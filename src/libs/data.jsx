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

export async function deleteCar(id) {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const res = await fetch('http://localhost:3000/api/cars', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        console.log(res);
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="info">Se ha borrado el producto con exito.</Alert>
            </Stack>
          );
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    };

};
