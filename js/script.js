var a= 0;

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


console.log(temaLuas(a))

function Hitung(){
    if(temaLuas(a) = 1){
        console.log("halo")
    }else{
        console.log("hai")
    }
}