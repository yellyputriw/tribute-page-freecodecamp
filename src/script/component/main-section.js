class MainSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 id="title">SKE48</h1>
    <p class="tagline">あの頃の君を見つけた</p>

    <figure id="img-div">
      <img
        src="https://www.ske48.co.jp/whatsSKE48/img/ske48_28thsingle.jpg"
        alt="Twice"
        id="image"
      />
      <figcaption id="img-caption">SKE48 28th Single</figcaption>
    </figure>
      `;
  }
}

customElements.define('main-section', MainSection);
