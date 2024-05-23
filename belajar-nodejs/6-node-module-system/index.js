// const nama = 'Vilanda Harsono';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));



// console.log('Hello WPU');

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');

console.log(
    coba.cetakNama('Vila'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);