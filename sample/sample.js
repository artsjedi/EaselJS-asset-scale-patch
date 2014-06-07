var stage;

var scoreText;
var assetPath;

var time;
var screenWidth = 512;
var screenHeigth = 300;

var monsterWidth = 190;
var monsterHeigth = 159;

var score;
var monstersNumber;

var timeout;

//path funcion
var assetscale;

function init(scale) {
    //clear stage
    if (stage)
        stage.removeAllChildren();

    //set global variable assetScale to createjs image scale patch
    assetscale = scale;
    assetPath = "assets" + scale + "/";

    stage = new createjs.Stage("demoCanvas");
    stage.scaleX = stage.scaleY = 2;

    //set canvas render mode
    var ctx = stage.canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    createjs.Ticker.addEventListener("tick", function () {
        stage.update();
    });
    createjs.Ticker.setFPS(60);

    initGame();
}
;

//initializate game
function initGame() {
    //remove all children
    stage.removeAllChildren();

    //adds background
    stage.addChild(new createjs.Bitmap(assetPath + "ceu.png"));

    //adds score Text
    scoreText = new createjs.Text("SCORE: 0", "30px Arial", "black");
    scoreText.x = scoreText.y = 20;
    stage.addChild(scoreText);

    //reset all values
    monstersNumber = 0;
    score = 0;
    time = 700;
    clearTimeout(timeout);

    //creates game interval
    setTimeout(gameStep, time);
}

//game step
function gameStep() {
    //verifies if there is more than 10 monsters to end the game
    if (monstersNumber > 10) {
        endGame();
        return;
    }

    //add a new monster
    addMonster();

    //reduces time
    time -= 10;

    //set interval for the next step
    timeout = setTimeout(gameStep, time);
}

//ends the game
function endGame() {
    //remove all children
    stage.removeAllChildren();

    scoreText.text = "GAME OVER !!!   SCORE: " + score;
    stage.addChild(scoreText);

    //in 2 seconds starts a new game
    setTimeout(initGame, 2000);
}

//adds a new monster
function addMonster() {
    //create monster
    var monster = new createjs.Bitmap(assetPath + "monster.png");
    stage.addChild(monster);

    //set monster position to a random position
    monster.x = Math.random() * screenWidth;
    monster.y = Math.random() * screenHeigth;
    monster.scaleX = (Math.random() > 0.5) ? -1 : 1;
    monster.regX = monsterWidth / 2;
    monster.regY = monsterHeigth / 2;

    //adds monster hitarea
    monster.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#FFF").drawRect(0, 0, monsterWidth, monsterHeigth));

    //increase monster count
    monstersNumber++;

    //create a listener to remove the monster
    monster.addEventListener("mousedown", function () {
        //remove monster from stage
        stage.removeChild(monster);

        //increase score
        score++;

        //updates score
        scoreText.text = "SCORE: " + score;

        //decrease monster number
        monstersNumber--;

        //adds explode effect;
        explode(monster.x, monster.y);
    });
}

//add explode effect
function explode(x, y) {
    //create explosion object
    var explosion = new createjs.Bitmap(assetPath + "explosion.png");
    explosion.x = x;
    explosion.y = y;
    explosion.regX = monsterWidth / 2;
    explosion.regY = monsterHeigth / 2;
    stage.addChild(explosion);

    //remove it in 150 miliseconds
    setTimeout(function () {
        stage.removeChild(explosion);
    }, 150);
}
//# sourceMappingURL=sample.js.map
