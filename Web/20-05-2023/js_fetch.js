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
