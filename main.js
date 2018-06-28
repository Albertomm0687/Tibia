var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//constantes
var interval;
var frames;
var enemies = [];
var images = {
  background: './Fondo.png',
  warf: './Character/WarriorRight.png',
  drag: './DragL.png',
  barf:'./Character/BarbarianRight.png',
  spear: './spear.png',
}

//class
class Character{
  constructor(x=0,y=0,img){
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  this.image = new Image()
  this.image.src = img;
  this.image.onload = function(){
    this.draw();
    }.bind(this);
    this.vX = 1;
    this.vY = 1;
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
}

class WarF extends Character{
  constructor(x,y,img){
    super(x,y,img)
    this.spear = [];
  }
}

class BarF extends Character{
  constructor(x,y,img){
    super(x,y,img)
    this.spear = [];
  }
}
class Board{
  constructor(){
    this.image = new Image();
    this.image.src = images.background
    this.image.onload = function(){
      this.draw();
    }.bind(this);
  }
  draw(){
    ctx.drawImage(this.image,0,0,canvas.width,canvas.height);
  }
}

class Spear{
  constructor(character){
    this.width = 50;
    this.height = 50;
    //this.x = character.x + character.width/2 - this.width/2;
    //this.y = character.y - this.height;

    this.y = character.y + character.height/2 - this.height/2;
    this.x = character.x + this.width;

    //this.x = character.x + character.height/2 - this.height/2;
    //this.y = character.y - this.width;

    this.vX = 2;
    this.image = new Image();
    this.image.src = images.spear;
    this.image.onload = function(){
      this.draw();
    }.bind(this);
  }
  draw(){
    this.x+=this.vX;
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
}



//instancias
var board = new Board();
var warf = new WarF(canvas.width -1000,canvas.height/2,images.warf);
var barf = new BarF(canvas.width -1000,canvas.height -370,images.barf);

//mainfunctions
function update(){
  frames++
  ctx.clearRect(0,0,canvas.width,canvas.height);
  board.draw();
  warf.draw();
  barf.draw();
  drawSpear();
  drawSpear2();
}
function start(){
  interval = setInterval(update,1000/60);
}
//auxfunctions
function generateSpear(){
  var spear = new Spear(warf);
    warf.spear.push(spear);
}
function drawSpear(){
    warf.spear.forEach(function(b){
      b.draw();
    })
  }
function generateSpear2(){
    var spear = new Spear(barf);
    console.log('pum');
      barf.spear.push(spear);
  }
function drawSpear2(){
      barf.spear.forEach(function(c){
        c.draw();
        console.log('balita saliendo')
      })
    }
//listeners
addEventListener('keydown',function(e){
  switch(e.keyCode){
    case 37:
      if(warf.x === 0) return;
      warf.x -= 30;
      break;
    case 39:
      if(warf.x === canvas.width - warf.width) return;
      warf.x += 30;
      break;
    case 38:
      if(warf.y === 0) return;
      warf.y -= 30;
      break;
    case 40:
      if(warf.y === canvas.height - warf.height) return;
      warf.y += 30;
      break;
    case 87:
      if(barf.y === 0) return;
      barf.y -= 30;
      break;
    case 83:
     if(barf.y === canvas.height - warf.height) return;
     barf.y += 30;
     break;
    case 65:
     if(barf.x === 0) return;
     barf.x -= 30;
     break;
    case 68:
     if(barf.x === canvas.width - warf.width) return;
     barf.x += 30;
     break;
    case 13:
     generateSpear();
    case 32:
     generateSpear2();
  }
});
start();
