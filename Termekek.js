import { adat } from "./adatok.js";
import Termek from "/Termek.js";
import Asszinkron from "./Asszinkron.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    /*adat beolv */
    const asszinkron = new Asszinkron();
    let vegpont = "adat.json";
    asszinkron.adatBeolvas(vegpont, this.#termekmegjelenito);

    /* a function csak a html elemre vonatkozik*/
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
      console.log(event.detail);
    });
    console.log(this.#kedvencek);
  }
  #termekmegjelenito(lista) {
    let sajatlista = lista.adat
    /* megjeleníti az obj.*/
    /* a listát a json fájlból kajuk*/
    const SZULOELEM = $("article");
    console.log(sajatlista)
    for (let index = 0; index < sajatlista.length; index++) {
      const Termek1 = new Termek(sajatlista[index], SZULOELEM, index);
    }
  }
}
export default Termekek;
