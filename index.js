import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

//funcion que lee el archivo index.js y lo envia a la salida como un nuevo archivo llamado "encoded.dat"
fs.readFile(path.join(__dirname, 'index.js'), 'utf8', (err, data) => {
    let newData = [];
    for(let i = 0; i < data.length; i++){
        switch(data[i]){
            case 'a':
                newData[i] = 'u';
                break;
            case 'e':
                newData[i] = 'o';
                break;
            case 'o':
                newData[i] = 'e';
                break;
            case 'u':
                newData[i] = 'a';
                break;
            default:
                newData[i] = data[i];
                break;
        }
    }
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFile(path.join(__dirname, 'encoded.dat'), newData.join(''), 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
    });
});
