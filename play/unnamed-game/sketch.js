//The game:

//don't get hit by the red blocks
//move your character using right and left arrow
//the game speeds up overtime
//thats it


//my sloppy code:

// variables
let x = 0
let y = 400
let size = 100
let obs1x = null
let obs1y = null
let obs1 = false
let start = false
let textstuff = null
let speed = 4
let score = 0
let stage = 1
let judge = ''



//annoying sound :P
function preload(){
  sound = loadSound('s0und.mp3')
}

//canvas and text
function setup() {
  createCanvas(400, 600);
  colorMode(RGB, 255)
  textSize(width / 10);
  textAlign(CENTER, CENTER)
}

// drawing the objects
function draw() {
  background(0, 229, 255);
  if (start == true){
    fill(0, 255, 42)
    square(x, y, size)
  }
  fill(0,0,0)
  rect(200, 0, 2, 800)
  rect(100, 0, 2, 800)
  rect(300, 0, 2, 800)
  scoresetup()
  timedObstacle1()
  isDead()
}

//main user input
function keyPressed(){
  if ((keyCode == LEFT_ARROW) && (x > 0) && (start == true)) {
    sound.play()
    x = x + -100
  }
  else if ((keyCode == RIGHT_ARROW) && (x < 300) && start == true) {
    x = x + 100
    sound.play()
  }
}

//randomly placed obstacle 1
function timedObstacle1(){
  if (obs1y >= 700){
      obs1y = -60
      obs1 = false
      score += 1
  }
  if (start == true){
    obs1y = obs1y + speed
  }
  if ((obs1 == false) && (start == true)){
    obs1x = int(random(0, 4))
    obs1 = true
  }
  
  if (obs1x == 0){
    fill(255, 0, 0)
    square(100, obs1y, size)
    square(200, obs1y, size)
    square(300, obs1y, size)
  }
  else if (obs1x == 1){
    fill(255, 0, 0)
    square(0, obs1y, size)
    square(200, obs1y, size)
    square(300, obs1y, size)
  }
  else if (obs1x == 2){
    fill(255,0,0)
    square(0, obs1y, size)
    square(100, obs1y, size)
    square(300, obs1y, size)
  }
  else if (obs1x == 3){
    fill(255,0,0)
    square(0, obs1y, size)
    square(100, obs1y, size)
    square(200, obs1y, size)
  }
}

//this part checks if you're face deep in a object
// and if you die you get a different death message
function isDead() {
  if ((obs1y >= 300 && obs1y <= 500) && (x != obs1x * 100)){
    if (start == true){
      textstuff = int(random(0,7))
    }
    const death_messages = ["ded", "Rip", "Too Slow!", "try not dying", "the arrow keys are the ones with the arrows on them", "how'd that feel?", "you have bad"]
    start = false
    textAlign(CENTER)
    const string = death_messages[textstuff]
    console.log(string.length)
    if (string.length < 18){
     textSize(width/10)
    }else if (string.length < 28){
      textSize(width/15)
    }else if (string.length < 32){
      textSize(width/18)
    }else{
      textSize(width/25)
    }
    fill(0,0,0)
    text(string, width/2, 200)
    endtext()
    }
  
}

function mousePressed(){
  start = true
  obs1y = -30
  obs1x = 0
  score = 0
  speed = 4
}

//speeds up the game, copy and pasted most of this over and over
function scoresetup(){
  textSize(width/30)
  text(`Score: ${score}`, 30, 40)
  textSize(width/10)
  if ((score == 10) && (stage == 1)){
    speed++
    stage++
  }
  else if ((score == 20) && (stage == 2)){
    speed++
    stage++
  }
  else if ((score == 35) && (stage == 3)){
    speed += 2
    stage++
  }
  else if ((score == 40) && (stage == 4)){
    speed+=2
    stage++
  }
  else if ((score == 50) && (stage == 4)){
    speed+=2
    stage++
  }
  else if ((score == 60) && (stage == 4)){
    speed+=2
    stage++
  }
  else if ((score == 70) && (stage == 4)){
    speed+=2
    stage++
  }
  else if ((score == 80) && (stage == 4)){
    speed+=2
    stage++
  }
  else if ((score == 100) && (stage == 4)){
    speed+=3
    stage++
  }
}
//the end bit of text that tells you your score even though you can see it in //game
function endtext(){
  textSize(width/20)
  text('click to play again', 196, 300)
  text(`your score was ${score}`, 200, 350)
  textSize(width/10)
  
}