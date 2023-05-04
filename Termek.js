class Termek {
  #adat;
  #divelem;
  #buttonElem;
  constructor(adat, szuloelem) {
    console.log(adat)
    this.#adat = adat;
    szuloelem.append(`<div class="szElem"> <p>Név: ${this.#adat.nev}</p> 
        <p>Fajta: ${adat.fajta}</p> <p>Kor: ${adat.kor}</p> <button>Kedvencekhez ad</button></div>`);
    this.#divelem = szuloelem.children("div:last-child");
    this.#buttonElem = this.#divelem.children("button");
  
  }
 
}
setButton(#buttonelem){
    this.#buttonelem
}
getButton(){
return #button;
}
export default Termek;
