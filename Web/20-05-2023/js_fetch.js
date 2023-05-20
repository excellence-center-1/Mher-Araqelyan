/* Create a function called fetchData that simulates fetching data from an API. The function should take a URL as a parameter and return a promise. The promise should resolve with the data fetched from the API if the request is successful, and reject with an error message if the request fails.
Next, demonstrate the usage of the fetchData function by calling it with a sample URL using async/await syntax. Handle any errors that may occur during the asynchronous operation
-------------------------------------
Example usage
fetchDataAsync('https://api.example.com/data'); // Data: { id: 1, name: 'John Doe', email: 'johndoe@example.com' }
fetchDataAsync('https://api.example.com/dataaaa'); // Error: Error: Failed to fetch data 
*/
function fetchData(url) {
    return new Promise((resolve, reject) => {
        let byindex = false;
        let index;
        const lastChar = url[url.length - 1];
        if (!isNaN(lastChar)) {
            index = Number(lastChar);
            url = url.slice(0, url.length - 2);
            byindex = true;
        }
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                if (byindex) {
                    const foundObject = data.find(item => item.id == index);
                    resolve(foundObject);
                } else {
                    resolve(data);
                }
            })
            .catch(error => reject(error.message));
    });
}
async function fetchDataAsync(url) {
    try {
        const data = await fetchData(url);
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
