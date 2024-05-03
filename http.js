const http = require('node:http')
const https = require('node:https')

let options = {
    hostname:"en.wikipedia.org",
    port:443,
    path:"wiki/Tunde_Onakoya",
    method:"GET"
}

// https.request(options, (response)=>{
//     console.log("statusCode", response.statusCode);
//     console.log("headers:", response.headers);

//     response.on("data", (data)=>{
//         process.stdout.write(data)
//     })
//     response.on('error',(error)=>{
//         process.stdout.write(error)
//     })

//})

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response)=>{
    console.log('statusCode:', response.statusCode)
    console.log("headers:", response.headers);

    response.on("data", (data)=>{
        process.stdout.write(data)
    })
    response.on('end', () => {
        console.log('Response stream ended.');
    });
}).on('error', (error) => {
    console.log(error);
});
