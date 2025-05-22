// Canvas background animation logic
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawLines();
}

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
    ctx.lineWidth = 1;

    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        ctx.moveTo(x, y);
        for (let j = 0; j < 20; j++) {
            x += (Math.random() - 0.5) * 100;
            y += (Math.random() - 0.5) * 50;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();