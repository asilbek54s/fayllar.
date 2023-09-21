var qr;

        function generateQRCode() {
            var text = document.getElementById("text-input").value;
            var qrCodeDiv = document.getElementById("qr-code");
            qrCodeDiv.innerHTML = "";

            qr = new QRCode(qrCodeDiv, {
                text: text,
                width: 200,
                height: 200
            });
        }

        function downloadQRCode() {
            if (qr) {
                var qrDataURL = qr._el.firstChild.toDataURL("image/png");
                var link = document.createElement("a");
                link.href = qrDataURL;
                link.download = "qrcode.png";
                link.click();
            }
        }