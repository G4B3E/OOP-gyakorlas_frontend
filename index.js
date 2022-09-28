class Zene{
    constructor(nev,hossz){
        this.nev = nev;
        this.hossz = hossz;
    }
}

function Hozzaad(){
    document.getElementById("cim").value;
    document.getElementById("hossz").value;
    
    let x =   document.getElementById("cim").value;
    let y = document.getElementById("hossz").value;
    
    let obj = new Zene(x,y);
    lista.push(obj);
    console.log(lista);
}
let lista = [];


