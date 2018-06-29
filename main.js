var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//constantes
var interval;
var frames = 0;
var drags = [];
var dragk = [];
var images = {
  background: './Fondo.png',
  warf: './Character/WarriorRight.png',
  drag: './DragL.png',
  barf:'./Character/BarbarianRight.png',
  spear: './spear2.png',
  drav: './Dragon.png'
}
var sound = new Audio();
sound.src = './backsound.mp3'
sound.loop = true;

//class
class Character{
  constructor(x=0,y=0,img, name){
  this.x = x;
  this.y = y;
  this.name = name
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
  isTouching(item){
        return  (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
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

  gameOver(character){
    ctx.font = "80px Avenir";
    ctx.fillText('Game Over',20,100);
    ctx.fillText(character+' wins',20, 300)
    ctx.font = '20px Serif';
    ctx.fillStyle = "white"
    ctx.fillText('Press "Enter" to reset', 20, 150);
    clearInterval(interval)
  }
  youWin(){
    ctx.font = "80px Avenir";
    ctx.fillText('You Win!!',20,100);
    ctx.font = '20px Serif';
    ctx.fillStyle = "white"
    ctx.fillText('Press "Enter" to reset', 20, 150);
  }
  draw(){
    ctx.drawImage(this.image,0,0,canvas.width,canvas.height);
  }
}

class Spear{
  constructor(character){
    this.width = 50;
    this.height = 50;

    this.y = character.y + character.height/2 - this.height/2;
    this.x = character.x + this.width;

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
  isTouchingD(item){
        return  (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
      }
}
class Dragkiller{
    constructor(position, y , heigth){
        this.x = canvas.width - 100;
        this.y = y;
        this.width = 90;
        this.height = heigth;
        this.image = new Image();
        this.image.src = images.drav;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
      }
      draw(){
      this.x-=2;
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }};


class Drags{
    constructor(position, y, height){
    this.x = canvas.width - 100;
    this.y = y;
    this.width = 60;
    this.height = height;
    this.image = new Image();
    this.image.src = position === 'top' ? images.drag : images.drav;
    this.image.onload = function(){
      this.draw();
    }.bind(this)
}
  draw(){
  this.x-=2;
  ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
}};



//instancias
var board = new Board();
var warf = new WarF(canvas.width -1250,canvas.height/2,images.warf, 'Warf');
var barf = new BarF(canvas.width -1250,canvas.height -390,images.barf, 'Barf');
//var height = Math.floor((Math.random() * canvas.height * .6 ) + 30 );
//var drag1 = new Drags('top', Math.floor(Math.random()*canvas.height), height);

//var drag = new Drags(canvas.width -900,canvas.height -370,images.barf)

//mainfunctions
function update(){
  frames++;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  board.draw();
  warf.draw();
  barf.draw();
  //drag1.draw()
  drawSpear();
  drawSpear2();
  generateDragons();
  drawDragons();
  checkIfSpearTouchADragon();
  checkIfSpearTouchADragonP2();
  generateKillerDragons();
  drawdragk();

}
function start(){
  if(interval) return;
  interval = setInterval(update,1000/60);
  //sound.play()
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
      barf.spear.push(spear);
  }
function drawSpear2(){
      barf.spear.forEach(function(c){
        c.draw();
      })
      }

function generateDragons(){
  if(!(frames%60===0) ) return;
  var height = Math.floor((Math.random() * canvas.height * .6 ) + 30 );
  var drag1 = new Drags('top', Math.floor(Math.random()*canvas.height), 100);
  var drag2 = new Drags('top', Math.floor(Math.random()*canvas.height), 100);
  var drag3 = new Drags('top', Math.floor(Math.random()*canvas.height), 100);
  drags.push(drag1);
  drags.push(drag2);
  drags.push(drag3);
  //drawDragons()
  console.log("generando");
}
function drawDragons(){
  drags.forEach(function(a){
    a.draw();
    if(warf.isTouching(a)){
      finishHim('Player 1');
    }
    if(barf.isTouching(a)){
      finishHim('Player 2');
    }
  })
}
//----------------------------
function generateKillerDragons(){
  if(!(frames%80===0) )return;
  var height = Math.floor((Math.random() * canvas.height * .6 ) + 30 );
  var dragk1 = new Dragkiller(null, Math.floor(Math.random()*canvas.height), 100);
  dragk.push(dragk1);
}
function drawdragk(){
  dragk.forEach(function(k){
    k.draw();
    if(warf.isTouching(k)){
      finishHim('Player 1');
    }
    if(barf.isTouching(k)){
      finishHim('Player 2');
    }
  })
  }

//------------------------------
function finishHim(character){
  board.gameOver(character);
  sound.pause ();
  sound.currenTime = 0;
  clearInterval(interval);
  interval = undefined;
}
function finishThem(){
  clearInterval(interval);
  interval = undefined;
  board.youWin();
}


//checar golpeas al Dragon
function checkIfSpearTouchADragon(){
  warf.spear.forEach(function(s){
    drags.forEach(function(d){
      if(s.isTouchingD(d)){
        drags.splice(drags.indexOf(d),1);
        warf.spear.splice(warf.spear.indexOf(s),1);
      }
    });
  });
}

function checkIfSpearTouchADragonP2(){
    barf.spear.forEach(function(s){
      drags.forEach(function(d){
        if(s.isTouchingD(d)){
          drags.splice(drags.indexOf(d),1);
          barf.spear.splice(warf.spear.indexOf(s),1);
        }
      });
    });
  }

function restart(){
      if(interval) return;
      var drags = [];
      var dragk = [];
      frames = 0;
      start();
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
      sound.play();
      break;
    case 38:
      if(warf.y === 0) return;
      warf.y -= 30;
      break;
    case 40:
      if(warf.y === canvas.height - warf.height) return;
      warf.y += 30;
      sound.play();
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
    case 32:
     generateSpear();
     break;
    case 27:
     generateSpear2();
     break;
    case 13:
     restart();
     break;
  }
});
start();
