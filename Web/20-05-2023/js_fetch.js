function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => resolve(data))
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
fetchDataAsync('https://api.example.com/data'); // Data: { id: 1, name: 'John Doe', email: 'johndoe@example.com' }
fetchDataAsync('https://api.example.com/dataaaa'); // Error: Error: Failed to fetch data
