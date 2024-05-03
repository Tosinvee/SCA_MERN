const fs = require('fs');
const https = require('https');

const filePath = './public/tunde_onakoya.html';
let responseData = '';

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
        responseData += data;
    });

    response.on('end', () => {
        fs.writeFile(filePath, responseData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('File has been saved!');
            }
        });
    });
    response.on('close', () => {
        console.log('Connection closed.');
    });
}).on('error', (error) => {
    console.error('Error making request:', error);
});