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

export async function deleteCar() {
    try {
        //await new Promise(resolve => setTimeout(resolve, 5000));

        const data = await fetch('http://localhost:3000/api/cars', {
            method: 'DELETE',
            
        });
        return data.json();
    } 
    catch (error) {
        console.log(error);
        throw new Error('Failed to fetch data');
    };

};
