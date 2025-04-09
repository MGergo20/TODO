import ListaElem from "./ListaElem";

export default class JatekMester {
  #lista = [];

  constructor(lista, szuloElemB, szuloElemL) {
    this.#lista = lista;
    this.szuloElemL = szuloElemL;
    this.szuloElemB = szuloElemB;
    this.megjelenitListaElemek();
    this.megjelenitBevitel();
    this.esemenykezeloTorles();
    this.esemenykezeloFelvetel();
  }
  esemenykezeloTorles() {
    window.addEventListener("torol", (event) => {
      console.log(event.detail);
      this.#lista.splice(event.detail, 1);
      this.megjelenitListaElemek();
    });
  }
  esemenykezeloFelvetel(){
    window.addEventListener("felvetel", (event) => {
        console.log(event.detail);
    })
  }
  megjelenitBevitel(){
    new Bevitel(this.szuloElemB);
  }
  megjelenitListaElemek(){
    for (let index = this.#listadex < this.#lista.length; index++){
        const element = this.#lista[index];
        new ListaElem(element, this.szuloElemL, index)
    }
         
    }
  }


