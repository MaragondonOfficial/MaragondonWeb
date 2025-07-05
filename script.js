document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    document.body.innerHTML = `
      <div style="
        background: white;
        color: black;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
        font-size: 1.5rem;
        font-family: Arial, sans-serif;">
        📵 This website is best viewed on a desktop.<br><br>
        Please enable <b>Desktop Mode</b> in your browser settings.
      </div>
    `;
  } else {
    console.log("Desktop mode detected.");
  }
});
