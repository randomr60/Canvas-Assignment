"use strict";

class Circle {
    constructor(x_pos, y_pos, radius) {
        this.currentX = x_pos;
        this.currentY = y_pos;
        this.radius = radius;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, this.radius, 0, Math.PI * 2);
        ctx.closePath();
    }
}