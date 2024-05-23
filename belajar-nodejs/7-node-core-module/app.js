// core module
// file system
const fs = require('fs');

// menuliskan string ke file (synchronous)
//try {
//    fs.writeFileSync('data/test.txt', 'Hello saya vilanda, saya sedang belajar Synchronous');
//} catch (e) {
//    console.log(e);
//}

// menuslikam string ke file (Asynchronous)
//fs.writeFileSync('data/test.txt', 'Hello Vilanda belajar Asynschronous', (e) => {
//    console.log(e);
//});

// membaca isi file (synchronous)
//const data = fs.readFileSync('data/contacts.json', 'utf-8');
//console.log(data);

// membaca isi file (asynschronous)
//fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//});


// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukan nama anda : ', (nama) => {
    rl.question('Masukan no HP anda : ', (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        
        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terimakasih.');

        rl.close();
    });
});