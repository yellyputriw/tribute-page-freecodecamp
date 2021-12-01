class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <nav>
      <ul>
        <li><a href="#main">Main</a></li>
        <li><a href="#tribute-info">Discography</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#follow">Follow</a></li>
      </ul>
    </nav>
  `;
  }
}

customElements.define('app-bat', AppBar);
