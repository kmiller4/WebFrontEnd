// Simple API request with a JSON body using fetch
const requestOptions = {
    method: 'OPTIONS',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'OPTIONS', 'Access-Control-Allow-Headers': '*'},
    body: JSON.stringify({ title: 'Fetch Request Example' })
};
let response = fetch('https://tm1ybx0345.execute-api.us-east-1.amazonaws.com/items', requestOptions)
.then(response => response.json())
.then((json) => document.getElementById('visitor-count').append(json))