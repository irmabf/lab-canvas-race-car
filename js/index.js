window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d'); 
    const carImage = new Image();
    carImage.src = '../images/road.png';
    ctx.drawImage(carImage, 50, 50, 200, 200);
  }
};