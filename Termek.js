class Termek {
  #adat;
  #divelem;
  #buttonElem;
  constructor(adat, szuloelem) {
    
    console.log(adat);
    this.#adat = adat;
    szuloelem.append(`<div class="szElem"> <p>Név: ${this.#adat.nev}</p> 
        <p>Fajta: ${adat.fajta}</p> <p>Kor: ${
      adat.kor
    }</p> <button id="${adat.id}">Kedvencekhez ad</button></div>`);
    this.#divelem = szuloelem.children("div:last-child");
    this.#buttonElem = this.#divelem.children("button");
    this.#buttonElem.on("click", () => {
      //  this.setElem('<img src="x.png" alt="tictac">')
      this.esemenyTrigger();
    });
  }
  esemenyTrigger() {
    const esemeny = new CustomEvent("gombkattintas", { detail: this.#adat.id });
    window.dispatchEvent(esemeny);
  }
}

export default Termek;
