class Rectangle {
    constructor(x, y) {
        this._length = x;
        this._width = y;
    }

    get width() {
        return this._width;
    }

    get length() {
        return this._length;
    }

    perimeter() {
        return (this._width + this._length) * 2;
    }

    area() {
        return this._width * this._length;
    }
    callPerimeter(){
        document.getElementById('myPerimeter').innerHTML = 'chu vi hinh chu nhat la :' + this.perimeter();
    }
    callArea(){
        document.getElementById('myArea').innerHTML = 'dien tich hinh chu nhat la :' + this.area();
    }

    drawRect(){
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.fillRect(20,20,this._width,this._length);
    }

}