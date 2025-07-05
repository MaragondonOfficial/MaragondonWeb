document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Clear the page
    document.body.innerHTML = '';

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(to bottom, #fefefe, #f2f2f2);
        font-family: 'Inter', sans-serif;
      }
      .warning-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 30px;
        color: #333;
      }
      .warning-container img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      .warning-container h1 {
        font-size: 1.8rem;
        margin-bottom: 10px;
      }
      .warning-container p {
        font-size: 1rem;
        max-width: 350px;
        line-height: 1.5;
      }
      .warning-container b {
        color: #e91e63;
      }
    `;
    document.head.appendChild(style);

    // Add HTML content
    const container = document.createElement('div');
    container.className = 'warning-container';
    container.innerHTML = `
      <img src="brgylogo.jpg" alt="Logo">
      <h1>📵 Desktop Mode Required</h1>
      <p>This website is best viewed on a larger screen.<br>Please enable <b>Desktop Mode</b> in your mobile browser.</p>
    `;
    document.body.appendChild(container);
  }
});
