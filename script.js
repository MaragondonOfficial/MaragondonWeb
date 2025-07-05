document.addEventListener("DOMContentLoaded", function () {
  const ua = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(ua);

  if (isMobile) {
    const warningHTML = `
      <div class="mobile-warning">
        <img src="brgylogo.jpg" alt="Logo" />
        <h1>📵 Desktop Mode Recommended</h1>
        <p>This website is designed for larger screens.<br>
        Please enable <b>Desktop Mode</b> in your mobile browser menu to continue.</p>
      </div>
    `;

    const warningStyles = document.createElement("style");
    warningStyles.textContent = `
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #ffffff, #f2f2f2);
        font-family: 'Inter', sans-serif;
      }
      .mobile-warning {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
        color: #333;
      }
      .mobile-warning img {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      .mobile-warning h1 {
        font-size: 1.8rem;
        margin-bottom: 10px;
      }
      .mobile-warning p {
        font-size: 1rem;
        line-height: 1.6;
        max-width: 400px;
      }
      .mobile-warning b {
        color: #e91e63;
      }
    `;

    document.head.appendChild(warningStyles);
    document.body.innerHTML = warningHTML;
  }
});
