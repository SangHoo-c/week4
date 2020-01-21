client.init("localhost:3000");

function setup() {
  Screen.init();
  new rawImage("boy_run");

  new imageSet("tilesets", "Interior", 8, 251);
  new rawMap("maps", "madcamp");
  new player();
}

function step() {
  drawMap("madcamp");
}
