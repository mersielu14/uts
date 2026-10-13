const form = document.getElementById('formkontak');

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nomorwhatsApp = "6285167105713";

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telpon = document.getElementById("telpon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;

    const isipesan = `Halo, saya menghubungi melalui website CV

Nama Lengkap : ${nama}
Email : ${email}
No. Telepon : ${telpon}
Bidang Minat : ${minat}
Pesan : ${pesan}`;

    const pesanEncoded = encodeURIComponent(isipesan);

    const urlwhatsApp = `https://wa.me/${nomorwhatsApp}?text=${pesanEncoded}`;

    window.open(urlwhatsApp, "_blank");

});