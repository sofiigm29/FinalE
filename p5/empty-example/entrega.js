let item = "Cerebro";

let data = [
  {
    parte: "Cerebro",
    ml: 75
  },
  {
    parte: "Ojos",
    ml: 60
  },
  {
    parte: "Riñon",
    ml: 50
  },
  {
    parte: "Higado",
    ml: 20
  },
  {
    parte: 'Pulmones',
    ml: 35
  }
  ];


function setup() {
  createCanvas(800, 800);
  background(21,20,36);
  frameRate(10);
  
  sel = createSelect();
  sel.position(519, 80);
  sel.option('Cerebro');
  sel.option('Ojos');
  sel.option('Riñon');
  sel.option('Higado');
  sel.option('Pulmones');
  sel.changed(changed);

}


function draw() {






  noStroke();
  fill(0,110,137);
  textSize(18);
  text('Organos dañados por ingerir alcohol adulterado (etanol)', 130, 50);
  text('Mililitros',15,350);
  text('de etanol',15,370);
  fill(6,251,156);
  text('10', 120, 600);
  text('20', 120, 550);
  text('30', 120, 500);
  fill(255,237,93);
  text('40', 120, 450);
  text('50', 120, 400);
  text('60', 120, 350);
  fill(191,95,97);
  text('70', 120, 300);
  text('80', 120, 250);
  text('90', 120, 200);
  text('100', 110, 150);
  
  
  noStroke();
  fill(255);
  rect(150,100,450,500);
  rect(370,600,30,140);
  rect(210,700,350,40);


  
  if (item == 'Cerebro') {
    noStroke();
    fill(242, 189, 29);
    rect(160,270,430,320);
    

for (let i = 170; i < 500; i += 30) {
 for (let j = 120; j < 500; j += 20) {
        
fill('rgba(255, 255, 255, 0.5)'); 
  ellipse(i+random(0,108), j+random(2,108), 20, 20);
  
   
 } 
  
 }
  
fill(115, 70, 44);
    text('Cerebro', 350,430);
    }
  if (item == 'Ojos') {
    noStroke();
    fill(242, 189, 29);
    rect(160,340,430,250);
    


for (let i = 180; i < 500; i += 40) {
 for (let j = 120; j < 500; j += 30) {
        
 fill('rgba(255, 255, 255, 0.5)');  
  ellipse(i+random(0,108), j+random(2,108), 20, 20);
  
   
 } 
  
 }
fill(115, 70, 44);
    text('Ojos', 360,480);
    }
  if (item == 'Riñon') {
    noStroke();
    fill(242, 189, 29);
    rect(160,390,430,200);
    

    for (let i = 180; i < 500; i += 40) {
 for (let j = 120; j < 500; j += 70) {
        
 fill('rgba(255, 255, 255, 0.5)');  
  ellipse(i+random(0,108), j+random(2,108), 20, 20);
  
   
 } 
  fill(115, 70, 44);
    text('Riñon', 360,500);
 }
    }
  if (item == 'Higado') {
    noStroke();
    fill(242, 189, 29);
    rect(160,540,430,50);
    


    for (let i = 180; i < 500; i += 99) {
 for (let j = 120; j < 500; j += 90) {
        
 fill('rgba(255, 255, 255, 0.5)'); 
  ellipse(i+random(0,108), j+random(2,108), 20, 20);
  
   
 } 
  
 }

 fill(115, 70, 44);
    text('Higado', 355,570);
    }
  if (item == 'Pulmones') {
    noStroke();
    fill(242, 189, 29);
    rect(160,470,430,120);
    

    for (let i = 180; i < 500; i += 90) {
 for (let j = 120; j < 500; j += 70) {
        
 fill('rgba(255, 255, 255, 0.5)'); 
  ellipse(i+random(0,108), j+random(2,108), 20, 20);
  
   
 } 
  
 }

 fill(115, 70, 44);
    text('Pulmones', 350,540);
    }


}

function changed(){
   item = sel.value();
  
  
}





