class VideoSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>Videos</h2>
    <div
      class="g-ytsubscribe"
      data-channelid="UCG-5D9k_fL4FnMeNuraeAtA"
      data-layout="full"
      data-count="default"
    ></div>

    <div class="video-list">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SY0gdrzM328"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nAJrs6Or_bI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/anUVytIaU0w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    `;
  }
}

customElements.define('video-section', VideoSection);
