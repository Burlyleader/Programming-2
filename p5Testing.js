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


/* This works on its own
function preload() {
 mySound = loadSound('assets/Bong_Infrapulse.mp3');
}

function setup() {
  mySound.loop();
}
*/