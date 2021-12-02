class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
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

customElements.define('app-bar', AppBar);
