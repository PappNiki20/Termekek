import { adat } from "./adatok.js";
import Termek from "/Termek.js";
import Asszinkron from "./Asszinkron.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    /*adat beolv */
    const asszinkron = new Asszinkron();
    let vegpont = " http://localhost:3000/adat";
    asszinkron.adatBeolvas(vegpont, this.#termekmegjelenito);

    /* a function csak a html elemre vonatkozik*/
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
    $(window).on("torol", (event) => {
      asszinkron.adatorles(vegpont, event.detail);
      console.log(event.detail);
    });
  }
  #termekmegjelenito(lista) {
    let sajatlista = lista;
    /* megjeleníti az obj.*/
    /* a listát a json fájlból kajuk*/
    const SZULOELEM = $("article");

    for (let index = 0; index < sajatlista.length; index++) {
      const Termek1 = new Termek(sajatlista[index], SZULOELEM, index);
    }
  }
}
export default Termekek;
