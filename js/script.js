"use strict";

window.addEventListener("load", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const undoButton = document.querySelector(".btn:first-of-type");
    const clearButton = document.querySelector(".btn:last-of-type");
    const shapeButtons = document.querySelectorAll(".dropdown-content button");

    let shapes = [];
    let selectedShape = "Square";
    let color = "black";
    let size = 50;

    function resizeCanvas() {
        canvas.width = window.innerWidth - 100;
        canvas.height = window.innerHeight - 100;
        redrawCanvas();
    }

    function redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(shape => shape.draw(ctx));
    }

    function addShape(x, y) {
        let shape;
        switch (selectedShape) {
            case "Square":
                shape = new Square(x, y, size, color);
                break;
            case "Circle":
                shape = new Circle(x, y, size / 2, color);
                break;
            case "Triangle":
                shape = new Triangle(x, y, size, color);
                break;
            case "Trapezoid":
                shape = new Trapezoid(x, y, size, size * 1.5, size, color); 
                break;
        }
        shapes.push(shape);
        redrawCanvas();
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        localStorage.setItem("shapes", JSON.stringify(shapes));
    }

    function loadFromLocalStorage() {
        const savedShapes = JSON.parse(localStorage.getItem("shapes"));
        if (savedShapes) {
            shapes = savedShapes.map(s => {
                switch (s.type) {
                    case "Square": return new Square(s.x, s.y, s.size, s.color);
                    case "Circle": return new Circle(s.x, s.y, s.radius, s.color);
                    case "Triangle": return new Triangle(s.x, s.y, s.size, s.color);
                    case "Trapezoid": return new Trapezoid(s.x, s.y, s.topBase, s.bottomBase, s.height, s.color);
                }
            });
            redrawCanvas();
        }
    }

    undoButton.addEventListener("click", function () {
        shapes.pop();
        redrawCanvas();
        saveToLocalStorage();
    });

    clearButton.addEventListener("click", function () {
        shapes = [];
        redrawCanvas();
        localStorage.removeItem("shapes");
    });

    shapeButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedShape = this.textContent;
        });
    });

    canvas.addEventListener("click", function (event) {
        addShape(event.offsetX, event.offsetY);
    });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    loadFromLocalStorage();
});


