// Soal 3
const umurManusia = (umur) => {
  if (umur == 1) {
    document.getElementById('manusia').innerHTML = umur + 15;
  } 
  else if(umur == 2){
    document.getElementById('manusia').innerHTML = umur + 24 ;
  }
  else if(umur >=3){
    document.getElementById('manusia').innerHTML = + (24 + (umur - 3 + 1) * 4);
  }
}
