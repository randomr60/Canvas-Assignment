"use strict";

class Rectangle {
    constructor(x_pos, y_pos, length, width) {
        this.currentX = x_pos;
        this.currentY = y_pos;
        this.length = length;
        this.width = width;
    }

    drawFill(ctx, shape_color) {
        ctx.fillStyle = shape_color;
        ctx.fillRect(this.currentX, this.currentY, this.length, this.width);
    }
    drawStroke(ctx, border_color, line_width) {
        ctx.strokeStyle = border_color;
        ctx.lineWidth = line_width;
        ctx.strokeRect(this.currentX, this.currentY, this.length, this.width);
    }
    

}