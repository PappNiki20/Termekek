
import { adat } from "./adatok.js";
import Termek from "/Termek.js";
class Termekek {
  #kedvencek = [];
  constructor() {
    const SZULOELEM = $("article");

    for (let index = 0; index < adat.length; index++) {
      const Termek1 = new Termek(adat[index], SZULOELEM);
    }
    this.#buttonElem.on("click",  function ()  {
        this.#kedvencek.append(this.adat);
        console.log(this.#kedvencek)
});
  }
   
}
export default Termekek;