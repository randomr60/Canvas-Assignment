"use strict";

class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw(ctx) {
        throw new Error("draw() must be implemented in subclasses");
    }
}

class Square extends Shape {
    constructor(x, y, size, color) {
        super(x, y, color);
        this.size = size;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Circle extends Shape {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Triangle extends Shape {
    constructor(x, y, size, color) {
        super(x, y, color);
        this.size = size;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size, this.y + this.size);
        ctx.lineTo(this.x - this.size, this.y + this.size);
        ctx.closePath();
        ctx.fill();
    }
}

class Trapezoid extends Shape {
    constructor(x, y, topBase, bottomBase, height, color) {
        super(x, y, color);
        this.topBase = topBase;
        this.bottomBase = bottomBase;
        this.height = height;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y); 
        ctx.lineTo(this.x + this.topBase, this.y); 
        ctx.lineTo(this.x + this.bottomBase, this.y + this.height); 
        ctx.lineTo(this.x - (this.bottomBase - this.topBase) / 2, this.y + this.height); 
        ctx.closePath();
        ctx.fill();
    }
}



