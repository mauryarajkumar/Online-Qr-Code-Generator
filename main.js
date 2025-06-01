function generateqr() {
        const qrtext = document.getElementById("qrtext").value.trim();
        const imgbox = document.getElementById("imgbox");
        const qrcode = document.getElementById("qrcode");

        if (qrtext === "") {
            alert("Please enter some text or URL.");
            return;
        }

        // Using free API for QR code generation
        qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qrtext) + "&size=200x200";
        imgbox.style.display = "block";
    }

function downloadqr() {
    const qrtext = document.getElementById("qrtext").value.trim();
    const qrcode = document.getElementById("qrcode");

    if (!qrtext || !qrcode.src) {
        alert("Generate a QR code before downloading.");
        return;
    }

  
    fetch(qrcode.src)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = "qr-code.png";
            a.click(); 

          
            URL.revokeObjectURL(blobUrl);
        })
        .catch(err => {
            alert("Failed to download QR code.");
            console.error(err);
        });
}

    function clearqr() {
        document.getElementById("qrtext").value = "";
        document.getElementById("qrcode").src = "";
        document.getElementById("imgbox").style.display = "none";
    }