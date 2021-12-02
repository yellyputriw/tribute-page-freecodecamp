class FollowSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="follow">
      <h2>Follow SKE48</h2>
      <ul>
        <li>
          <a href="https://www.ske48.co.jp/" id="tribute-link" target="_blank"
            ><i class="fas fa-globe"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/official_ske48/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/ske48official" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/ske48" target="_blank"
            ><i class="fab fa-youtube"></i
          ></a>
        </li>
      </ul> 
    </div>
    `;
  }
}

customElements.define('follow-section', FollowSection);
