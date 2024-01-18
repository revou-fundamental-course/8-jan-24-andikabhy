
function temaLuas() {
    document.getElementById("temaHitung").innerHTML = "Luas Persegi";
    const temaRumus = document.getElementById("temaRumus");
    const Rumus = document.getElementById("rumus");
    const temaDua = document.getElementById("temaDua");
    const Keterangan = document.getElementById("Keterangan");
    //tema.innerHTML = "Luas Persegi";
    temaRumus.innerHTML = "Rumus Luas Persegi Yaitu :";
    Rumus.innerHTML = "L = S x S";
    temaDua.innerHTML = "Hitung Luas Persegi";
    Keterangan.innerHTML = "L = Luas";
}

function temaPanjang() {
    const tema = document.getElementById("temaHitung");
    const temaRumus = document.getElementById("temaRumus");
    const Rumus = document.getElementById("rumus");
    const temaDua = document.getElementById("temaDua");
    const Keterangan = document.getElementById("Keterangan");
    tema.innerHTML = "Keliling Persegi";
    temaRumus.innerHTML = "Rumus Keliling Persegi Yaitu :";
    Rumus.innerHTML = "L = 4 x S";
    temaDua.innerHTML = "Hitung Keliling Persegi";
    Keterangan.innerHTML = "K = Keliling";
}

function Hitung(){
    var Sisi = parseFloat(document.getElementById("sisi").value);

    if (isNaN(Sisi) || Sisi <= 0) {
        alert("Masukkan panjang sisi yang valid.");
        return;
      }
    console.log(Sisi)
    var calculationType = document.querySelector('input[name="calculationType"]:checked').value;
    console.log(calculationType)
    var area, parimeter;
    if(calculationType === "luas"){
        area = Sisi * Sisi;
        parimeter = null;
    }else{
        parimeter = 4 * Sisi;
        area = null;
    }
    var resultElement = document.getElementById("result");

    var resultHTML = `<p>Sisi = ${Sisi}</p>`;
    if (calculationType === "luas") {
      resultHTML += `<p>Sisi x Sisi = ${Sisi} x ${Sisi} = ${area}</p>`;
    } else {
      resultHTML += `<p>4 x Sisi = 4 x ${Sisi} = ${parimeter}</p>`;
    }
    resultElement.innerHTML = resultHTML;
}

