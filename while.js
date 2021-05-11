var noAngkot = 1;
var jAngkot = 10;
var angkotBeroperasi = 8;

while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jAngkot; noAngkot++) {
    console.log('Angkot No ' + noAngkot + ' tidak berfungsi dengan baik');
}
    