//king of the key final code my most ambitious p5 project so far made basically all by me except the music

//if you don't like the music, you're weird kevin is a royalty free god

//most of the level data some levels are probably in the mainloop idk if I moved them later

// note from a year after making this:
//how did I make a whole platformer without knowing what classes were, like its a decent game but the code is just horrific

const levels = {
  level2: {
  blocks: [[50, 600], [0, 600], [100, 600], [250, 450], [300, 450], [500, 580], [350, 450], [550, 580], [650, 580], [700, 580], [750, 580], [850, 580], [900, 580], [950, 580], [1050, 550], [1100, 550], [1150, 550], [1200, 550], [450, 300], [500, 300], [600, 250], [650, 250], [600, 300], [650, 300], [800, 300], [800, 250], [850, 250], [900, 250], [1000, 250], [1050, 250], [1100, 250], [1150, 120], [1150, 120], [1200,120], [100, 350], [50, 350], [50, 200], [100, 50], [150, 50], [200, 50], [400, 450]],
  spikes: [[600, 580], [800, 580], [1000, 565], [550, 300], [700, 300], [750, 300], [950, 250], [1200, 250], [1150, 250]],
  startpos: [50, 500],
  blockstartpos: [-100, 100],
  blockMovLimits: [-100, -50],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[1150, 400], [1200, 70]],
  goalpos: [200, 0],
  texts: [["level 3: split paths", 5, 15, "black", 15]],
  zaps:[]
  },
  level3: {
  blocks: [[600, 600], [550, 600], [650, 600], [350, 600], [500, 600], [700, 600], [890, 550], [940, 550], [1090, 550], [1140, 550], [1140, 400], [1100, 250],[1150, 250], [1200, 250], [1000, 250], [950, 250], [900, 250], [750, 200], [800, 200], [750, 50], [800, 50], [700, 50], [650, 50], [100, 600], [300, 600], [50, 450], [50, 600], [150, 300], [300, 300], [0, 170], [50, 170], [350, 300], [450, 200]],
  spikes: [[450, 600], [400, 600], [990, 600], [1040, 600], [1050, 250], [850, 250], [600, 200], [600, 50], [200, 300], [200, 30], [400, 300]],
  startpos: [600, 400],
  blockstartpos: [-100, 100],
  blockMovLimits: [-100, -50],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[700, 0], [25, 10], [450, 10]],
  goalpos: [670, 320],
  texts: [["level 4: which way?", 5, 15, "black", 15]],
  zaps: []
  },
  level4: {
  blocks: [[100, 550], [50, 550], [0, 550], [150, 550, true], [200, 550, true], [250, 550, true], [300, 550, true], [400, 550, true], [450, 550, true], [500, 550], [550, 550], [0, 400, true], [100, 300], [700, 550], [250, 300], [300, 300], [450, 200], [550, 200], [550, 50], [600, 50], [650, 50], [750, 550], [850, 550], [900, 550], [950, 550], [1100, 500], [1150, 500], [1200, 500], [1100, 550], [1150, 550], [1200, 550], [1100, 350], [1150, 350], [1200, 350], [950, 250]],
  spikes: [[350, 550], [600, 550], [650, 550], [500, 200], [800, 550], [1000, 550], [1050, 550]],
  startpos: [100, 400],
  blockstartpos: [-100, 100],
  blockMovLimits: [-100, -50],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[0, 150], [700, 50], [1150, 100]],
  goalpos: [700, 250],
  texts: [["invisible blocks appear for a split second and then disappear", 50, 400, "black"], ["level 5: something new?", 5, 15, "black", 15]],
  zaps: []
  },
  level5: {
  blocks: [[0, 120], [50, 120], [100, 120], [150, 120], [200, 120], [250, 120], [1100, 550], [1150, 550], [1050, 550], [1000, 550], [850, 550], [800, 550], [1200, 550], [750, 550], [1200, 400, "e"], [700, 550], [1100, 300], [920, 250], [870, 250], [1030, 100], [300, 120], [350, 120], [1080, 100], [1130, 100], [650, 550], [600, 550], [550, 550], [400, 550], [350, 550], [300, 550], [1150, 400, "e"], [200, 590, "e"], [200, 400], [150, 590, "e"], [100, 590, 'e'], [50, 590, 'e'], [0, 590], [150, 400], [100, 400], [50, 400, true], [0, 400, false], [820, 250]],
  spikes: [[400, 120], [450, 120], [950, 550], [900, 550], [100, 260], [500, 550], [450, 550], [770, 250], [720, 250], [670, 250]],
  startpos: [100, 0],
  blockstartpos: [-100, 100],
  blockMovLimits: [-100, -50],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[0, 0], [1200, 40], [0, 540]],
  goalpos: [1200, 500],
  texts: [["these blocks are the teleporters", 380, 20, "black"], ["if you touch them they will zap you to the other teleporter", 380, 80, "black"], ["don't touch this one!", 650, 470, 'black'], ["^^^^^^^", 1160, 470, 'black'], [">:)", 140, 500, "black"], ["level 6: travel at the speed of light", 5, 15, "black", 15]],
  zaps: [[250, 0, 1100, 350], [700, 500, 100, 170]]
  }, 
  level8 : {
  blocks: [[0, 200], [50, 200], [100, 200], [150, 200], [200, 200], [250, 200], [300, 200], [400, 200], [450, 200], [500, 200], [550, 200], [700, 200], [750, 200], [1000, 200], [1150, 200], [1200, 200], [0, 400, false], [50, 400, true], [100, 400, true], [150, 400, false], [200, 400, false], [250, 400, true], [400, 400, true], [450, 400, true], [0, 500, true], [50, 500, false], [200, 500, false], [250, 500, []], [300, 500, false], [350, 500, false], [1200, 400], [1150, 400], [600, 600], [550, 600], [650, 600], [700, 600], [850, 600], [900, 600], [950, 450], [0, 620, true], [50, 620, true], [100, 620, true], [150, 620, true], [200, 620, true], [250, 620, true], [300, 620, true], [350, 620, true], [400, 620, true], [1200, 620]],
  spikes: [[350, 100], [350, 200], [650, 200], [600, 200], [800, 250], [850, 250], [900, 250], [950, 250], [1050, 200], [1100, 200], [400, 500], [450, 500], [1100, 400], [1100, 300], [1100, 500], [1100, 600], [800, 600], [750, 600]],
  startpos: [0,60],
  blockstartpos: [600, 585],
  blockMovLimits: [550, 900],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[1200, 150], [450, 580], [950, 400]],
  goalpos: [1150, 350],
  texts: [["lmao", 50, 150, "black"], ["level 8: zip zap zop", 650, 15, "black", 15]],
  zaps: [[50, 0, 450, 50], [200, 0, 600, 450], [500, 350, 1200, 500], [500, 500, 1200, 500], [500, 400, 1200, 500], [500, 450, 1200, 500], [500, 300, 1200, 500], [500, 250, 1200, 500], [500, 550, 1200, 500], [500, 600, 1200, 500], [0, 0, 0, 250], [150, 0, 1200, 500], [300, 0, 1200, 250]],
  },
  level9: {
  blocks: [[1200, 550],  [1150, 550], [1100, 550], [1050, 550], [850, 550], [800, 550], [750, 550], [700, 550], [600, 550], [550, 550], [500, 620, []], [450, 620, []], [400, 620, []], [500, 400], [450, 350], [400, 350], [350, 350], [150, 350], [100, 350], [50, 350], [0, 350], [200, 350], [250, 620, true], [200, 620, true], [150, 620, true], [100, 620, true], [0, 150, true], [50, 150, true], [100, 150, true], [150, 150, true], [200, 150], [250, 150], [300, 150], [350, 150], [400, 150], [450, 150]],
  spikes: [[900, 550], [1000, 550], [950, 550], [700, 550], [650, 550], [300, 350], [250, 350], [350, 620], [300, 620], [100, 350], [500, 100], [550, 50]],
  startpos: [1200, 400],
  blockstartpos: [600, 585],
  blockMovLimits: [550, 900],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[950, 400], [0, 300], [50, 450]],
  goalpos: [400, 0],
  texts: [["level 9: triple trouble", 650, 15, "black", 15]],
  zaps: [[0, 0,0, 0], [0, 0, 2000, 1000], [650, 250, 0, 0]]
  },
  level11: {
  blocks: [[50, 620], [0, 620], [100, 620], [250, 620], [300, 620], [350, 620], [550, 570], [600, 570], [650, 570], [970, 570], [1200, 500], [960, 380], [840, 380], [740, 230], [440, 200], [390, 200], [340, 200], [40, 200]],
  spikes: [[150, 620], [200, 620], [450, 620], [400, 620], [600, 620], [650, 620], [700, 620], [750, 620], [800, 620], [850, 620], [900, 620], [950, 620], [900, 320]],
  startpos: [0,500],
  blockstartpos: [-50, 150],
  blockMovLimits: [10, 525],
  block2startpos: [1200, 150],
  blockMov2Limits: [625,1190],
  collectables: [[1200, 100], [960, 50], [0, 0]],
  goalpos: [40, 350],
  texts: [["level 11: timings (ayo)", 100, 15, "black", 15]],
  zaps: [[1200, 220, 1200, 0], [740, 10, 960, 10]]
  },
  finallevel: {
  blocks: [[50, 400],[100, 400], [150, 400], [200, 400], [250, 400], [300, 400], [350, 400], [400, 400], [650, 400], [700, 400], [750, 400], [800, 400], [850, 400], [900, 400], [950, 400]],
  spikes: [],
  startpos: [100, 300], // 625, 500
  blockstartpos: [-10000000, 500],
  blockMovLimits: [-30, -41],
  block2startpos: [-100000, 500],
  blockMov2Limits: [-30, -40],
  collectables: [[150, 350], [200, 350], [250, 350], [300, 350], [350, 350], [400, 350], [450, 250], [500, 200], [550, 250], [600, 300], [650, 350], [700, 350], [750, 350], [400, 300], [800, 350], [850, 350]],
  goalpos: [1200, 580],
  texts: [["you are the king of the key", 100, 550,"black", 60], ["level 15: you've done well", 20, 20, "black", 15]],
  zaps: []
  }
}
//variables
let startx;
let starty;
let player_x;
let player_y;
var jumping = false;
var bottom = 449;
let coords = [];
let nonTouchedBlocks = 0;
let standing;
var blockX = null;
var blockMovx;
var blockMovy;
let blockVel = 1;
let blockVel2 = -1;
let blockMovx2;
let blockMovy2;
let onMovingBlock = false;
let timer = 1;
let blockMov;
let collectableAmount;
let canFinish;
var collectables;
let coord_x;
let coord_y;
let colX;
let coly;
let toRemove;
let unlock;
let stage = 0;
let level;
let inLevel = true;
let lives = 5;
let deathScreen;
let lifetimer = 1;
let goalimg;
let tp2img;
let tp1img;
let keyimg;
let lockedgoal;
let sprite;
let difficulty;
let resetLives;
let showInfo = false;
let lvlCompletesnd;
let tpzap;
let jumpsfx;
let keySound;
let deathsfx;
let selectsfx;

// 1: normal, 2: Hard, 3: insane, 4: sanic

//loading files
function preload() {
  keyimg = loadImage("sprites/key 3.jpg")
  tp1img = loadImage('sprites/teleporter sprite 1.jpg')
  tp2img = loadImage("sprites/teleporter sprite 2.jpg")
 goalimg = loadImage("sprites/goal.jpg")
  lockedgoal = loadImage("sprites/goallocked.png")
  sprite = loadImage("sprites/player.png")
  logoimg = loadImage("logo.jpg")
  
  lvlCompletesnd = loadSound("sounds/lc.mp3");
  tpzap = loadSound("sounds/tp zap.mp3");
  keySound = loadSound("sounds/coinsound.wav");
  jumpsfx = loadSound("sounds/jumpsfx.wav");
  deathsfx = loadSound("sounds/deathsfx.wav");
  selectsfx = loadSound("sounds/select.mp3");
}

//setup stuff
function setup() {
  createCanvas(1250, 650);
  colorMode(RGB, 255)
  textSize(25)
  frameRate(60)
  if ((getItem("stage") != null) && getItem("difficulty") != null && false){
    cl(getItem("stage"))
    cl(getItem("difficulty"))
    stage = getItem("stage")
    difficulty = getItem("difficulty")
    if (difficulty == 3){
      lives = 1;
      resetLives = 1;
    }
    else{
      lives = 5;
      resetLives = 5;
    }
    if (difficulty == 4){
      frameRate(120)
    }
  }
}


//main update function
function draw() {
  // first few levels
  const startingscreen = {
  blocks: [],
  spikes: [],
  startpos: [0, 200],
  blockstartpos: [-100, 100],
  blockMovLimits: [300, 720],
  block2startpos: [1000, 300],
  blockMov2Limits: [300, 1000],
  collectables: [],
  goalpos: [100, 200],
  texts: [],
  zaps: []
  }

  const introlevel1 = {
  blocks: [[0, 550], [50, 550], [100, 550], [150, 550], [200, 550], [250, 550], [300, 550], [350, 550], [400, 550], [450, 550], [400, 400], [500, 550], [550, 550], [600, 550], [650, 550], [700, 550], [750, 550], [800, 550], [850, 550], [900, 550], [950, 550], [1000, 550]],
  spikes: [],
  startpos: [50, 300],
  blockstartpos: [-100, 100],
  blockMovLimits: [300, 720],
  block2startpos: [1000, 300],
  blockMov2Limits: [300, 1000],
  collectables: [],
  goalpos: [1000, 500],
  texts: [["Welcome", 70, 300, "black"], ["Use A, D and spacebar to move around", 70, 350, "black"], ["to pass the level get to this goal", 900, 470, "black"], ["level 0: get to the goal", 5, 15, "black", 15]],
  zaps:[]
  }
  
  const introlevel2 = {
  blocks: [[50, 550], [100, 550], [300, 550], [350, 550], [550, 550], [600, 550], [750, 550], [900, 450], [900, 300], [700, 280], [650, 280], [600, 280], [550, 280], [500, 280], [450, 280], [400, 280], [350, 280], [300, 280], [700, 550], [250, 280], [200, 280]],
  spikes: [[650, 550], [150, 280], [100, 230], [50, 170]],
  startpos: [50, 300],
  blockstartpos: [-100, 100],
  blockMovLimits: [-50, -20],
  block2startpos: [0, 1000],
  blockMov2Limits: [200, 205],
  collectables: [[550, 200], [450, 200], [350, 200]],
  goalpos: [250, 150],
  texts: [["watch out for gaps....", 100, 420, "black"], ["and spikes", 640, 420, "black"], ["you need to collect all the keys to pass the level", 480, 170, "black"], ["level 1: a new beginning", 5, 15, "black", 15]],
  zaps:[]
  }
  //this level was the first level made and I probably won't use it because it kinda sucks but I might take the data and modify it
  const leveltest = {
  blocks: [[50, 400], [200, 400], [400, 300], [0, 400], [500, 450], [550, 450], [600, 450], [650, 450], [950, 450], [1100, 300], [1150, 300], [950, 200], [blockMovx, blockMovy], [250, 100], [blockMovx2, blockMovy2]],
  spikes: [[150, 400], [100, 400], [250, 450], [300, 450], [350, 450], [450, 250], [600, 250], [400, 450]],
  startpos: [0, 200],
  blockstartpos: [-100, 100],
  blockMovLimits: [300, 720],
  block2startpos: [1000, 300],
  blockMov2Limits: [300, 1000],
  collectables: [[50, 350], [500, 400], [100, 100]],
  goalpos: [100, 200],
  texts: [["hello world", 200, 200, "black"], ['if you somehow find this, this is the first beta level that was created to test all the mechanics that has been added at that point', 0, 60, "black", 20], ['it is not a very good level which is why it was never included, it also uses the older size which is why everything stops at y pos 450', 0, 80, "black", 20]],
  zaps:[]
  }
  
  //first proper level
  const level1 = {
  blocks: [[1000, 600], [1050, 600], [950, 600], [900, 600], [750, 600], [700, 600], [530, 470], [700, 340], [750, 340], [900, 340], [220, 580], [170, 580], [470, 260], [270, 260], [420, 260], [850, 600], [320, 260], [220, 260], [580, 470], [120, 580], [70, 580], [20, 580], [650, 340]],
  spikes: [[800, 600], [1100, 600], [1150, 600], [1200, 600], [320, 580], [370, 260], [170, 260], [270, 580]],
  startpos: [1000, 450],
  blockstartpos: [-100, 100],
  blockMovLimits: [300, 720],
  block2startpos: [1000, 300],
  blockMov2Limits: [300, 1000],
  collectables: [[900, 290], [470, 80]],
  goalpos: [170, 480],
  texts: [["level 2: jump and collect", 5, 15, "black", 15]],
  zaps:[]
  }
  const level6 = {
  blocks: [[600, 580], [550, 580], [650, 580], [blockMovx, blockMovy], [1000, 550], [300, 300], [1150, 550], [1200, 550], [250, 300], [70, 250], [650, 120], [700, 120], [1000, 220], [950, 220], [1200, 220]],
  spikes: [[700, 530], [500, 530], [1050, 280], [1100, 280], [1050, 550], [1100, 550], [200, 300], [1150, 280], [120, 300]],
  startpos: [600, 450],
  blockstartpos: [-100, 450],
  blockMovLimits: [50, 900],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[1200, 500], [580, 150], [1200, 170]],
  goalpos: [20, 570],
  texts: [["watch out for moving blocks", 10, 430, "black"], ["level 7: the world moves with you", 5, 15, "black", 15]],
  zaps: [[70, 40, 650, 0]]
  }
  const level7 = {
  blocks: [[0, 200], [50, 200], [200, 200, 'r'], [250, 200, ''], [300, 200, ''], [500, 300, ''], [650, 200, ''], [850, 150, false], [900, 250, {}], [1100, 250, true], [50, 550], [100, 550], [1200, 400, []], [250, 550], [300, 550], [blockMovx, blockMovy], [1120, 580]],
  spikes: [[100, 200], [150, 200], [350, 300], [450, 300], [600, 300], [650, 300], [700, 300], [750, 300], [850, 300], [950, 300], [1000, 300], [1050, 300], [150, 550], [200, 550], [1120, 370], [350, 500]],
  startpos: [0, 0],
  blockstartpos: [600, 585],
  blockMovLimits: [550, 950],
  block2startpos: [-100, 0],
  blockMov2Limits: [-100, -50],
  collectables: [[500, 250], [1200, 290], [1120, 530]],
  goalpos: [400, 599],
  texts: [["level 7: now you see me, now you don't", 5, 15, "black", 15]],
  zaps: [[1200, 200, 50, 300], [300, 300, 800, 350]]
  }
  const level10 = {
  blocks: [[575, 590], [525, 590], [625, 590], [350, 470], [800, 470], [900, 470], [850, 470], [1100, 470], [1150, 470], [1200, 470], [200, 470], [150, 470], [50, 470], [0, 470], [blockMovx, blockMovy], [blockMovx2, blockMovy2]],
  spikes: [[575, 40], [575, 150], [575, 250], [950, 470], [1000, 470], [1050, 470], [300, 470], [250, 470], [100, 470], [575, 350], [100, 200], [0, 200], [300, 200], [400, 200], [200, 200], [450, 200], [700, 200], [750, 200], [850, 200], [950, 200], [1050, 200], [1150, 200], [1100, 200]],
  startpos: [575,450],
  blockstartpos: [-50, 150],
  blockMovLimits: [10, 525],
  block2startpos: [1200, 150],
  blockMov2Limits: [625,1190],
  collectables: [[1200, 410], [0, 410], [525, 0]],
  goalpos: [625, 0],
  texts: [["level 10: almost symetrical", 5, 15, "black", 15], ["|", 525, 130, 'black', 50], ["V", 515, 180, 'black', 50]],
  zaps: [[100, 20, 100, 20], [2000, 1000, 100, 20], [750, 630, 1100, 20], [400, 630, 100, 20]]
  }
  const level12 = {
  blocks: [[50, 550], [100, 550], [0, 550], [250, 550], [300, 550], [450, 550], [500, 550], [1200, 600], [550, 150], [blockMovx2, blockMovy2], [blockMovx, blockMovy], [600, 100], [750, 100], [800, 100], [950, 450, true], [1000, 450, true], [950, 100, true], [1000, 100, false], [1000, 100, true], [1050, 100, "unga bunga"], [1130, 100, "UwU"]],
  spikes: [[150, 550], [200, 550], [350, 550], [400, 550], [900, 400], [1050, 400], [0, 370], [400, 270]],
  startpos: [0,480],
  blockstartpos: [1000, 450],
  blockMovLimits: [700, 1150],
  block2startpos: [160, 300],
  blockMov2Limits: [0,1200],
  collectables: [[1200, 549], [150, 30], [880, 10], [975, 400], [0, 0]],
  goalpos: [700, 600],
  texts: [["!!!", 900, 100, "black", 25], ['level 12: "3 keys"', 210, 20, "black", 15]],
  zaps: [[200, 150, 150, 0], [1200, 0, 0, -50]]
  }
  const level13 = {
  blocks: [[0, 150], [50, 150], [100, 150, true], [250, 150, true], [300, 150, true],[350, 150, true], [510, 150, "if you see this, good for you"], [600, 150, "no"], [650, 150, "english is the only language - jacksfilms"], [850, 150], [1050, 150], [1150, 150], [1200, 150], [715, 410], [810, 410], [900, 410], [1100, 410], [1150, 410], [600, 410], [550, 410, "yes"], [500, 410, "sonic wave infinity verified"], [350, 410], [300, 410], [1200, 410, "Imagine looking through the code"], [blockMovx, blockMovy]],
  spikes: [[180, 150], [165, 150], [420, 150], [435, 150], [950, 150], [1100, 150], [965, 410], [1000, 410], [1035, 410], [450, 410], [650, 410], [600, 410], [400, 410], [250, 410], [210, 410], [170, 410]],
  startpos: [0, 0],
  blockstartpos: [1000, 620],
  blockMovLimits: [10, 1120],
  block2startpos: [160, 300],
  blockMov2Limits: [0,1200],
  collectables: [[1200, 10], [1200, 350], [300, 500]],
  goalpos: [1200, 600],
  texts: [["!!!", 720, 50, "black", 35], ["level 13: layers and gaps", 3, 15, "black", 15]],
  zaps: []
  }
  const level14 = {
  blocks: [[625, 580], [blockMovx, blockMovy], [1000, 500], [1050, 500], [1220, 450], [1220, 300], [1050, 200], [860, 200], [810, 200], [760, 200], [550, 200], [500, 200], [450, 200], [300, 200], [250, 200], [200, 200], [150, 200], [20, 460], [70, 460], [120, 460], [170, 460], [320, 610], [370, 610], [270, 610], [220, 610], [170, 610], [120, 610]],
  spikes: [[950, 450], [1100, 450], [1000, 200], [955, 200], [910, 200], [710, 200], [660, 130], [660, 80], [600, 200], [400, 200], [350, 200], [100, 230], [50, 230], [200, 150], [0, 230],[450, 580], [450, 490], [450, 410], [450, 330], [100, 345], [220, 460], [270, 460]],
  startpos: [625, 500], // 625, 500
  blockstartpos: [1000, 500],
  blockMovLimits: [830, 1150],
  block2startpos: [160, -90],
  blockMov2Limits: [0,1200],
  collectables: [[1025, 448], [760, 140], [220, 550]],
  goalpos: [550, 580],
  texts: [["level 14: f̵̨̧̧̛̛̛̛̛̛̛̯̯̬̹̦͇̹̬̫̣̠̘̣͍͔͈͇̺̺͉̞̜̯̩̤͕͔͒̉̈́̅̂̆̊͂͗͐͌̋̂̿̃̒͂̓̈́͆̀̂́͋̇̎͑̀̅͒̋͗̾͒̀̂́͐͊̀̌̍̍͆͐̀̇͑͒͒̂͆̿͊̈́͗̎͊̿̾̈́͂͑̔̍͊̉͑̈̓̓̋̓̌̽̾̆̈͆͊͒̅̀̏̔̋͂̇̂̓͋͐̐̇̏̅̃̈́̆͊̾̉̀̒̉̇̀͗̂̐̿̏̐̈́̒̀̃̎̏͂͆̈́̐̿̅͑̾̅͆̒̽͑̃͊̿̒̀͆̅͋̿̇͊͐̎͆̀̾͑̾̊̋̒̏̾̏̔̀̊̊̑̓̓̏̌̾̈́͗͐̈̚̚̚̚̕̕͘͘̕̚͘̚̕̕̚̚̕͘̕̕̕̚͝͠͝͝͝͝͝͝͝͝ś̸̢̧̡̡̡̢̛̛̛̙̰̣̹͇̻͔͔̲̺͕̫̞̹̣͎̦̬̳̪̠̹̞̦̟̬̺͉̲͙̤̲̲̭͕̼̱͎͖̜̟̳̑͛͌̒́̅͂̓̀̾̓̎̑̈́́̃͌͊̎͗͗̅̉͂̅̈́̄̂̉͊̿̏͒̂͂͋͗͋͊̐̀͐̀̈́̐̎͑̍̀̅̈́̉̽͊̽̃̐́̾̇̊͛͆̇͑̒̐͆̋͒͒̓̿̒̽̅͋͆̐͌̊͋͂̓̉̓̑͗̈́̍̀͂̌͛̂̃̐̽͂̌̆̈́̈́͛̑͂̊̃͒̓͑͋͘̚̚̕̕͘͘͘̚̚̚͜͝͝͝͝͝͝ͅͅḑ̷̢̡̡̧̡̢̡̧̡̢̨̡̡̡̡̨̡̢̡̢̡̡̢̡̡̧̨̨̢̨̛̛̛̛̛̛̘̪͓̰̮̹̻̮͙̭̬̺̜̜̖͚̲̰̲̮̞̠̻͖͈͔̩͈̘̮̙͙̗͈̰̻̝̯̟͚̬̥̝̙̮̳̜̭̲̠̫̱̗͖̙͖̩͈̬̭̩͔̱͎͇̟̗̜̰̰͔̤͚͕̬̱͖̳̲̳̪̰̩͇̣̼̻̦̱͖͓̘̲͉̙̙͈͚̠̬̬͖̫̻͈̹̙̯͔̮͈̦̳̲̫̠͍̺̪̰̹̼̼̭̪͖̬͈̺̠̖̜͕̖͔̣̙̪͚̻̬͖̞͈̮̦̦̣̘̰̭̟̖̤͉̙̟͔̲̪̩̙̙͙̟̙̠̳̠͉̖͔̼̯̘̭̩͖̖̳̤̠͎̩̟̺̙̳̪̼̤͙̫͖̝̪͕̥͚̗͙̠̳̝̝̫̲̹̭̪̀͌̊̄̔̈́́̇̓̀̈́̓̌̐̔̎͒͐̀̔̇̾̑̈͋̎̊̊̽͐̈͊͂͆̊͂̎̍͋̆͆̋͊͋͐͌̄͌̉̊̑̔͑̐̿̃̈́̊̈́͑̄̄͆̀͛̒͛̌̉͑͂̎́̿́̐͂̓̃̓̔͊͂̈́̄̄̃̾̂͆̃̉̆͋̈́̅̽̐͛̆̈́̽̀̈́̏̆̏͆̎̈́̍̿͛̈́͐̎̌͐̄̑͗̓͌̃͐̇̂̓̽̓̓̂͂͒̉͂̌̊̎͗́̒͆͊͗̂̀̂̊͌̓̊͋͛͗̓̂̏̒̑̾̓̾̿͗̈́̉̊̋̒͊̀̿̔̔̿̓̓̍͌͆͑̏̄͊̀̀̃̑̌̊̉̅͌̐́͌͋̎̎̀̉̍́̃͆̎̍̄̋͆̾̈́͑̃̌͌͋͋́͑̽̂̾͌̈́̎̾͆͐̎͋̀̑̀̍̃̈́̆͌̍̔͑̽͛̕̚͘̕̚̚͘͘͘̕̚͘̕̕͘̚͘͘͘̚̚̕̕͜͜͜͜͜͜͜͜͝͠͠͝͠͝͝͠͠͝͝͝͠͠͝͠͝ͅͅͅͅͅͅͅͅͅé̶̢̧̡̧̨̧̢̢̧̧̧̧̧̧̧̨̡̨̢̢̨̨̢̡̡̢̨̛͚̹͎̭̙̬̝̪͔͙̟̥̫̞̩̣̮̟̣͍͇̝̫̫̻̱̜̞̙̪̬͙̗̝͚͇̮̣̼͚̰̝͈͚̜̯̟̜̙̝̱͔̱͉̩͙̩̙̯͈̯̣̮̘͓̤̱̣̮̳͚̞̫̫͈̼͚̹͎̮̯̝̠̫̝̫̞̯̞̻͉͇̝̻̮̻̫̠̜̙͕̻̩̜̻̺͇̞͈͚̲̮̲͓͇̖̮͎̩̙̲̤̬͇̬͓̭̯̙̙̤͕̰̖̠͇͇̞̯̦͙̻̟̭̫̱͕̣͔͎̮̜̖͓̩̭͙̮̭̠̺̩̭̞̱̱̟̦̝͎̥̗̺̦̩̰̗̺̙̝̟̤̘̼͈̩̞̺̝͙͎̲̣̜͙̭̤̭͓̣͍̗̦̦̺̬͕̜̠̮̤̼͙̗͕͈̥̥͓̩̥̯̰̭͕̻̯̭̦̰̞̳̼̙̱͇̺̤͚͔̥̣̻̲̜̝̩͖͇͎̜͕̯̗̩̱̣̊̾̃̑̏̎̒́̓̓̀̈́̊̂̓́̌̌̓̂̃͊̔̐̈́̋͑̀͛̄̐́͛͊̅̎͌͂̓͐̂͐̆̆̅̓̽̀̄̈́̏̉̀͑̽̈́̾̍̽̀̅̅̓̈͛̈́͘͜͜͜͜͠͝͝͠͠͝ͅͅͅͅg̸̡̡̡̧̡̧̡̢̧̡̛̛̛̛̛̗̫͉͉̯̗̘̥̝̥̜̺̰̯̟̘̠̗̬̺̰̯̮͚̹͙͇̥͖͕̭͖̳͎͓̯͚͍̜̫̰̝̥̲̯͍̩̦̻̹͈̖͕̝͇͈͔̣̘̦̳͉̞̳͙̖͔͇̝̙̳̼̊̏̇̓̎͛̆̿̈̌̈́͊̀̊̎̍̌̒̈́̐̈́͛̅̂̎̄̇̾́̑̈́̐͊̀̇͑̊̾̊́̽͗̈́͛̂̉̀̊̌́͑̆̇̇̓̑͆͒͊̐̾͋̽̀̈́̎̊̐̀͗͊͋̒͒͒̈́͋̎͊͋̿͒͛̆̌͆̔̓͗̊̿̀͊͊̐̀̑͗̈́͛̓͗́͑̋̔̊̓̀͐́̆̈́͋̄̾̔͛́̌͆͆̃͑́̊̇̈͋́̓̅̊͗̃̒͌͐̑̾̉̈́̀̿͊̆̏̾̕͘̚̕̕̕͘͘̚̚̚̚͘̚͘̕̚͝͠͝͝͠͝͝͝͝͝͠ͅͅͅr̸̡̡̧̛̛̛͕̱̗͙̣͕̱̘̻̯̬͎͖͓͔̭̫̫̪̪̮͖̘̝̹͙̭̝̜̈́̉͑̆̃̈́͗͌͒̃̑̎̓̐̐̈́̑̿̈́̽́̽̿͐̒̀͛̌̓́̿͆̿͋̾̑͂͗͊̂̈͛̈̑̓́̀̔̋͐̈́̈́̑́͋̀͑̐͌̂͛̐̏̀̉͐̀͛̈́̆̀̚͘͘͘͝͝͠ͅg̸̡̡̨̢̨̢̨̡̨̡̧̢̨̢̢̡̢̨̨̛̛̮͖͕̰̩̦̦̟̲͔̰̰̯̘̪̠̘̦̯͖͖͓̮͎̭̤̦̠̮̹̠͎̤̝͉̜͖̤̗̦̞̰̪̞͇̩͈͓̫̠̫̙͍̞̲̝̤̲̖͍̣̙̻̟̮̫̜̱̥̟͈͔̪̣͕̜̣̰̪͇̪̞͖̳̯̗͈̣̭͚̳̮͚̠͉̻̬͓̳͙̺̠̻̮̭̬̺̝̙̲̥̼̺̰̰̪̗͎̬͕̪͎̼̰̱̜͈̟̺̟̮̬̪̟͎͈̘̳̟̩͈͉̞͉̲͚̫͎̹͍̱̭͉͉̤̯̘̫͓̱̪̭͇̮̟͕̲̯̭̣͈̫̠̭̥͔̣̮̟̮̣̺̯̳̬̩̰͎͇̩̞̦̗̱̟̦̫̲̱̯̻̳͇̃͑̋͋͒͆̈́͛̎̍͆͗̋̐̌̆̈͐̉̇̊̽͊̿̉̒̑̃͋̈́̓͐̈́̅͐͗̃͊̆́̊̈̈́̑̀̈́̉͑͆͗̈́̿̎͒͐͊̈͊̉̍͗͆̍̄̊̒̇̔͆̽̐͂̾̔̐̆͗̅̐̿̑̽̅͐̆̿͛̈̐͒̅́͌͂͑̐̊̇̾́̓̏͌͌̄̄͑̽͂̍͘̚̚̚͘͘͜͜͜͜͝͝͝͝͠͝͠͝͝ͅͅͅd̸̡̢̢̡̡̨̡̧̨̛̛̙͎̭̳̝̦̺̻̣͕̮̖͚̘͉̻̜̲̱̝͈̰͙͖̗̬̜̖̟͖̥̱̺̗̠̥̩̦͈̙̫̦̩̲̗̠͓͎͖̞̙̩͇̣̰̣̠͚̟̲̱̳̤̬̖͚̯̰̣͚̭͔̜͇͈̺͔̤̠̼͖̯̣̘̦̖̝̘̝̲̻̤̰̝͉̖̣̯̼͎̼̻̬͖̫͎̩̼̥͕̣̠̱̙̺̫͚̜̜̝̭͎̠̦̼̱͖͖̞̞̗̞͍͚̩̯̲͚̘̮͚̜̤̙̥͓̼̬̗͈̮̲̯̮̯͇͈͈̫̻͕͍͉͚̤̪̟̰̰͎̼͉̤̟͕̱͔̫̾̑̔̊͋́̒͗̾̒̓̌̿͌̂͋̓̂̅̓̍̓́̀̍̆̔̈́̆͑́̎͐͛̂̈́͐̄͐͋͗͒̉̀̈́̃͋͌̈́̈́̈́̈́̋̔̾̇̍̓͌̉̓͌̊̏̈̔̓̔̇̈́̽͐̏̊̌̄͐̒̎͛̓͂͌͑̈̏̾̎̒̏̿͊̌̂̄́̌́̂͗͌̕͘̚̕̚̕͘͘͘͜͜͜͜͜͝͝͝͝͝͝͠͝͝͝ͅͅͅͅͅͅͅͅs̶̨̢̧̡̢̛̥̱͍̻̤͔̮̰̣͙̗̮͔͕̬̭̞̰̫͍͎͔͚̮̖͗́̈́̀̽͋̎͋̓̎̿͊͂̑̈́́̅̌̅̈́́̍́͋̓̍̿̇̔̆̇̌̃͆̍͂̔͂͋̊́̽͒̏̒̀̓̊́̋͗͑̉̑̇̒͂̑̓̌́̋̊̉̒͊̐̈́̄̈́̈̿̿̃̏̔̈́̅̐͌͂̌̈́̌̉̎̏̄̽̍͛̾̀̇̌̕͘͘̚̕͘̚͝͠͝͠͝͠͠x̷̡̧̧̡̨̨̛̛̛̛͚̮͈͉̳̭̘͍̭͎̱̺̦̟̻̜̭͉̖͕̗̳̼̼͎̪̜̣̪̳͕͔͕̣͈̣̥̼͚͓͚͚̪͓̘̙̦̪̙͔̻̠̜̹̼͎̙̰̤̖͕̱̳̼̞͖͖̝͖̯̜̞̯̖͇̦͔̤̖͚̮͙̮̮̌͛͌̈́̈́̈͑̉͐̋̓͌͆̾̐̿̈́̈́͑̔͊́̉̉̎͐́́̈̋̀̽̊̑̍̊̅́͛̽̋̐͆́̃̑̒̎̉̑͛̌́̎͋̀͗͂͒͐̇̋͒͗̏͆͋̀̽͑́͂̾͗̒̎͐̇̓́̀̏̍͑̐̾͛̈́̔̊̎͋̈̈́̎̄͂͒̃̾̔́͗̑̌̾̐͊̎̉̽̀̿̇̓̏̈́̑̏̉̑͑͛̎̂̾͑́̑̽̈́͋̑͆̌̒́̆͊͐̄̈́̐̈́̏̀̓͂̿͊́͆̒̀̀̔̏̒͘̕̕̕̕͘͘̚͘̕̕̚̕̕̕̕̚͜͠͝͠͝͝͠͠͝͝͝͝͝͝͠ͅͅͅà̷̡̢̡̡̢̨̧̨̧̢̨̧̨̛̛̛̛̛̗͎̖͖̜̰̙̲̘͚̫̲͍̤̼͚̠͍̳̰͕̯̪͙̼̟͇̻̠̙̻̳̲̙̗̙̥͎̭͙͉̱͎̬͈̬̪̦͉̰̦̦̰̳̜̟̺͚̹̻̠͔̫͔͖̲͍͈̺̤̫̱̮̰͕͓͔͖̭̜̺̬̱̹̲̜͍͎̙̬̞̯͖̭̖̥͚̼̖̦͖͎͖̭̼̲̯̖̘̥̳̳̪̳̞̫͔͉͎̭͚̟̜̙̮̒͂̍̒̆́̀͂̅̓͗̃͋̈́̃̐̒̆̀̓̈́̾̌̽̀̔̅̓̑͛̈͌̃̈́̀̄̋̈̓̆͌̓́́̔͑̏̎̏͊͂̔͆́͑̽͗̈́̍̽͗̆́̀̿̀͊͂͋̃̈́̓̌̿͑̆̏̊͌̑͗̌̃͑͛̅͒̉̌̾̈́͑̾̿̓̿̽̈́̊̒̀̒͒̍͆̌̇̽̓͊̎͆̋̅̇͊͊̅̾̈́̓̊̈́͌̒̏̑̐̊́͂̓̎͑́̾̈́̅͛͊̕̕̚̚͘̕͘͘͜͜͜͜͝͠͠͝͠͝͝͝͝͠͠ͅͅḑ̸̢̢̧̧̧̨̨̨̨̛̛̛͕͓̤̗̺̜̰̩̪͎̝͍̦̬̹̲̺̳̟̥̩̜̹̫̤͖̥̗̻̲͈͇͔̜̲̘͕̰̼̭̼̙̩͇̼̯͎͓͖̜̺͉̰̲̯̙̦͇͚̱̖̥͈̥͕̦̮͎̠̺̥̲̙͎̱̝̩̳̮͔͖̟̦̫͔̼̦̼͈̰̗̩̫̯͇͇͕̻̖͉͈̳̭͍̪̮͉̯̳͍̙̻͈͔͖̤̝̗͇̬̫͙̩͓̜̮̘̌̀̐̍̍͗̉̆̓̀̑͛͑̒̆̓̌̑̈͋̑̌̽̿̑̈́͒͛̉̎̃̌̽͗̉̋̓̉͆̎̈́̃͋͛̐̑͂̾̒̔͒͑̂͒̌͒̂̈́̒͋͗̈́͋̓̋́͌̅̆͑̽̓͊̿̌̀͌̓̒̈̽͊̌̃̇̎̒̈́̐̈̀̃͆̀̽̉͒͐̏̆̋̆̾̈́̈́́͋̂̀̆̐͊̈́̿͛̑͆̈́̿̾̈̌͒͆̋̓̈́͛̉̎̆̅͗̆̽̂̌̔̀͑̒̽̔͌̔̀̓͂͌̓̌̓͒͊̑̉́͛̉͂͊̍̆̈́͋̉́̀͊́͊̍̏̎͐̌͐̓̓̚͘̚̚̚̕͘͜͜͜͜͜͜͜͝͝͝͝͠͠͝͝͝͝͝͝͠͝͝f̵̨̧̢̢̡̡̢̡̢̨̨̢̢̧̧̡̨̡̨̧̨̡̢̡̡̧̧̢̨̛̛͙͚̖͎͈͉͇͖͙̙͍̞͍̬͓̯͙͇͖̰̹̤͖͖̤̘̲͙̳̲̰̬̰̯̯̻̖͕̺̟͓̦͓̗̦̫̗̩̠̻̰̪̮̪͉̬̼͓̰̤͙̝̼̙̹̜̘̟̺͙̮͉̞͇͙͍͔͇̲̘̗̝̩̘̭̺͈͚̺͎͇͎̳̼͎͔̤̖̗̯̺̱͕͇̱̹̘̖͇̺̞̹̭̬͉͎͉̭͚̬͎͕̣̺̳͕̠͖͔͉̤̥̭̙̳͉̯̱̱̲͙̝̙̘̣͈̼̣͇̲͇̭̪͇̱͚̟̰̺̻̱̠͔͇̞̝̭̺͔̹̬͕͈͖͉̫̹͎̝̗̯̖̳̟͉̮͔̘̦̪̱͔̻̱̮̯̮̞͍̱̩͉̥̗̺̩̳̙̹͎͔̼̞̳͉̠̣͙͕̻̤̘̰̲̮̟̪̝̜͔̮͙̲͚̬͕̹̭̹̟̫̭̣̯͇͖̺̂̄̋̿͊̀̓̋̉͑͛̅̇̐̀͊̌̿͒̾̇͋͊̍͂́̆̐͐̈́͛̄͂́̊̑̊͗͒̏̀͗̀̈́̓̃̔̍̌̇̅̍̍̋̀̃̈͂̌̽͛̉̈͒̊͂̀͗̔̿̽̋̃͋̿͛̎͂̈́̔͋̿̀̎̆̀̅̎͛̀͗͊̈́͐̐́̔̀̉̇̉̽͑̈́͊͛̏͐̓̇͛̓̊̆̾̇͂̀̍͑̾̒͑̄̇̎̽̽̊͑̀̈́͐̉̕̕̕͘̕̕̕̕̕͘͜͜͜͜͜͜͜͜͜͜͠͝͠͝͝͝͠͝͠͝͝͝͝ͅͅͅͅͅͅe̸̢̨̢̢̢̡̨̨̧̧̧̧̛̛̛̛̙̩̤̩͍̬̝͕̻͙̺̝̹̺̠͉͖͈̜̠̬̗̰͍̭̝̺͍̥͉͎̪̗̻͖͈̯̠̜͓̻̖̩̞̻͓̪̪͕̹̹͔̺̫͎̰̜͇̰̦̥̭̩̩͚̠̳͔̤̖̭͊̀̈́̒̌͒̄̒̑͗͛̓̀̍́̂̈́͋̾͗͋́̽͌̅̿̅̂̓́̈́͗̄́̅̆̆̋͂̈́̅͊̎́̊̊̿̽̃̆͂͛͑̈̔̏͊̃̀͊̐̍̏́̑̈́̽̿̽̚̚̕̕̚͜͜͜͜͝͝͠͠ͅͅŗ̶̢̡̧̢̢̧̧̨̡̡̡̡̨̢̧̧̡̛̛̩̙̤͉̗̗͖̘̣̗̲͉͚̖͎̙̱͉̗͕̫͇̯͓̟̩̥̣̜̯̙̹̙̺͙͖̘̮͚̖̣̯̺̣̦̟̘̤̥̘͙̯̥̘̯̘̳̠̱͍͖͉͖͙̖̩̱̣̼̱̥̗̞̙̗͎̗̠͍̲̫̤̙̯̭̦̩̝͓̻̼̹͕̟͇͖̲͖̪̟̩̙̤̭̥͉̹̤͈̟̰̗̲͖̘͉̼̟̘̱͉̰̟̮͙̝͓̤͕͔̞̮̘̘͙̟̙͍̜̭̞̬̰̠̣̹̼̤̣͈͇͎̖̝̜͖̺̯̜̥͍̬̮̪̦͓̳̗̙̻̠̘̹͑͐̇̾̄̔̐̒̔̏̈́̉̾̾͂̉̊̽̋͆́̇̆̂̈́̍̏̍̽̀͐͌̋̓̈́͌̽̀̇̄̒̋̎͒̑͒̏̔̆̈́̈́̾̾̈́͐͑͐͗̐̍̈́̒̋͊͆̀͆͋̎͋́̀͐̃̌̃͗̓̑͂̈́̊̆̏͐͛̾̒̅̏̋̓̈́̓͊̉̉̈́͂̑̌͒̈͛͋̓̾̀̉̀̓͌͘͘̚̕͜͜͜͠͠͝͝͝͠͠͝͝͝ͅͅͅͅͅͅͅͅŗ̷̨̡̨̡̨̡̢̢̡̡̡̢̢̢̢̨̨̧̛̛̛̛̛̖̠͍̬̤͚̹̲̰̪̯̯͚̰̼̙̹̦̱̹͉͍̥̞̳͍̰͍̩͙͕͈̜̲̦̣̫͓̰͇͚̝̰͇͈͎̯͓͓͇̫͍̥̞̼̺̰͍̫̣͈̳͕̙̭̦͔̗̭̙̗͇̠̟͕̯̭̣̖̮̥͉̝̝̳̺̥̜̖̖͔̘̭̬̮̞̖̥̦̤̫͔̯̱̬̠͓̼͍͚̼̥̲̼̦͇̖̞̬̦̣̼͍̰̖̼̤̠͙̜̦̗͚͍̳͓͈̜̠̤̻̯͕̼̳͉͈̦̙̟̰̗͇̝̥̫̠̥̬̞̜̩̖̮͓͈̪̞̰̱̰͉̰̬͍̣͉̝̦̮̬̝̰͎͓̞̲̯̻͇̱̮̹̥͙̤̭̰̤̙̖͕͍̰̮̦̗̮͍̰̣̙̜͇͚̹͓̣͔͕̹̞̯̬͈̗̝̣̣͛̌̏̀̇̅͋͊̐̀̃̏͑̈́͋̈́̋̇̑̿̎͂͌̈́̃̆̏͑̿͋͌͛̅͒̅͌̑̀͛̓̔̇̈́̌̃̉̽͒̋͛̀̔́̓̔̈̃͑̄̀́̉̈́̄́̋̊̀͐̉͆̔̆͂̿̈́̇̒̎̈́͐͊̍̃̀͒̈̂̀̽̒̎̂́̽̀̀̿͂͊̃́͋̔̆̚̕̚̕̚̚̚͘͜͜͜͜͝͠͠͝͝͝ͅͅͅͅͅ", 1060, 20, `rgb(${randInt(255)},${randInt(255)},${randInt(255)})`, 15]],
  zaps: [[760, 10, 530, 10], [20, 20, 20, 300], [70, 610, 760, -50]]
  }
  switch (stage){
    case 0:
      level = startingscreen;
      inLevel = false;
      break;
    case 1:
      level = introlevel1;
      break;
    case 2:
      level = introlevel2;
      break;
    case 3:
      level = level1;
    break;
    case 4:
      level = levels.level2;
      break;
    case 5:
      level = levels.level3;
      break
    case 6:
      level = levels.level4;
      break
    case 7:
      level = levels.level5;
      break
    case 8:
      level = level6;
      break
      case 9:
      level = level7;
      break
      case 10:
      level = levels.level8
      break
      case 11:
      level = levels.level9
      break
      case 12:
      level = level10
      break
      case 13:
      level = levels.level11
      break
      case 100:
      level = leveltest
      break
      case 14:
      level = level12
      break
      case 15:
      level = level13;
      break
      case 16:
      level = level14
      break
      case 17:
      level = levels.finallevel;
      break
    default:
      level = startingscreen;
      inLevel = false
  }
  
  //on start
  if (timer == 1){
    startx = level.startpos[0];
    starty = level.startpos[1];
    blockMovx = level.blockstartpos[0];
    blockMovy = level.blockstartpos[1];
    blockMovx2 = level.block2startpos[0];
    blockMovy2 = level.block2startpos[1];
    player_x = startx;
    player_y = starty;
    collectableAmount = level.collectables.length;
    collectables = level.collectables;
    lives = resetLives;
  }
  
  //unpacking a lot of the level data
  const coords = level.blocks;
  const spikes = level.spikes;
  const blockLimitOne = level.blockMovLimits[0];
  const blockLimitTwo = level.blockMovLimits[1];
  const blockLimitThree = level.blockMov2Limits[0];
  const blockLimitFour = level.blockMov2Limits[1];
  const finishpos = level.goalpos;
  const texts = level.texts;
  const invisibleBlocks = level.invisible
  const teleporters = level.zaps
  
  //checks if all the keys have been collected yet
  if (collectables.length === 0){
    unlock = true;
  }
  else{
    unlock = false;
  }
  background(28, 131, 14);
  fill(219, 0, 239)
  if (inLevel == true){
  image(sprite, player_x, player_y, 50, 50)
  if (unlock === true){
    image(goalimg, finishpos[0], finishpos[1], 50, 50);
  }
  else{
    image(lockedgoal, finishpos[0], finishpos[1], 50, 50)
  }
  }

  if ((player_y <= bottom) && (jumping == false) && (inLevel === true)){
    player_y += 5
  }
  if (jumping == true){
    player_y -= 5
  }
  if ((jumping == true) && (player_y < bottom - 150)){
    jumping = false
  }
  if ((keyIsDown(65) || keyIsDown(37)) && (inLevel == true) && (player_x > 0)){
    player_x -= 4
  }
  if ((keyIsDown(68) || keyIsDown(39)) && (inLevel == true) && (player_x < 1200)){
    player_x += 4
  }
  stroke(0, 0, 0)
  coords.forEach (coord => {
    coord_x = coord[0]
    coord_y = coord[1]
    if ((coord[2] != undefined)){
      if (lifetimer < 300){
      fill(19, 227, 250)
      stroke(0, 0, 0)
      square(coord_x, coord_y, 50)
      }
    }
    else{
    fill(95, 46, 0)
    square(coord_x, coord_y, 50)
    }
    if (checkCollision(coord_x, coord_y)){
      bottom = coord_y - 51
      blockX = coord_x
    }
    else {
      nonTouchedBlocks += 1
    }
    if ((blockX == blockMovx) && (blockMovy == bottom + 51)){
      onMovingBlock = true
    }
    else if ((blockX == blockMovx2) && (blockMovy2 == bottom + 51)){
      onMovingBlock = true
    }
    else{
      onMovingBlock = false
    }
  })
  if (nonTouchedBlocks == coords.length){
    standing = false
  }
  else {
    standing = true
  }
  if ((standing == true) && (onMovingBlock == true)){
    if (keyIsDown(83)){
    cl('you are standing on a moving block')
    }
  }
  else if ((standing == true) && (onMovingBlock == false)){
    if (keyIsDown(83)){
    cl('you are standing on a stationary block')
    }
  }
  else if (jumping == false){
    if (keyIsDown(83)){
      cl('you are not standing on any block')
    }
    bottom = 599
  }

  nonTouchedBlocks = 0
  
  if (keyIsDown(83)){
      console.log(`player pos, x:${player_x}, y:${player_y}`)
      cl(`block pos: x: ${blockX}, y: ${bottom + 51}, floor: ${bottom}`)
      cl(`moving block y: ${blockMovy}, moving block x: ${blockMovx}`)
      cl(collectables)  }
  
  spikes.forEach(spike =>{
    spikex = spike[0]
    spikey = spike[1]
    spikeBlock(spikex, spikey)
    if (touchingSpike(spikex, spikey)){
      onDeath()
    }
  })
  timer += 1
  if (inLevel == true){
    lifetimer++;
  }
  
  if (inLevel === true){
  blockMovx += blockVel
  blockMovx2 += blockVel2
  }
  if (blockMovx >= blockLimitTwo){
    blockVel = -1
  }
  else if (blockMovx <= blockLimitOne){
    blockVel = 1
  }
  if (blockMovx2 >= blockLimitFour){
    blockVel2 = -1
  }
  else if (blockMovx2 <= blockLimitThree){
    blockVel2 = 1
  }
  
  collectableArrayCur = 0;
  toRemove = null
  noStroke();
  collectables.forEach(collect => {
    colX = collect[0]
    colY = collect[1]
    
    fill(113, 37, 255)
    square(colX, colY, 50)
    noStroke()
    image(keyimg, colX, colY, 50, 50)
    if (touchingKey(colX, colY, 50)){
      toRemove = collectableArrayCur;
      keySound.play();
    }
    collectableArrayCur++;
  })
  if (toRemove != null){
    collectables.splice(toRemove, 1)
    toRemove = null
  }
  if ((touchingKey(finishpos[0], finishpos[1], 50)) && (unlock === true)){
    onClear()
    lvlCompletesnd.play()
  }
  texts.forEach(t =>{
    if (t[4] != undefined){
      textSize(t[4])
    }
    fill(t[3])
    text(t[0], t[1], t[2])
    textSize(25)
  })
  stroke(0, 0, 0);
  if (player_y === 600){
      onDeath()
}
  if (stage == 0){
  showTitleScreen()
  }
  if (stage == 18){
    endScreen()
  }
  teleporters.forEach(tel =>{
    fill(255, 242, 4)
    image(tp1img, tel[0], tel[1], 50, 50)
    image(tp2img, tel[2], tel[3], 50, 50)
    if (touchingKey(tel[0], tel[1], 50)){
      jumping = false
      player_x = tel[2];
      player_y = tel[3] + 60;
      cl('zip')
      tpzap.play()
    }
    else if (touchingKey(tel[2], tel[3], 50)){
      jumping = false
      player_x = tel[0];
      player_y = tel[1] + 60;
      cl('zap')
      tpzap.play()
    }
  })
  if (player_y >= 601){
    player_y = 590
  }
  
  if (player_y <= -15){
    jumping = false
    player_y = 0
    cl('no')
  }
  if ((stage != 0) && (difficulty != 1) && (difficulty != 4)){
    getHealth()
  }
  if ((player_x > blockMovx - 49) && (player_x < blockMovx + 50) && (player_y == blockMovy - 50)){
    player_x += blockVel
  }
  else if ((player_x > blockMovx2 - 49) && (player_x < blockMovx2 + 100) && (player_y == blockMovy2 - 50)){
    player_x += blockVel2
  }
  if (lives == 0){
    deathScreen = false
    gameOver()
  }
  if (deathScreen == true){
    showDeathScreen()
  }
  if (showInfo == true){
    INFOSCREEN();
  }
  if (keyIsDown(17) && keyIsDown(16) && keyIsDown(82)){
    stage = 0;
    level = [];
    collectables = [];
    lives = 5
  }
}

class Buttn{
  constructor(xpos, ypos, xsize, ysize) {
    this.xpos = xpos
    this.ypos = ypos
    this.xsize = xsize
    this.ysize = ysize
  }
  
  isClicked(){
    if ((mouseX > this.xpos) && (mouseX < this.xpos + this.xsize) && (mouseY > this.ypos) && (mouseY < this.ypos + this.ysize) && (mouseIsPressed)){
      return true
    }
    else {
      return false
    }
  }
}
function keyPressed(){
  if ((player_y - 1 == bottom) && ((keyCode == 32) || (keyCode === 38) || (keyCode === 87)) && (inLevel === true)){
    jumping = true
    jumpsfx.play();
  }
  
}

function checkCollision(block_x, block_y){
  if ((player_y == block_y - 50) && (player_x > block_x - 50) && (player_x < block_x + 50) && (jumping == false)){
    return true
  }
  else {
    return false
  }
}

function cl(string){
  console.log(string)
}
function spikeBlock(x, y){
  fill(30);
  stroke(0, 0, 0);
  square(x, y, 50);
  x3 = x + 25;
  y3 = y - 30;
  x1 = x3 - 25;
  x2 = x3 + 25;
  y2 = y3 + 30;
  y1 = y2;
  fill(40, 40, 40);
  triangle(x3,y3,x1,y1,x2,y2);
  noStroke();
}

function touchingSpike(x, y){
  if ((player_y + 50 > y-25) && (player_y < y + 50) && (player_x + 50 > x) && (player_x < x + 50)){
    return true
  }
  else{
    return false
  }
}


function touchingKey(block_x, block_y, size){
  if ((player_y + size > block_y) && (player_y < block_y + size) && (player_x + size > block_x) && (player_x < block_x + size)){
    return true
  }
  else{
    return false
  }
}

function onClear(){
  jumping = false
  cl("level cleared")
  stage++;
  timer = 1
  lifetimer = 1;
  collectables = annoyingswitchthatshouldntexistbutitdoesbecausejavascriptiscringe()
}

function getHealth(){
  stroke(0, 0, 0)
  for (let x = lives; x > 0; x--){
    fill(180, 10, 10)
    switch(x){
      case 1:
        heartPos = 1210
        break;
        case 2:
        heartPos = 1170;
        break;
        case 3:
        heartPos = 1130;
        break;
        case 4:
        heartPos = 1090
        break
      case 5:
        heartPos = 1050
        fill(250, 196, 22)
    }
    strokeWeight(4)
    square(heartPos, 10, 30)
    strokeWeight(1)
  }
}

function showTitleScreen(){
  fill("rgb(1,206,255)");
  rect(1100, 570, 130, 30);
  fill('rgb(143,143,143)');
  rect(1100, 600, 130, 30);
  fill("rgb(228,0,0)");
  rect(1100, 540, 130, 30);
  fill("rgb(255,124,0)");
  rect(1100, 510, 130, 30);
  fill("rgb(117,255,0)");
  rect(1100, 480, 130, 30);
  spikeBlockSmall(50, 50);
  spikeBlockSmall(250, 50);
  spikeBlockSmall(400, 50);
  spikeBlockSmall(550, 50);
  spikeBlockSmall(130, 50);
  stroke(0, 0, 0);
  smallinvis(50, 90);
  smallinvis(50, 130);
  smallinvis(50, 170);
  sesb(50, 210);
  sesb(90, 110);
  sesb(120, 80);
  sesb(90, 160);
  sesb(130, 190);
  sesb(250, 90);
  sesb(250, 130);
  sesb(250, 170);
  sesb(250, 210);
  sesb(400, 90);
  sesb(400, 130);
  sesb(400, 170);
  sesb(400, 210);
  sesb(440, 90);
  sesb(480, 130);
  sesb(510, 175);
  sesb(550, 210);
  sesb(550, 170);
  sesb(550, 130);
  sesb(550, 90);
  sesb(750, 50);
  smallLocked(720, 90);
  sesb(720, 130);
  smallGoal(720, 170);
  sesb(750, 210);
  smallKey(790, 50);
  sesb(830, 50);
  sesb(790, 210);
  sesb(830, 210);
  sesb(860, 170);
  sesb(860, 130);
  sesb(830, 130);
  smalltp1(250, 210);
  smalltp2(400, 210);
  
  sesb(50, 510);
  sesb(90, 410);
  sesb(120, 380);
  stroke(0, 0, 0);
  smalltp2(90, 460);
  sesb(130, 490);
  spikeBlockSmall(50, 350);
  smallinvis(50, 390);
  stroke(0, 0, 0);
  smalltp1(50, 430);
  smallinvis(50, 470);
  spikeBlockSmall(130, 350);
  stroke(0, 0, 0);
  sesb(250, 350);
  sesb(250, 390);
  sesb(250, 430);
  sesb(250, 470);
  sesb(250, 510);
  sesb(290, 350);
  sesb(330, 350);
  sesb(290, 430);
  sesb(290, 510);
  sesb(330, 510);
  spikeBlockSmall(450, 350);
  sesb(480, 380);
  sesb(510, 410);
  sesb(540, 380);
  sesb(570, 350);
  smallKey(510, 450);
  sesb(510, 490);
  smallKey(510, 520);
  
  textSize(30);
  fill(0, 0, 0)
  text("of  the", 100, 300);
  const normalButton = new Buttn(1100, 480, 130, 30);
  const hardButton = new Buttn(1100, 510, 130, 30);
  const insaneButton = new Buttn(1100, 540, 130, 30);
  const speedModeButton = new Buttn(1100, 570, 130, 30);
  const InfoButton = new Buttn(1100, 600, 130, 30);
  if (normalButton.isClicked()){
    normalButtonDo();
    showInfo = false
  }
  else if (hardButton.isClicked()){
    hardButtonDo();
    showInfo = false;
  }
  else if (insaneButton.isClicked()){
    insaneButtonDo();
    showInfo = false;
  }
  else if (speedModeButton.isClicked()){
    speedButtonDo();
    showInfo = false;
  }
  else if (InfoButton.isClicked()){
    showInfo = true;
  }
  fill(0, 0, 0);
  textSize(25);
  text("Normal", 1110, 505);
  text("Hard", 1110, 535);
  text("Insane", 1110, 563);
  text("Speed", 1110, 592);
  text("Information", 1102, 625);

}
function mousePressed(){
  if (stage == 100){
    stage++
    inLevel = true
    timer = 0;
    startingScreen = false;
    lifetimer = 0
  }
  else if (deathScreen == true){
    deathScreen = false;
    inLevel = true;
  }
  
  if (showInfo == true){
    showInfo = false;
  }
  
  if (stage == 18){
    stage = 0;
    collectables = [];
    level = [];
  }
  selectsfx.play();
}

function onDeath(){
  player_x = startx
  player_y = starty
  collectables = annoyingswitchthatshouldntexistbutitdoesbecausejavascriptiscringe()
  if (difficulty != 1 && difficulty != 4){
  lives--;
  }
  jumping = false;
  inLevel = false
  deathScreen = true;
  lifetimer = 0;
  blockMovx = level.blockstartpos[0];
  blockMovy = level.blockstartpos[1];
  blockMovx2 = level.block2startpos[0];
  blockMovy2 = level.block2startpos[1];
  cl('died');
  deathsfx.play();
}

function showDeathScreen(){
  fill(200, 200, 200)
  stroke(0, 0, 0)
  strokeWeight(15)
  rect(225, 135, 825, 325)
  fill(255, 0, 0)
  textSize(100)
  noStroke()
  text("You Died!", 390, 250)
  textSize(30)
  fill(0, 0, 0)
  text("(click to respawn)", 470, 410)
  textSize(20)
  switch (difficulty){
    case 1: text("you are in normal mode so you didn't lose a life", 430, 300); break;
    case 2: text("you are in hard mode so you lost a life", 440, 300); break;
    case 3: text("insane players aren't even gonna see this so there is no point of writing anything here", 440, 300); break;
    case 4: text("you are in speed mode so you didn't lose a life", 415, 300); break;
  }
  stroke(0, 0, 0)
  strokeWeight(1)
  textSize(25)
}

function annoyingswitchthatshouldntexistbutitdoesbecausejavascriptiscringe(){
  switch (stage){
    case 4:
      return [[1150, 400], [1200, 70]]
      break
      case 5:
      return [[700, 0], [25, 10], [450, 10]]
      break
      case 6:
      return [[0, 150], [700, 50], [1150, 100]]
      break
      case 7:
      return [[0, 0], [1200, 0], [0, 540]]
      break
      case 8:
      return [[1200, 500], [580, 150], [1200, 170]]
      break
      case 9:
      return [[500, 250], [1200, 290], [1120, 530]]
      break
      case 10:
      return [[1200, 150], [450, 580], [950, 400]]
      break
      case 11:
      return [[950, 400], [0, 300], [50, 450]]
      break
      case 12:
      return [[1200, 410], [0, 410], [525, 0]]
      break
      case 13:
      return [[1200, 100], [960, 50], [0, 0]]
      break
      case 14:
      return [[1200, 549], [150, 30], [880, 10], [975, 400], [0, 0]]
      break
      case 15:
      return [[1200, 10], [1200, 350], [300, 500]]
      break
    default:
      return level.collectables
      break
  }
}

function endScreen(){
  sesb(100, 140);
  sesb(100, 180);
  sesb(100, 220);
  sesb(100, 260);
  spikeBlockSmall(140, 100);
  spikeBlockSmall(180, 100);
  spikeBlockSmall(220, 100);
  sesb(250, 130);
  sesb(140, 300);
  sesb(180, 300);
  sesb(220, 300);
  sesb(260, 260);
  sesb(260, 220);
  smalltp1(220, 220);
  
  
  sesb(400, 140);
  sesb(400, 180);
  sesb(400, 220);
  sesb(400, 260);
  spikeBlockSmall(440, 100);
  spikeBlockSmall(480, 100);
  spikeBlockSmall(520, 100);
  sesb(550, 130);
  sesb(440, 300);
  sesb(480, 300);
  sesb(520, 300);
  sesb(560, 260);
  sesb(560, 220);
  smalltp2(520, 220);
  
  smallKey(700, 150);
  sesb(700, 250);
  sesb(730, 280);
  sesb(770, 280);
  sesb(810, 280);
  sesb(840, 250);
  smallKey(840, 150);
  
  smallplayer(100, 110)
  fill(0, 0, 0);
  
  fill(255, 183, 0);
  switch (difficulty){
    case 1:
    text("GG, you have beat normal mode, great job! hope you liked the game", 100, 400);
      fill(0, 0, 0);
      text("click to go back to the starting screen",100, 450);
      break;
    case 2:
      text("GG, you have beat hard mode, amazing job! hope you enjoyed", 100, 400);
      fill(0, 0, 0);
      text("click to go back to the starting screen",100, 450);
      break
    case 3:
      text("GG's You beat insane mode, you somehow made it past my terrible levels without dying", 100, 400);
      text("you have well and truly beat the game! hope you enjoyed playing", 100, 450);
      fill(0, 0, 0);
      text("click to go back to the starting screen",100, 500);
      break
      case 4:
      text("GG, you have beat Speed mode, why", 100, 400);
      fill(0, 0, 0);
      text("click to go back to the starting screen",100, 450);
      break
  }
}
  
function gameOver(){
  storeItem("stage", 0)
  inLevel = false
  fill(200, 200, 200)
  stroke(0, 0, 0)
  strokeWeight(15)
  rect(225, 135, 825, 325)
  fill(255, 0, 0)
  textSize(100)
  noStroke()
  text("Game Over!", 340, 250)
  textSize(20)
  fill(0, 0, 0)
  text("you have lost all your lives, you are unable to respawn", 380, 390)
  stroke(0, 0, 0)
  strokeWeight(1)
  textSize(25)
  if (mouseIsPressed){
    stage = 0;
    startingScreen = true;
    collectables = [];
    lives = 5;
    level = [];
  }
}
  
function spikeBlockSmall(x, y){
  fill(30)
  stroke(0, 0, 0)
  square(x, y, 25)
  x3 = x + 12.5
  y3 = y - 15
  x1 = x3 - 12.5
  x2 = x3 + 12.5
  y2 = y3 + 15
  y1 = y2
  fill(40, 40, 40)
  triangle(x3,y3,x1,y1,x2,y2)
}

function sesb(x, y){
  fill(95, 46, 0)
  square(x, y, 25)
}
function smalltp1(x, y){
  stroke(0, 0, 0);
  image(tp1img, x, y, 25, 25)
}
function smalltp2(x, y){
  stroke(0, 0, 0);
  image(tp2img, x, y, 25, 25)
}
  
function smallinvis(x, y){
  fill(19, 227, 250)
  stroke(0, 0,0);
  square(x, y, 25)
}
function smallKey(x, y){
  noStroke();
  image(keyimg, x, y, 25, 25)
  stroke(0, 0, 0);
}
function smallGoal(x, y){
  image(goalimg, x, y, 25, 25)
}
function smallLocked(x, y){
  image(lockedgoal, x, y, 25, 25)
}
  
function normalButtonDo(){
  stage++
  inLevel = true
  timer = 0;
  startingScreen = false;
  lifetimer = 0
  difficulty = 1
  frameRate(60)
  resetLives = 5
}
function hardButtonDo(){
  stage++
  inLevel = true
  timer = 0;
  startingScreen = false;
  lifetimer = 0
  difficulty = 2
  frameRate(60)
  resetLives = 5
}
  
function insaneButtonDo(){
  stage++
  inLevel = true
  timer = 0;
  startingScreen = false;
  lifetimer = 0
  difficulty = 3
  frameRate(60)
  resetLives = 1
}
  
function speedButtonDo(){
  stage++
  inLevel = true
  timer = 0;
  startingScreen = false;
  lifetimer = 0
  difficulty = 4
  frameRate(120)
  resetLives = 5
}

function INFOSCREEN(){
  stroke(0, 0, 0);
  strokeWeight(10)
  fill(190, 190, 190)
  rect(100, 50, 1050, 550)
  strokeWeight(1)
  stroke(0, 0, 0);
  strokeWeight(10);
  fill(180, 180, 180);
  rect(100, 50, 1050, 550);
  strokeWeight(1);
  textSize(40);
  fill(0, 0, 0);
  text("Controls:", 120, 110);
  text("Info:", 120, 320);
  textSize(20);
  text("move right: D, right arrow", 120, 150);
  text("move left: A, left arrow", 120, 190);
  text("jump: Spacebar, W, up arrow", 120, 230);
  text("reset: SHIFT+CTRL+R  (this will bring you back to the start screen)", 120, 270);
  text("game may not be in full frame if so use CTRL-- to zoom out or CTRL++ to zoom in", 120, 360);
  text("game fps locked to 60FPS modifying the FPS values will mess with the games speed", 120, 400);
  text("I encourage modification of the source code and assets but please include credit to the original creator (me, Ham)", 120, 440);
  text("if you have a problem were you die repetitively please try: getting good",  120, 480);
  
  text("everything was done by me, Ham_sandwich, except the music which is Bleeping Demo by Kevin Macleod",  120, 560);
  image(logoimg, 1070, 520, 75, 75)
  
}

function smallplayer(x, y){
  image(sprite, x, y, 25, 25)
}
  
function randInt(max){
    return Math.floor(Math.random() * max);
}