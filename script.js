console.log("Empire Flippers Clone Loaded!");

if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  document.body.innerHTML = `
    <div style="
      background: white;
      color: black;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      font-size: 1.5rem;
      font-family: Arial, sans-serif;">
      📵 This site is best viewed on a desktop.<br>
      Please switch to desktop mode.
    </div>
  `;
}
