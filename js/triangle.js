"use strict";

class Triangle {
    constructor(x_pos, y_pos, base, height) {
        this.currentX = x_pos;
        this.currentY = y_pos;
        this.base = base;
        this.height = height;
    }

    graphShapeFill(ctx, shape_color) {
        ctx.fillStyle = shape_color;
        drawOutline(ctx);
        ctx.fill();
    }
    getMiddleX() {
        if (this.base % 2 == 0) {
            return this.base / 2;
        }
        else {
            return Math.floor(this.base) + 1;
        }
    }
    graphShapeStroke(ctx, border_color, line_width) {
        ctx.strokeStyle = border_color;
        ctx.lineWidth = line_width;
        drawOutline(ctx);
        ctx.stroke();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.currentX, this.currentY);
        ctx.lineTo(getMiddleX(), this.currentY + this.height);
        ctx.lineTo(this.currentX + this.base, this.currentY);
        ctx.closePath();
    }


}


