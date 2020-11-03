var dog;
var database;
var food;
var dbPosition;

function setup(){
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "brown";
    database = firebase.database(); 
    dbPosition = database.ref('food');
    dbPosition.on("value", readFood)
    
}

function draw(){
    background(46,139,87);
   
    
    if(keyDown(UP_ARROW)){
        feed();
    }
   
    drawSprites();
    console.log(food);
    textSize(25)
    textAlign(CENTER)
    fill("black")
    text("You have " + food + " pieces of food to feed the dog", 200,200)

}


function readFood(data){
food = data.val();

}

function feed(){
    database.ref('/').set({
        
     food: food - 1
      
        
   
    
    });
}

