/**
 * Created by momo on 8/12/16.
 */

var Square = function(width, height, color, id){
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.margin = Math.floor(Math.random()*10) + 1;
    this.direction = Math.floor(Math.random()*2) + 1;
};

Square.prototype.drawSquare = function(){
    var parent = document.getElementById("squares-box");
    var toy = document.createElement("div");
    toy.setAttribute("class", "square");
    toy.style.width = this.width + "px";
    toy.style.height = this.height + "px";
    toy.style.backgroundColor = this.color;

    toy.setAttribute("id", this.id);
    parent.appendChild(toy);
};

Square.prototype.moveSquare = function(){
    var box = document.getElementById(this.id);
    var leftmargin = Number(box.style.marginLeft);
    console.log(leftmargin);
    if(this.direction % 2 == 0) {
        leftmargin += this.margin;
        box.style.marginLeft = leftmargin + "px";

    }
    else{
        leftmargin -= this.margin;
        box.style.marginLeft = leftmargin + "px";

    }

    console.log("left margin = " + leftmargin);
    console.log(typeof(leftmargin));
    console.log(box.style.marginLeft);


};

redSquare = new Square(50, 50, "red", "redsquare");
greenSquare = new Square(70, 70, "green", "greensquare");
blueSquare = new Square(40,40, "blue", "bluesquare");
blackSquare = new Square(80, 80, "black", "blacksquare");

redSquare.drawSquare();
greenSquare.drawSquare();
blueSquare.drawSquare();
blackSquare.drawSquare();


var button = document.getElementById("button");
button.addEventListener("click", function(){
    redSquare.moveSquare();
    //greenSquare.moveSquare();
    //blueSquare.moveSquare();
    //blackSquare.moveSquare();
});




