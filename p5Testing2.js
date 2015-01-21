var system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
}

// Variable that will be used later on and given attributes -Nate
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.get();
  this.lifespan = 255.0;
};
//function that goes and tells the other 2 functions to start/run -Nate
Particle.prototype.run = function() {
  this.update();
  this.display();
};

// updates where the partical is going to be displayed and where it is located on the screen. -Nate
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// function that creates and displays all the small orbs and what class details they have -Nate
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// checks to see if the partical is still needed to be displayed and if not it will be removed -Nate
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

// Variable that creates a system of particals and checks the postion and origin of the particles -Nate
var ParticleSystem = function(position) {
  this.origin = position.get();
  this.particles = [];
};
//function that adds particals and then goes back to the variable and runs the origin -Nate
ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};




IGNORE ALL OF THIS \/


/*
var song;

function setup() {
  song = loadSound('assets/Bong_Infrapulse.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
*/

/* This works on its own
function preload() {
 mySound = loadSound('assets/Bong_Infrapulse.mp3');
}

function setup() {
  mySound.loop();
}
*/