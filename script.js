var playerA;
var playerB;
var up;
var bottom;
var left;
var right;
var counter;
var borderLeft;
var borderRight;
var borderTop;
var borderBottom;
var victor;
var wallPlayerA;
var wallPlayerA2;
var wallPlayerB;
var wallPlayerB2;
var done;

function startGame(){
	gameArea.start();
    gameArea.clear();
	drawLinesVertical();
	drawLinesHorizontal();
	playerA = new player(90,90,"cyan",5,5);
	playerB = new player(90,90,"magenta", 605, 605);
	borderBottom = new border(700, 0, "#003366", 0, 700);
	borderUp = new border(700, 0, "#003366", 0, 0);
	borderLeft = new border(0, 700, "#003366", 0, 0);
	borderRight = new border(0,700, "#003366", 700, 0);
    up = 0;
    bottom = 700;
    left = 0;
    right = 700;
    counter = 0;
    wallPlayerA = null;
    wallPlayerA = [];
    wallPlayerB = null;
    wallPlayerB = [];
    wallPlayerA2 = null;
    wallPlayerA2 = [""];
    wallPlayerB2 = null;
    wallPlayerB2 = [""];
    done=false;
    stringWallPlayerA=null;
    stringWallPlayerA =[];
    stringWallPlayerB=null;
    stringWallPlayerB=[];
    allStrWall=null;
    allStrWall=[];
}

function player(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.update = function(){
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.newPosition = function(X, Y, otherP){
    	var newX = this.x + X;
    	var newY = this.y + Y;
    	if(otherP==="playerB"){
    		if(!((newX==playerB.x) && (newY==playerB.y))){
                if(X>0 && !(wallPlayerA2.indexOf(toNewString(10, 110, "cyan", this.x+90, this.y-10)) >= 0) 
                     && !(wallPlayerB2.indexOf(toNewString(10, 110, "magenta", this.x+90, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(X<0 && !(wallPlayerA2.indexOf(toNewString(10, 110, "cyan", this.x-10, this.y-10)) >= 0) 
                    && !(wallPlayerB2.indexOf(toNewString(10, 110, "magenta", this.x-10, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(Y<0 && !(wallPlayerA2.indexOf(toNewString(110, 10, "cyan", this.x-10, this.y-10)) >= 0)
                    && !(wallPlayerB2.indexOf(toNewString(110, 10, "magenta", this.x-10, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(Y>0 && !(wallPlayerA2.indexOf(toNewString(110, 10, "cyan", this.x-10, this.y+90)) >= 0)
                    && !(wallPlayerB2.indexOf(toNewString(110, 10, "magenta", this.x-10, this.y+90)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
    		}
    	} else if(otherP==="playerA"){
    		if(!((newX==playerA.x) && (newY==playerA.y))){
    		      if(X>0 && !(wallPlayerA2.indexOf(toNewString(10, 110, "cyan", this.x+90, this.y-10)) >= 0) 
                     && !(wallPlayerB2.indexOf(toNewString(10, 110, "magenta", this.x+90, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(X<0 && !(wallPlayerA2.indexOf(toNewString(10, 110, "cyan", this.x-10, this.y-10)) >= 0) 
                    && !(wallPlayerB2.indexOf(toNewString(10, 110, "magenta", this.x-10, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(Y<0 && !(wallPlayerA2.indexOf(toNewString(110, 10, "cyan", this.x-10, this.y-10)) >= 0)
                    && !(wallPlayerB2.indexOf(toNewString(110, 10, "magenta", this.x-10, this.y-10)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }
                else if(Y>0 && !(wallPlayerA2.indexOf(toNewString(110, 10, "cyan", this.x-10, this.y+90)) >= 0)
                    && !(wallPlayerB2.indexOf(toNewString(110, 10, "magenta", this.x-10, this.y+90)) >= 0)){
                    this.x = newX;
                    this.y = newY;
                }	
    		}
    	}
    }
}

function border(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.update = function(){
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function wall(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.update = function(){
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function drawLinesVertical(){
	var xPos=100;
	var yPos=0;
	ctx = gameArea.context;
	ctx.lineWidth = 1;
	for (var i=0;i<6;i++){
		ctx.beginPath();
		ctx.moveTo(xPos,yPos);
		yPos=yPos+700;
		ctx.lineTo(xPos,yPos);
		ctx.strokeStyle = '#ffffff';
        ctx.stroke();
		xPos=xPos+100;
		yPos=0;
	}
}

function drawLinesHorizontal(){
	var yPos=100;
	var xPos=0;
	ctx = gameArea.context;
	ctx.lineWidth = 1;
	for (var i=0;i<6;i++){
		ctx.beginPath();
		ctx.moveTo(xPos,yPos);
		xPos=xPos+700;
		ctx.lineTo(xPos,yPos);
        ctx.strokeStyle = '#ffffff';
		ctx.stroke();
		yPos=yPos+100;
		xPos=0;
	}
}

function updatePlayerA(){
	 //player A WALL keys
    if(gameArea.keys && gameArea.keys[87] && gameArea.keys[32]) {
    	var temp = new wall(110, 10, "cyan", playerA.x-10, playerA.y-10);
    	wallPlayerA.push(temp);
        wallPlayerA2.push(toNewString(110, 10, "cyan", playerA.x-10, playerA.y-10));
        var strTemp = toNewStringV2(110, 10, ((playerA.x)-10), ((playerA.y)-10));
        allStrWall.push(strTemp);
    }
    else if(gameArea.keys && gameArea.keys[83] && gameArea.keys[32]) {
    	var temp = new wall(110, 10, "cyan", playerA.x-10, playerA.y+90);
    	wallPlayerA.push(temp);
        wallPlayerA2.push(toNewString(110, 10, "cyan", playerA.x-10, playerA.y+90));
        var strTemp = toNewStringV2(110, 10, ((playerA.x)-10), ((playerA.y)+90));
        allStrWall.push(strTemp); 
    }
    else if(gameArea.keys && gameArea.keys[65] && gameArea.keys[32]) {
    	var temp = new wall(10, 110, "cyan", playerA.x-10, playerA.y-10);
    	wallPlayerA.push(temp);
        wallPlayerA2.push(toNewString(10, 110, "cyan", playerA.x-10, playerA.y-10));
        var strTemp = toNewStringV2(10, 110, ((playerA.x)-10), ((playerA.y)-10));
        allStrWall.push(strTemp);
    }
    else if(gameArea.keys && gameArea.keys[68] && gameArea.keys[32]) {
    	var temp = new wall(10, 110, "cyan", playerA.x+90, playerA.y-10);
    	wallPlayerA.push(temp);
        wallPlayerA2.push(toNewString(10, 110, "cyan", playerA.x+90, playerA.y-10));
        var strTemp = toNewStringV2(10, 110, ((playerA.x)+90), ((playerA.y)-10));
        allStrWall.push(strTemp);
    }
    //Player A MOVEMENT keys
    else if (gameArea.keys && gameArea.keys[87]) {playerA.newPosition(0, -100, "playerB");}
    else if (gameArea.keys && gameArea.keys[83]) {playerA.newPosition(0, 100, "playerB");}
    else if (gameArea.keys && gameArea.keys[65]) {playerA.newPosition(-100, 0, "playerB");}
    else if (gameArea.keys && gameArea.keys[68]) {playerA.newPosition(100, 0, "playerB");}
  
}

function updatePlayerB(){
	//Player B WALL keys
    if(gameArea.keys && gameArea.keys[38] && gameArea.keys[191]) {
    	var temp = new wall(110, 10, "magenta", playerB.x-10, playerB.y-10);
    	wallPlayerB.push(temp);
        wallPlayerB2.push(toNewString(110, 10, "magenta", playerB.x-10, playerB.y-10));
        var strTemp = toNewStringV2(110, 10, ((playerB.x)-10), ((playerB.y)-10));
        allStrWall.push(strTemp);
         
    }
    else if(gameArea.keys && gameArea.keys[40] && gameArea.keys[191]) {
    	var temp = new wall(110, 10, "magenta", playerB.x-10, playerB.y+90);
    	wallPlayerB.push(temp);
        wallPlayerB2.push(toNewString(110, 10, "magenta", playerB.x-10, playerB.y+90));
        var strTemp = toNewStringV2(110, 10, ((playerB.x)-10), ((playerB.y)+90));
        allStrWall.push(strTemp);
    }
    else if(gameArea.keys && gameArea.keys[37] && gameArea.keys[191]) {
    	var temp = new wall(10, 110, "magenta", playerB.x-10, playerB.y-10);
    	wallPlayerB.push(temp);
        wallPlayerB2.push(toNewString(10, 110, "magenta", playerB.x-10, playerB.y-10));
        var strTemp = toNewStringV2(10, 110, ((playerB.x)-10), ((playerB.y)-10));
        allStrWall.push(strTemp);
    }
    else if(gameArea.keys && gameArea.keys[39] && gameArea.keys[191]) {
    	var temp = new wall(10, 110, "magenta", playerB.x+90, playerB.y-10);
    	wallPlayerB.push(temp);
        wallPlayerB2.push(toNewString(10, 110, "magenta", playerB.x+90, playerB.y-10));
        var strTemp = toNewStringV2(10, 110, ((playerB.x)+90), ((playerB.y)-10));
        allStrWall.push(strTemp);
        
    }
    //player B MOVEMENT keys
    else if (gameArea.keys && gameArea.keys[38]) {playerB.newPosition(0, -100, "playerA");}
    else if (gameArea.keys && gameArea.keys[40]) {playerB.newPosition(0, 100, "playerA");}
    else if (gameArea.keys && gameArea.keys[37]) {playerB.newPosition(-100, 0, "playerA");}
    else if (gameArea.keys && gameArea.keys[39]) {playerB.newPosition(100, 0, "playerA");}

}

function updateGameArea() {

	gameArea.clear();
    drawLinesVertical();
    drawLinesHorizontal();
   
    //update position of each player
    playerA.update();
    playerB.update();

    for (var i=0; i<wallPlayerA.length; i++){
    	var temp = wallPlayerA[i];
    	temp.update();
    }

    for (var i=0; i<wallPlayerB.length; i++){
    	var temp = wallPlayerB[i];
    	temp.update();
    }

    borderBottom.update();
    borderUp.update();
    borderRight.update();
    borderLeft.update();

}

function incrementBorderCounter(){
    counter+=1;
    if(counter===20){
    	
    	//adjust left
    	borderLeft.width+=100;
    	left+=100;
    	//adjust right
    	borderRight.x-=100;
    	borderRight.width+=100;
    	right-=100;
    	//adjust top
    	borderUp.height+=100;
    	up+=100;
    	//adjust bottom
    	borderBottom.y-=100;
    	borderBottom.height+=100;
    	bottom-=100;

    	counter=0;
    }
}

function checkGameEnd(){
	 if(((playerA.x<left)||(playerA.x>right)||(playerA.y<up)||(playerA.y>bottom))&&((playerB.x<left)||(playerB.x>right)||(playerB.y<up)||(playerB.y>bottom))){
    	victor = "Tie!";
    	gameArea.gameEnd();
    }
    else if((playerA.x<left)||(playerA.x>right)||(playerA.y<up)||(playerA.y>bottom)){
		victor="Magenta Wins!";
		gameArea.gameEnd();
	} else if((playerB.x<left)||(playerB.x>right)||(playerB.y<up)||(playerB.y>bottom)){
		victor="Cyan Wins!";
		gameArea.gameEnd();
	}	
     else if (checkBoxIn("playerA")){
        victor="Magenta Wins!";
        gameArea.gameEnd();
    } else if(checkBoxIn("playerB")){
        victor="Cyan Wins!";
        gameArea.gameEnd();
    }
}
function checkBoxIn(p){
    if(p==="playerA"){
        var temp1 = toNewStringV2(110, 10, playerA.x-10, playerA.y-10);
        var temp2 = toNewStringV2(10, 110, playerA.x-10, playerA.y-10);
        var temp3 = toNewStringV2(110, 10, playerA.x-10, playerA.y+90);
        var temp4 = toNewStringV2(10, 110, playerA.x+90, playerA.y-10);
        if(((allStrWall.indexOf(temp1))>=0)&&((allStrWall.indexOf(temp2))>=0)&&((allStrWall.indexOf(temp3))>=0)&&((allStrWall.indexOf(temp4))>=0)){
            return true;
        } else {return false;}
    } else if (p==="playerB"){
        var temp1 = toNewStringV2(110, 10, playerB.x-10, playerB.y-10);
        var temp2 = toNewStringV2(10, 110, playerB.x-10, playerB.y-10);
        var temp3 = toNewStringV2(110, 10, playerB.x-10, playerB.y+90);
        var temp4 = toNewStringV2(10, 110, playerB.x+90, playerB.y-10);
        if((allStrWall.indexOf(temp1)>=0)&&(allStrWall.indexOf(temp2)>=0)&&(allStrWall.indexOf(temp3)>=0)&&(allStrWall.indexOf(temp4)>=0)){
            return true;
        } else {return false;}
    }
}
function toNewStringV2(w, l, px, py){
    var rString;
    rString = w.toString();
    rString+=l.toString();
    rString+=px.toString();
    rString+=py.toString();
    return rString;
}
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
    this.canvas.width = 700;
	this.canvas.height = 700;
	this.context = this.canvas.getContext("2d");
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	this.interval1 = setInterval(updateGameArea, 100);
	this.interval3 = setInterval(updatePlayerB, 500);
	this.interval2 = setInterval(updatePlayerA, 500);
	this.interval4 = setInterval(checkGameEnd, 10);
	this.interval5 = setInterval(incrementBorderCounter, 500);
	window.addEventListener('keydown', function (e) {
        e.preventDefault();
        gameArea.keys = (gameArea.keys || []);
        gameArea.keys[e.keyCode] = (e.type == "keydown");
    })
    window.addEventListener('keyup', function (e) {
        gameArea.keys[e.keyCode] = (e.type == "keydown");
    })
 	},

 	clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    gameEnd : function(){
			clearInterval(this.interval1);
			clearInterval(this.interval2);
			clearInterval(this.interval3);
			clearInterval(this.interval4);
			clearInterval(this.interval5);
			this.clear();
			this.context.font = "40px Trajan Pro";
			this.context.textAlign="center";
			this.context.strokeText("Game Over", 350, 325);
			this.context.font = "30px Trajan Pro";
			this.context.textAlign="center";
			this.context.strokeText(victor, 350, 375);
            this.context.font = "20px Trajan Pro";
            this.context.textAlign="center";
            this.context.strokeText("Press ENTER to PLAY AGAIN...", 350, 425);
            done = true;
	}
}

function toNewString(w, l, c, px, py){
    var rString;
    rString = w.toString();
    rString += l.toString();
    rString += c;
    rString += px.toString();
    rString += py.toString();
    return rString;
}
var listener = function(e){
    if((e.keyCode==13) && done){
        clearInterval(gameArea.interval1);
            clearInterval(gameArea.interval2);
            clearInterval(gameArea.interval3);
            clearInterval(gameArea.interval4);
            clearInterval(gameArea.interval5);
            gameArea.clear();
        startGame();
    }

}

window.addEventListener('keydown', listener);   
 

