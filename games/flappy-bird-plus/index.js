//global variables because p5 is bad
let click = false
p5.disableFriendlyErrors = true;
let clickCooldown = true
let jmpRot = 0;
let CURRENT_SCREEN = 0;
let ScoreCooldown = 50;
let player;
let pillars;
let score = 0;
var noclip = false
let clouds;
let playSnd = true;
let playMusic = false;
let mode = 2
let upbtnCooldown = false;
let titlOff = 0;
let showClouds = true;
let sounds = [new Howl({src:["./assets/snd/flap.wav"]}), new Howl({src:["./assets/snd/pass.wav"]}),new Howl({src:["./assets/snd/select.mp3"]}), new Howl({src:["./assets/snd/crash.wav"]}), new Howl({src:["./assets/snd/Voxel Revolution.mp3"],loop: true,
volume: 0.5})]
let buyImg
let confirmClearScreen = false;


class Bird{
  constructor(file, price, special=false){
    this.sprite = `./assets/img/birds/${file}.png`
    this.name = file
    this.price = price
    this.owned = false
    this.special = special
  }
}
let birds;
//chrome.storage.local.get(["birds"], function(result){
//  if (result["birds"] === undefined || result["birds"] === 0){
//  birds =[new Bird("bird", 0),new Bird("bird-2", 80),new Bird("bird-3", 250),new Bird("bird-4", 630),new Bird("bird-5", 1499),new Bird("bird-6", 2999),new Bird("bird-8", 499, true), new Bird("bird-10", 499, true),new Bird("bird-7", 100, true),new Bird("bird-9", 2000000000000, true)];
//  
//  }else{
//    birds = result["birds"]
//  }
//})
birds =[new Bird("bird", 0),new Bird("bird-2", 80),new Bird("bird-3", 250),new Bird("bird-4", 630),new Bird("bird-5", 1499),new Bird("bird-6", 2999),new Bird("bird-8", 499, true), new Bird("bird-10", 499, true),new Bird("bird-7", 100, true),new Bird("bird-9", 2000000000000, true)];
if (localStorage.getItem("birds")!=null){
  const o = localStorage.getItem("birds")
  console.log(o)
  for (let x=0;x<=9;x++){
    if (o[x] == "1"){
      birds[x].owned = true
    }
    else{
      birds[x].owned = false
    }
    console.log(birds[x])
  }
}
//this fills my body with an indescribable amount of anger
function preload(){
  sprite = loadImage("./assets/img/birds/bird.png");
  pillarSprite = loadImage("./assets/img/pillar.png");
  helv = loadFont("./assets/img/Helvetica.ttf");
  helvBold = loadFont("./assets/img/Helvetica-Bold.ttf");
  cloud = loadImage("./assets/img/cloud.png");
  soundOnButtonImg = loadImage("./assets/img/sound on.png");
  soundOffButtonImg = loadImage("./assets/img/sound off.png");
  musicOnBtnImg = loadImage("./assets/img/music on.png");
  musicOffBtnImg = loadImage("./assets/img/music off.png");
  homeBtnImg = loadImage("./assets/img/home.png");
  coinImg = loadImage("./assets/img/coin.png");
  easyImg = loadImage("./assets/img/easy.png");
  mediumImg= loadImage("./assets/img/medium.png");
  hardImg= loadImage("./assets/img/hard.png");
  shopImg = loadImage("./assets/img/shop.png");
  buyImg = loadImage("./assets/img/buy.png");
  cancelImg = loadImage("./assets/img/cancel.png");
  cloudsOffImage = loadImage("./assets/img/clouds off.png");
  cloudsOnImage = loadImage("./assets/img/clouds on.png");
  statsImage = loadImage("./assets/img/stats.png");
  clearSaveImage = loadImage("./assets/img/clear.png");
  setTimeout(()=>{
    birds.forEach(bird=>{
      bird.sprite = loadImage(`./assets/img/birds/${bird.name}.png`)
    });
    birds[0].owned = true;
  }, 2000)
}

//p5 vectors suck
class Vector2{
  constructor(x, y){
    this.x = x
    this.y = y
    this.xy = [x, y]
  }
}


class Player{
  constructor(){
    this.pos = new Vector2(50, 50);
    this.cv3 = new Vector2(30, 498);
    this.money = 0
    this.highscore = [0, 0, 0]
    this.vel = new Vector2(0, 3);
    this.hitbox = [this.pos.x, this.pos.y, 50, 50];
    this.showHitboxes = false
    this.sprite = sprite
  }
  render(){
    this.hitbox = [this.pos.x + 15, this.pos.y +10, 50, 30];
    push()
  translate(player.pos.x + 30, player.pos.y +30)
  angleMode(DEGREES)
  rotate(player.vel.y*1.4)
  image(this.sprite, -30,-30, 75, 50)
  pop()
  }
}


class Pillar{
  constructor(x, y, space){
    this.pos = new Vector2(x, y);
    this.space = space;
    this.hitbox1 = [x, y, 70, 420];
    this.hitbox2 = [x, y+30, 30, 30];
    this.hitbox3 = [x, y, 70, 530];
    this.resetAt = -150
    this.spaceLimits = new Vector2(130, 200)
  }
  render(){
    image(pillarSprite, this.pos.x - 90, this.pos.y+ this.space+210, 90, 600)
    push()
    translate(this.pos.x, this.pos.y + 300)
    rotate(180)
    image(pillarSprite, 0,0, 90, 600)
    pop()
  }
  doStuff(){
    this.hitbox1 = [this.pos.x - 85,this.pos.y - 220,75, 425]
    this.hitbox2 = [this.pos.x - 85, this.pos.y+295+this.space, 75, 425]
    this.hitbox3 = [this.pos.x - 45, this.pos.y + 100, 10, 530]
    this.pos.x -= 2.5
    if (this.pos.x < this.resetAt){
        this.pos.x = 750
        this.space = randint(this.spaceLimits.x, this.spaceLimits.y)
        this.pos.y = randint(-240, 310-this.space)
    }
    
  }//we don't talk about this
  showHitboxesButActually(){
    push();
    fill(255, 255, 255);
    rect(this.hitbox1[0], this.hitbox1[1], this.hitbox1[2],this.hitbox1[3])
    rect(this.hitbox2[0], this.hitbox2[1], this.hitbox2[2],this.hitbox2[3])
    fill(20, 255, 10)
    rect(this.hitbox3[0], this.hitbox3[1], this.hitbox3[2], this.hitbox3[3])
    pop();
  }
}


class Cloud{
  constructor(x, y){
    this.pos = createVector(x, y)
  }
  render(){
    image(cloud, this.pos.x, this.pos.y)
  }
  move(slow){
    if (slow){
      this.pos.x -=0.4
    }else{
      this.pos.x -= 2
    }
    if (this.pos.x < -100){
      this.pos.x = 700
      this.pos.y = randint(10, 230)
    }
  }
}


class Button{
  constructor(x, y, name, sizex=50, sizey=50){
    this.pos = createVector(x,y)
    this.name = name
    this.size = createVector(sizex, sizey)
  }
  render(){
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
  }
  isClicked(){
    return((mouseX > this.pos.x)&&(mouseY>this.pos.y)&&(mouseY <=this.pos.y + this.size.y)&&(mouseX <=this.pos.x+this.size.x)&&(mouseIsPressed))
  }
}


function setup() {
  createCanvas(700, 595);
  angleMode(DEGREES);
  colorMode(RGB)
  frameRate(60);
  player = new Player();
  //chrome.storage.local.get(["highscore"], function(result){
  //  if (result["highscore"] === undefined){
  //  player.highscore = [0, 0, 0];
  //  }else{
  //    player.highscore =result["highscore"];
  //  }
  //})
  //chrome.storage.local.get(["money"], function(result){
  //  if (result["money"] === undefined){
  //  player.money = 0
  //  }else{
  //    player.money =result["money"]
  //  }
  //})
  if (localStorage.getItem("highscoree")=='null'){
    player.highscore=[0,0,0]
  }else{
  player.highscore = [localStorage.getItem("highscoree"), localStorage.getItem("highscorem"), localStorage.getItem("highscoreh")];
  }
  if (localStorage.getItem("money")=='null'){
    player.money = 0
  }else{
  player.money = localStorage.getItem("money")
  }
  // probably an easier way to do this
  pillars = [new Pillar(700, -30,190), new Pillar(930, -70,210), new Pillar(1160, -140,190), new Pillar(1390, -140,200)];
  clouds= [new Cloud(200, 230), new Cloud(290, 130),new Cloud(580, 180),new Cloud(850, 100)]
  buttons=[new Button(20, 20, "sound"), new Button(20, 20, "home"),new Button(90, 20), new Button(160, 20, "mode", 100, 50), new Button(280, 20, "shop", 50, 50), new Button(350, 20, "clouds", 50, 50), new Button(420, 20, "stats", 50, 50),new Button(600, 20, "clear", 50, 25), new Button(130, 380, "yes", 60, 30), new Button(200, 380, "no", 60, 30)]
}

function draw() {
  //image(bg, -50, 0, 770, 595);
  background(22, 177, 255);
  push();
  noStroke();
  fill(14, 196, 44);
  rect(0, 400, 700, 195);
  pop();
  switch (CURRENT_SCREEN){
    case 0:HomeScreen();break;
    case 1:
      gameloop()
      break;
      case 2:
      deathScreen()
      break;
      case 3:
      shopMenu()
      break;
      case 4:
      statsview();
      break;
  }
}


function checkCollision(rX1, rY1, rX2, rY2, r2X1, r2Y1, r2X2, r2Y2){
  return ((rX1+rX2 > r2X1) && (rY1 + rY2 > r2Y1) && (rX1 < r2X1 + r2X2) && (rY1 < r2Y1 + r2Y2))
}


function gameloop(){
  if (titlOff > -600){
    titlOff-=2.5;
  }
  click = false;
  if (!mouseIsPressed){
    clickCooldown = false;
  }
  if (!keyIsDown(38)){
    upbtnCooldown = false;
  }
  if (mouseIsPressed && !clickCooldown){
    if (playSnd){
      sounds[0].play();
    }
    click = true;
    clickCooldown = true;
  }
  if (keyIsDown(38) && !upbtnCooldown){
    if (playSnd){
      sounds[0].play();
    }
    click = true;
    upbtnCooldown = true;
  }
  player.pos.y += player.vel.y
  pillars.forEach(pillar=>{
    pillar.doStuff();
  })
  
  if (click && player.vel.y > -10){
    player.pos.y += -5;
    player.vel.y = -8;
  }
  player.vel.y += 0.2;
  if (player.pos.y < -20 || player.pos.y > 610){
    if (playSnd){
      sounds[3].play();
    }
    CURRENT_SCREEN = 2;
    switch (mode){
      case 1:
        player.money += int(score * 0.5);
        break;
      case 2:
        player.money += score;
        break;
      case 3:
        player.money += score * 2;
        break;
    }
    if (score > player.highscore[mode-1]){player.highscore[mode-1] = score;}
    backup();
  }
  pillars.forEach(pillar => {
  if (checkCollision(pillar.hitbox1[0], pillar.hitbox1[1], pillar.hitbox1[2], pillar.hitbox1[3], player.hitbox[0], player.hitbox[1], player.hitbox[2], player.hitbox[3]) || checkCollision(pillar.hitbox2[0], pillar.hitbox2[1], pillar.hitbox2[2], pillar.hitbox2[3], player.hitbox[0], player.hitbox[1], player.hitbox[2], player.hitbox[3])){
    if (!(player.cv3.x == 69 && player.cv3.y == 420)){
    if (playSnd){
      sounds[3].play();
    }
    if (score > player.highscore[mode-1]){
      player.highscore[mode-1] = score;
    }
    switch (mode){
      case 1:
        player.money += int(score * 0.5);
        break;
      case 2:
        player.money += score;
        break;
      case 3:
        player.money += score * 2;
        break;
    }
    backup();
    CURRENT_SCREEN = 2;
  }
  }
  else if (checkCollision(pillar.hitbox3[0], pillar.hitbox3[1], pillar.hitbox3[2], pillar.hitbox3[3], player.hitbox[0], player.hitbox[1], player.hitbox[2], player.hitbox[3]) && ScoreCooldown == 0){
    if (playSnd){
      sounds[1].play()
    }
    score++;
    ScoreCooldown = 50;
  }})
  if (ScoreCooldown > 0){ ScoreCooldown -= 1}
  //rendering
  if (showClouds){
    clouds.forEach(cloud =>{
      cloud.move(false)
      cloud.render()
    })
  }
  title()
  textSize(35)
  text("Press up arrow or click to jump", 100 + titlOff, 400)
  pillars.forEach(pillar=>{pillar.render()})
  player.render()
  if (player.cv3.y == 10){
  if (player.showHitboxes){rect(player.hitbox[0], player.hitbox[1], player.hitbox[2], player.hitbox[3])}
}
  push();
  textFont(helv);
  textSize(20);
  fill(0,0,0);
  text(`score: ${score}`, 20, 20);
  pop();
}


function deathScreen(){
  if (!mouseIsPressed){
    clickCooldown = false
  }
  if (buttons[1].isClicked() && !clickCooldown){
    if (playSnd){
      sounds[2].play()
    }
    clickCooldown = true
    resetLevel()
    titlOff = 0
    CURRENT_SCREEN = 0
  }
  if (mouseIsPressed && !clickCooldown){
    if (playSnd){
      sounds[2].play()
    }
    resetLevel()
  }
  if (showClouds){
  clouds.forEach(cloud =>{
    cloud.move(true)
    cloud.render()
  })
}
  pillars.forEach(pillar=>{
    pillar.render()
  player.render()
  })
  push()
  textFont(helvBold)
  textSize(80)
  fill(0,0,0)
  text("You Died!", 160, 220)
  textSize(30)
  textFont(helv)
  text("( Click To Respawn )", 200, 400)
  text(`Score: ${score}    Highscore: ${player.highscore[mode-1]}`, 180, 290)
  pop()
  image(homeBtnImg, buttons[1].pos.x, buttons[1].pos.y, 50, 50)
  push();
  textSize(25);
  image(coinImg, 200, 320);
  switch (mode){
    case 1:
      text(`+${int(score / 2)} coins`, 230, 342);
      break;
    case 2:
      text(`+${score} coins`, 230, 342);
      break;
    case 3:
      text(`+${score*2} coins`, 230, 342);
      break;
  }
  pop();
}

// I'm a python dev how do I import random
function randint(min,max){
  if ((min.toString()[0] == "-") && (max.toString()[0] == "-" != true)){
    const n = true
  }
  else{const n=false;}
  let x;
  while (true){
    x = Math.floor(Math.random() * max);
    if (Math.floor(Math.random() * 5) % 2 == 1 || Math.floor(Math.random() * 5) % 2 == 1){
      x *= -1
    }
   if (x > min){break}
  }
  return x;
}


function resetLevel(){
  // sets the pillars to differnt spaces
  modeCheck()
  score = 0
  CURRENT_SCREEN = 1
  clickCooldown = true
  player.pos.x = 50
  player.pos.y = 50
  player.vel.y = 4
}


function modeCheck(){
  switch (mode){
    case 1:
    pillars = [new Pillar(700, -30,170), new Pillar(950, -70,210), new Pillar(1200, -140,190), new Pillar(1450, -140,200)];
    pillars.forEach(pillar=>{
      pillar.resetAt = -280;
      pillar.spaceLimits = new Vector2(150, 230)
    })
    break;
    case 2:
    //pillars = [new Pillar(700, -30,190), new Pillar(930, -70,210), new Pillar(1160, -140,190), new Pillar(1390, -140,200)];
    // delete this : this.pos.y = randint(-240, 370-this.space-50)
    pillars = [new Pillar(700, -30,190), new Pillar(930, -240,200), new Pillar(1160, -10,190), new Pillar(1390, -140,140)];
    pillars.forEach(pillar=>{
      pillar.resetAt = -150;
      pillar.spaceLimits = new Vector2(130, 180)
    })
    break;
    case 3:
    pillars = [new Pillar(700, -30,190), new Pillar(920, -180,170), new Pillar(1140, -140,120), new Pillar(1360, -10,150)];
    pillars.forEach(pillar=>{
      pillar.resetAt = -150;
      pillar.spaceLimits = new Vector2(99, 160)
    })
  }
}


function HomeScreen(){
  if (!mouseIsPressed){
    clickCooldown = false
  }
  if (buttons[2].isClicked() && ! clickCooldown){
    playMusic = !playMusic
    clickCooldown = true
    if (playMusic){
      sounds[4].play()
    }else{
      sounds[4].stop()
    }
  }
  if (buttons[5].isClicked() && !clickCooldown){
    showClouds = !showClouds
    if (playSnd){
      sounds[2].play()
    }
    clickCooldown = true
  }
  if (buttons[0].isClicked() && !clickCooldown){
    playSnd = !playSnd
    if (playSnd){
      sounds[2].play()
    }
    clickCooldown = true
  }
  if (buttons[3].isClicked() && !clickCooldown){
    if (mode == 3){
      mode = 1
    }
    else{
      mode++
    }
    if (playSnd){
      sounds[2].play()
    }
    clickCooldown = true
  }
  if (buttons[4].isClicked() && !clickCooldown){
    if (playSnd){
      sounds[2].play()
    }
    CURRENT_SCREEN = 3
    clickCooldown = true
  }
  if (buttons[6].isClicked() && !clickCooldown){
    if (playSnd){
      sounds[2].play()
    }
    CURRENT_SCREEN = 4
    clickCooldown = true
  }
  if (mouseIsPressed && !clickCooldown){
    if (playSnd){
      sounds[2].play()
    }
    CURRENT_SCREEN = 1
    clickCooldown = true
  }
  player.pos.y += player.vel.y
  if ((player.pos.y > randint(300, 1200) || randint(0, 600) == 1) && player.vel.y > -10){
    player.pos.y += -5
    player.vel.y = -8
  }
  player.vel.y += 0.2
  if (showClouds){
  clouds.forEach(cloud =>{
    cloud.move(false)
    cloud.render()
  })
}
  player.render()
  title()
  if (playSnd){
    image(soundOnButtonImg, buttons[0].pos.x, buttons[0].pos.y, 50, 50)
  }
  else {
    image(soundOffButtonImg, buttons[0].pos.x, buttons[0].pos.y, 50, 50)
  }
  if (playMusic){
    image(musicOnBtnImg, buttons[2].pos.x, buttons[2].pos.y, 50, 50)
  }else{
    image(musicOffBtnImg, buttons[2].pos.x, buttons[2].pos.y, 50, 50)
  }
  if (showClouds){
    image(cloudsOnImage, 350, 20, 50, 50)
  }else{
    image(cloudsOffImage, 350, 20, 50, 50)
  }
  image(coinImg, 590, 10);
  textSize(20);
  modeCheck();
  text(player.money, 620, 30)
  switch (mode){
    case 1:
      image(easyImg, 160, 20);
      break;
    case 2:
      image(mediumImg, 160, 20);
      break;
    case 3:
      image(hardImg, 160, 20);
      break;
  }
  image(shopImg, 280, 20);
  image(statsImage, 420, 20)
}


function title(){
  push()
  textSize(80)
  textFont(helvBold)
  fill(255, 255, 255)
  stroke(0,0,0)
  strokeWeight(5)
  text("Flappy bird", 140 + titlOff, 220)
  textFont(helv)
  textSize(20)
  text("( Click To Play )", 260 + titlOff, 280)
  pop()
}


function backup(){
  //chrome.storage.local.set({ "highscore": player.highscore });
  //chrome.storage.local.set({ "money": player.money });
  //chrome.storage.local.set({ "birds": birds })
  localStorage.setItem("highscoree", player.highscore[0])
  localStorage.setItem("highscorem", player.highscore[1])
  localStorage.setItem("highscoreh", player.highscore[2])
  localStorage.setItem("money", player.money)

  let o = "";
  birds.forEach(bird=>{
    if (bird.owned){
      o += "1"
    }
    else{
      o += "0"
    }
  })
  localStorage.setItem("birds", o)
}

function clearSave(){
  localStorage.setItem("highscoree", 0)
  localStorage.setItem("highscorem", 0)
  localStorage.setItem("highscoreh", 0)
  localStorage.setItem("money", 0)
  localStorage.setItem("birds", "1000000000")
  player.highscore = [0,0,0];
  player.money = 0;
  birds =[new Bird("bird", 0),new Bird("bird-2", 80),new Bird("bird-3", 250),new Bird("bird-4", 630),new Bird("bird-5", 1499),new Bird("bird-6", 2999),new Bird("bird-8", 499, true), new Bird("bird-10", 499, true),new Bird("bird-7", 100, true),new Bird("bird-9", 2000000000000, true)];
  birds[0].owned = true;
  backup()
}


let buyscrn = false
let selectionBox = new Vector2(65, 150)
let item;
function shopMenu(){
  if (showClouds){
  clouds.forEach(cloud=>{
    cloud.move(true)
    cloud.render()
  })
}
  push()
  rectMode(CENTER)
  fill(20, 250, 10)
  rect(selectionBox.x,selectionBox.y, 90, 80)
  pop()
  var pos = 65;
  var button
  let ypos = 0
  let index = 0
  birds.forEach(bird =>{
    if (pos >= 700){
      pos = 65;
      ypos += 120
    }
    if ((bird.name == "bird-7" || bird.name == "bird-9") && !(player.cv3.x == 47 || bird.owned)){
      return
    }
    if (!mouseIsPressed){
      clickCooldown = false
    }
    if (buttons[1].isClicked() && !clickCooldown && !buyscrn){
      if (playSnd){
        sounds[2].play()
      }
      clickCooldown = true
      resetLevel()
      titlOff = 0
      CURRENT_SCREEN = 0
    }
    button = new Button(pos-40, 115+ypos, "a", 80, 70)
    if (button.isClicked() && !clickCooldown && !buyscrn){
      if (bird.owned){
      if (playSnd){
        sounds[2].play()
      }
      player.sprite = bird.sprite
      selectionBox.x = pos
      selectionBox.y = 150 + ypos
    }
    else{
      if (player.money >=bird.price){
        buyscrn = true
        item = index;
      }
    }
    clickCooldown = true
    }
    push();
    rectMode(CENTER);
    if (bird.special){
      fill(63, 239, 255)
    }else{
    fill(255, 255, 255)
    }
    rect(pos, 150+ypos, 80, 70)
    rectMode(CORNER);
    rectMode(CORNER);
    rect(pos-40, 115+ypos, 80, 70)
    rectMode(CENTER)
    imageMode(CENTER);
    try{
    image(bird.sprite, pos, 150+ypos, 75, 50);
    }catch{
      console.log("loading")
    }
    if (player.money >= bird.price){
    fill(255, 255, 255)
    }else{
      fill(255, 20, 10)
    }
    if (!bird.owned){
    text(bird.price, pos-10, 212+ypos)
    image(coinImg, pos-25, 205+ypos)
    }
    pos += 95;
    pop();
    image(homeBtnImg, buttons[1].pos.x, buttons[1].pos.y, 50, 50)
    index++;
  })
  if (buyscrn){
    buyScreen()
  }
}


function buyScreen(){
  if (!mouseIsPressed){
    clickCooldown = false
  }
  buyBtn = new Button(120, 300, "buyBtn", 100, 50)
  cancelBtn = new Button(120, 360, "buyBtn", 100, 50)
  if (buyBtn.isClicked()){
    player.money -= birds[item].price;
    birds[item].owned = true
    buyscrn = false
    clickCooldown = true
  }
  else if (cancelBtn.isClicked()){
    buyscrn = false
    clickCooldown = true
  }
  push()
  rectMode(CENTER)
  fill(185, 185, 185)
  rect(350, 297, 500, 250)
  pop()
  image(buyImg, 120, 300, 100, 50)
  image(cancelImg, 120, 360, 100, 50)
  image(birds[item].sprite, 120, 200, 75, 50)
  text(`cost: ${birds[item].price}`, 120, 280)
  backup();
}


function statsview(){
  background(100);
  push();
  rectMode(CENTER);
  textSize(50);
  text("STATS", 250, 70);
  pop();
  rect(20, 20, 20)
  if (!mouseIsPressed){clickCooldown = false}
  if (buttons[1].isClicked() && !clickCooldown){
      if (playSnd){
        sounds[2].play()
      }
      clickCooldown = true
      resetLevel()
      titlOff = 0
      CURRENT_SCREEN = 0
    }
    if (buttons[7].isClicked() && !clickCooldown){
      if (playSnd){
        sounds[2].play()
      }
      clickCooldown = true;
      confirmClearScreen = true;
    }
  image(homeBtnImg, buttons[1].pos.x, buttons[1].pos.y, 50, 50)
  image(clearSaveImage,620, 20, 50, 25)
  try{
  image(player.sprite, 10, 100, 75, 50)
  }catch{
    console.log("loading")
  }
  push();
  textSize(40);
  text("Highscores:", 20, 250)
  image(coinImg, 20, 170)
  pop();
  push();
  textSize(20);
  text(player.money, 50, 190)
  text("Easy:",20,290)
  text("Medium:",20, 320)
  text("Hard:",20, 350)
  fill(255, 255, 255)
  text(player.highscore[0],75,290)
  text(player.highscore[1],100,320)
  text(player.highscore[2],75,350)
  pop();
  if (confirmClearScreen){
    clearSaveConfirmation()
  }
}


function clearSaveConfirmation(){
  if (buttons[8].isClicked()){
    clickCooldown = true
    confirmClearScreen = false
    clearSave()
    if (playSnd){
      sounds[2].play()
    }
  }
  else if (buttons[9].isClicked()){
    confirmClearScreen = false
    clickCooldown = true
    if (playSnd){
      sounds[2].play()
    }
  }
  push()
  rectMode(CENTER);
  fill(20, 20, 20);
  rect(350, 297, 500, 250);
  pop();
  push();
  fill(255, 255, 255);
  buttons[8].render();
  buttons[9].render();
  pop();

  push()
  fill(255, 255, 255)
  text("Are you sure you want to wipe your save?", 120, 210)
  fill(0,0,0)
  text("YES", 135, 404);
  text("NO", 205, 404);
  pop()
}

//he he game go brrrrr
