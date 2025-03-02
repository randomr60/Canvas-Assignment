window.addEventListener("load", function (event) {
    const canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth-100;
        canvas.height = window.innerHeight-100;
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

