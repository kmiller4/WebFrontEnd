const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch Request Example' })
    };

fetch('https://tm1ybx0345.execute-api.us-east-1.amazonaws.com/items', requestOptions)
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`HTTP error! Status: ${response.status}, Body: ${text}`);
            });
        }
        console.log('Response headers:', response.headers.get('Content-Type'));
        return response.text();
    })
    .then(text => {
        console.log('Raw response body:', text);
        const displayText = text || 'No response body';
        document.getElementById('visitor-count').append(displayText);
    })
    .catch(error => console.error('Fetch error:', error));