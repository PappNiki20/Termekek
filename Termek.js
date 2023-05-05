class Termek {
  #adat;
  #divelem;
  kedvencButtonElem;
  constructor(adat, szuloelem) {
    this.#adat = adat;
    szuloelem.append(`<div class="szElem"> <p>Név: ${this.#adat.nev}</p> 
        <p>Fajta: ${adat.fajta}</p> <p>Kor: ${
      adat.kor
    }</p> <button class="kedvenc">Kedvencekhez ad</button>
    <button class="torol">Törlés</button>
    </div>`);
    this.#divelem = szuloelem.children("div:last-child");
    this.kedvencButtonElem = this.#divelem.children(".kedvenc");
    this.torolButtonElem = this.#divelem.children(".torol");
    this.kedvencButtonElem.on("click", () => {
      console.log(this.#adat.id);
      this.esemenyTrigger("kedvencekhez");
    });
    this.torolButtonElem.on("click", () => {
      console.log(this.#adat.id);
      this.esemenyTrigger("torol");
    });
  }
  esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this.#adat.id });
    window.dispatchEvent(esemeny);
  }
  
}

export default Termek;
