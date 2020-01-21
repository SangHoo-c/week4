class player {
  constructor() {
    this.pos = new position(this, 416, 384, 0, -16);
    this.img = new animator(this, this.pos, "boy_run", 4, 4, .2);
    this.controller = new userMovement(this, this.pos, this.img);

    this.properties = [
      this.pos,
      this.img,
      this.controller
    ];
    objects.push(this);
  }
  step() {
    client.send({posX: this.pos.x, posY: this.pos.y}, "playerMovement");
  }
}
