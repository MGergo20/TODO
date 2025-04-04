export default class Bevitel {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.inputElem = document.querySelector("#inp");
    this.buttonElem = document.querySelector("#OK");
    this.atpakol();
  }

  megjelenit() {
    let html = `<input type ="text" id="inp" placeholder="add todo"> 
                    <button id="OK">OK</button>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
  atpakol() {
    this.buttonElem.addEventListener("click", () => {
      console.log(this.inputElem.value);
      const e = new CustomEvent("felvetel", { detail: this.inputElem.value });
      window.dispatchEvent(e);
    });
  }
}
