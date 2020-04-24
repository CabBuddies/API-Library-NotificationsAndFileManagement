require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = 'https://cabbuddies-nafm.herokuapp.com'

async function uploadFile(authToken,fileData){
    const data = {fileData}
    console.log('read '+JSON.stringify(data))
    const url = baseUrl+'/upload'
    return await fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization':'Basic '+authToken
                },
            body: JSON.stringify(data)
        })
}

module.exports={uploadFile}