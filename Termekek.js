import { adat } from "./adatok.js";
import Termek from "/Termek.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    const SZULOELEM = $("article");

    for (let index = 0; index < adat.length; index++) {
      const Termek1 = new Termek(adat[index], SZULOELEM);
    }
    /* a function csak a html elemre vonatkozik*/
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail)
      console.log(this.#kedvencek);
      console.log(event.detail);
    });
    console.log(this.#kedvencek);
  }
}
export default Termekek;
