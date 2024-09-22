let imgbox= document.getElementById("imgbox");
let qrcode= document.getElementById("qrcode");
let qrtext=document.getElementById("qrtext");

function generateqr(){
qrcode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;




}