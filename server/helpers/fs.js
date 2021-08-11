import fs from 'fs';
import path from 'path';


export function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, '..', 'data', filename), 'utf8', (err, jsonString) => {
           if (err) {
               console.log('Error read file', err)
               reject(false)
               return
           }
           try {
               const dataObj = JSON.parse(jsonString)
               resolve(dataObj.data)
               return
           } catch (err) {
               console.log('Error parse JSON')
               reject(false)
           }
        })
    })
}

export function updateFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, '..', 'data', filename), err => {
            if (err) {
                console.log('Error write file', err)
                reject(false)
                return
            }
            resolve(true)
        })
    })
}
