function init() {
    c1 = document.querySelector("#canvas");
    ctx = c1.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillText("This is Canvas",8,30);
    ctx.strokeText("Hello world!",8,60);
    ctx.moveTo(8,35);
    ctx.lineTo(450,35);
    ctx.stroke();
    ctx.rect(30,90,200,200);
    ctx.fillStyle = "#39FF14";
    ctx.fill();
    ctx.moveTo(125,350);
    ctx.arc(125,350,100,0,Math.PI,0);
    // ctx.fillStyle = "#FFE700"
    ctx.fill();
}