export default class ListaElem {
  #text = " ";
  #index = 0;

  constructor(szuloElem, index, text) {
    this.#text = text;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.textElem = document.querySelector(".text:last-child");
    this.pipaElem = document.querySelector(".pipa");
    console.log(this.pipaElem);
    this.ikszElem = this.textElem.querySelector(".iksz");
    this.elvegzett();
    this.torol();
  }
  megjelenit() {
    let html = `<p class="text">${this.#text}
                <button class="pipa">✅</button>
                <button class="iksz">❌</button>
                </p>
                `;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
  elvegzett() {
    this.pipaElem.addEventListener("click", () => {
      this.textElem.style.color = "green";
    });
  }
  torol() {
    this.ikszElem.addEventListener("click", () => {
      console.log("töröl");
      const e = new CustomEvent("torol", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
