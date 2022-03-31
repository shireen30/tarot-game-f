 var bgImage;

var card1;
var yellow_cardImg;
var card1_btn,card2_btn,card3_btn,card4_btn,card5_btn,card6_btn;

function preload(){
bgImage=loadImage("assets/starry-sky.jpg");
yellow_cardImg=loadImage("assets/Yellow_card.svg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  card1_btn=createImg("assets/Yellow_card.svg.png");
  card1_btn.position(100,80);
  card1_btn.size(200,300);
  card1_btn.mouseClicked(card1)


  card2_btn=createImg("assets/Blue_card.svg.png");
  card2_btn.position(300,80);
  card2_btn.size(200,300);
  card2_btn.mouseClicked(card2)
  
  card3_btn=createImg("assets/Red_card.png")
  card3_btn.position(500,80);
  card3_btn.size(200,300);
  card3_btn.mouseClicked(card3)
  card4_btn=createImg("assets/Yellow_card.svg.png")
  card4_btn.position(700,80)
  card4_btn.size(200,300)
  card4_btn.mouseClicked(card4)

  card5_btn=createImg("assets/Blue_card.svg.png")
  card5_btn.position(900,80)
  card5_btn.size(200,300)
  card5_btn.mouseClicked(card5)

  card6_btn=createImg("assets/Red_card.png")
  card6_btn.position(1100,80)
  card6_btn.size(200,300)
  card6_btn.mouseClicked(card6)


}

function draw() {
  background(0);

  image(bgImage,0,0)
  textSize(30);
fill("white")
  text("Choose A Card To get A Message from the Universe!",windowWidth/2-500,500)
  //drawSprites();


  }
  function card1(){
   // alert("Justice!!! You have Chosen");
   cardChosen('justice')
    card1_btn=createImg("assets/Justice.jpg");
    card1_btn.position(100,80);
    card1_btn.size(200,300);
  }
  function card2(){
    //alert("World!!! You have Chosen");
    cardChosen('world');
    card2_btn=createImg("assets/world.jpg");
    card2_btn.position(300,80);
    card2_btn.size(200,300);
  }
function card3(){
 // alert("Magician!! You have chosen");
 cardChosen('magician')
    card3_btn=createImg("assets/magician.jpg");
    card3_btn.position(500,80);
    card3_btn.size(200,300);

}

  function card4(){
   // alert("Sun!! You have chosen");
   cardChosen('sun')
      card4_btn=createImg("assets/RWS_Tarot_19_Sun.jpg" )
      card4_btn.position(700,80);
      card4_btn.size(200,300);
}
function card5(){
 // alert("Star!! You have chosen");
 cardChosen('star')
    card5_btn=createImg("assets/17-LST-The-Star.jpg" )
    card5_btn.position(900,80);
    card5_btn.size(200,300);
}
function card6(){
  //alert("Moon!! You have chosen");
  cardChosen('moon')
    card6_btn=createImg("assets/moon.jpg" )
    card6_btn.position(1100,80);
    card6_btn.size(200,300);
}
     
function cardChosen(card) {
  var title,img,txt;
  switch(card){
    case 'justice':
      title="You have chosen Justice";
      img="assets/Justice.jpg"
      txt="Making Balance and Harmony in everyday Life, to get justice and relief";
      break;
      case 'world':
      title="You have chosen World";
      img="assets/world.jpg"
      txt="Tough phase ends now and new beginnings start";
      break;
      case 'magician':
        title="You have chosen Magician";
        img="assets/magician.jpg"
        txt="Remember to stay positive beacuse you ultimately get what you think of";
        break;
        case 'sun':
          title="You have chosen Sun";
          img="assets/RWS_Tarot_19_Sun.jpg"
          txt="Emrace your inner child and smile more, happiness is ahead";
          break;
          case 'star':
            title="You have chosen Star";
            img="assets/17-LST-The-Star.jpg"
            txt="Very Soon a wish will come true, remember to be grateful the Universe";
            break;
            case 'moon':
              title="You have chosen Moon";
              img="assets/moon.jpg"
              txt="A lot is hidden from you, Be Patient Till the Truth is Revealed";
              break;
  

    

  }
 
  swal({
    title: title,
    text: txt,
    imageUrl:img,
    imageSize: "200x200",
    confirmButtonText: "Ok"
  }, function(isConfirm) {
    if (isConfirm) {
      location.reload();
    }
  });
}

function shuffle(){

}

