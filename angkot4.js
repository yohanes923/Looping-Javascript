var noAngkot=1;
var jAngkot=10;
var angkotBeroperasi=6;
var angkotLembur=8;

for(var noAngkot = 1; noAngkot <= jAngkot; noAngkot++){
    if(noAngkot <=6) {
        console.log('angkot no ' + noAngkot + ' beroperasi dengan baik');
    } else if( noAngkot===8 ) {
        console.log('angkot no ' + noAngkot + ' sedang lembur');
    }
    
    
    
    else  {
        
        console.log('angkot no ' + noAngkot + ' sedang tidak beroperasi');

    }
        
     
}
   