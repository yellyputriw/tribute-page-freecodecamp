class TributeInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Discography</h2>
      <ul>
        <li class="album">
          <a
            href="https://twice.jype.com/Default/DiscographyView?AamSeq=130&AmSeq=0&PgIndex=0"
            target="_blank"
          >
            <img
              src="https://img.ske48.co.jp/discography/202107301921_11423.jpg"
              alt="Cry For Me"
              class="album-img"
            />
            <div class="album-overlay">
              <div class="release-date">2021-09-01</div>
              <div class="album-title">あの頃の君を見つけた</div>
            </div>
          </a>
        </li>
        <li class="album">
          <a
            href="https://twice.jype.com/Default/DiscographyView?AamSeq=93"
            target="_blank"
          >
            <img
              src="https://img.ske48.co.jp/discography/202101112104_17504.jpg"
              alt="Eyes Wide Open"
              class="album-img"
            />
            <div class="album-overlay">
              <div class="release-date">2021-02-03</div>
              <div class="album-title">恋落ちフラグ</div>
            </div>
          </a>
        </li>
        <li class="album">
          <a
            href="https://twice.jype.com/Default/DiscographyView?AamSeq=92"
            target="_blank"
          >
            <img
              src="https://img.ske48.co.jp/discography/201912101003_08938.jpg"
              alt="More and More"
              class="album-img"
            />
            <div class="album-overlay">
              <div class="release-date">2020-01-15</div>
              <div class="album-title">ソーユートコあるよね？</div>
            </div>
          </a>
        </li>
      </ul>
      `;
  }
}

customElements.define('tribute-info', TributeInfo);
