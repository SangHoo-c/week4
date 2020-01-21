class userMovement {
    constructor(parent, pos, img) {
        new rawMap("maps", "madcamp");
        this.parent = parent;
        this.pos = pos;
        this.img = img;
        this.pos.x = this.pos.x - (this.pos.x % 32);
        this.pos.y = this.pos.y - (this.pos.y % 32);
        this.speed = 4;
        this.target = {
            x: this.pos.x,
            y: this.pos.y
        }
        this.moving = false;
        this.keys = {
            W: 87,
            A: 65,
            S: 83,
            D: 68,
            T: 84
        };
    }
    step() {
        if (keyIsDown(this.keys.W) && !this.moving) {
            this.img.setY(3);
            this.moving = true;
            this.target.y -= 32;
        }
        if (keyIsDown(this.keys.A) && !this.moving) {
            this.img.setY(1);
            this.moving = true;
            this.target.x -= 32;
        }
        if (keyIsDown(this.keys.S) && !this.moving) {
            this.img.setY(0);
            this.moving = true;
            this.target.y += 32;
        }
        if (keyIsDown(this.keys.D) && !this.moving) {
            this.img.setY(2);
            this.moving = true;
            this.target.x += 32;
        }
        if (keyIsDown(this.keys.T) && !this.moving) {
            
            // To detect NPC based on this.pos.x && this.pos.y in 4 directions.
            if (detectNpc_stopping(this.pos.x - 32, this.pos.y, this.pos.x, this.pos.y) || detectNpc_stopping(this.pos.x + 32, this.pos.y, this.pos.x, this.pos.y) || detectNpc_stopping(this.pos.x, this.pos.y + 32, this.pos.x, this.pos.y) || detectNpc_stopping(this.pos.x, this.pos.y - 32, this.pos.x, this.pos.y)) {
                
            }
        }
        if (this.moving) {
            if (findValue(this.target.x, this.target.y, "layer1")) {
                // Object collision
                this.target.x = this.pos.x;
                this.target.y = this.pos.y;
            }
            else if (detectNpc_moving(this.target.x, this.target.y)) {
                this.target.x = this.pos.x;
                this.target.y = this.pos.y;
            }
            else if (!(this.target.x > 768 || this.target.x < 0 || this.target.y > 608 || this.target.y < 32)) {
                // Normal behavior
                var distX = this.target.x - this.pos.x;
                var distY = this.target.y - this.pos.y;
                var dx = Math.sign(distX) * this.speed;
                var dy = Math.sign(distY) * this.speed;
                if (Math.abs(distX) <= this.speed && Math.abs(distY) <= this.speed) {
                    this.pos.x = this.target.x;
                    this.pos.y = this.target.y;
                    this.img.setX(0);
                    this.moving = false;
                }
                else {
                    this.pos.x += dx;
                    this.pos.y += dy;
                    this.img.animateX();
                }
            }
            else {
                // Wall collision
                this.target.x = this.pos.x;
                this.target.y = this.pos.y;
            }
        }
    }
}
function readTextFile(file, callback) {
    var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", "< path >", false);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status == "200") {
            callback(request.responseText);
        }
    }
    request.send(null);
}
function detectNpc_stopping(posX, posY, curX, curY) {
    var t = document.getElementById('talking');
    var name = document.getElementById('name');
    var yes_btn = document.getElementById('yes_button');
    // This is handling hyungshin NPC
    if (posX == 96 && posY == 32) {
        var img_ch = document.getElementById("npc__04");
        if (curX - posX < 0) {
            img_ch.src = "res/npc_hyungshin_transparent_left.png";
        } else if (curX - posX > 0) {
            img_ch.src = "res/npc_hyungshin_transparent_right.png";
        } else {
            img_ch.src = "res/npc_hyungshin_transparent_down.png";
        }
        localStorage.setItem('player_name', "형신");
        console.log(localStorage.getItem('player_name'));
        name.innerText = "형신";
        t.innerText = "공부나해!!!";
        $('.box').show();        
        yes_btn.style.visibility = "hidden";
        return 1;
    }
    // This is handling kyung NPC
    if (posX == 288 && posY == 128) {
        //var t = document.getElementById('talking');
        if (curX - posX < 0) {
            var img_ch = document.getElementById("npc__03");
            img_ch.src = "res/npc_kyung_transparent_left.png";
        } else {
            var img_ch = document.getElementById("npc__03");
            img_ch.src = "res/npc_kyung_transparent_right.png";
        }

        name.innerText = "경";
        t.innerText = "아 졸려..";
        localStorage.setItem('player_name', "경");
        localStorage.setItem('train_type', "squat");
        console.log(localStorage.getItem('train_type'));
        console.log(localStorage.getItem('player_name'));
        //스쿼트!!
        yes_btn.style.visibility = "visible";
        $('.box').show();
        return 1;
    }
    // This is handling changhun NPC
    if (posX == 288 && posY == 320) {
        //var t = document.getElementById('talking');
        name.innerText = "창훈";
        t.innerText = "째민이인!!.. 이가 아니네..??";
        localStorage.setItem('train_type', "squat");
        localStorage.setItem('player_name', "창훈");
        console.log(localStorage.getItem('train_type'));
        console.log(localStorage.getItem('player_name'));
        //스쿼트!!
        yes_btn.style.visibility = "visible";
        $('.box').show();
        if (curX - posX < 0) {
            var img_ch = document.getElementById("npc__01");
            img_ch.src = "res/npc_changhun_transparent_left.png";
        } else {
            var img_ch = document.getElementById("npc__01");
            img_ch.src = "res/npc_changhun_transparent_right.png";
        }
        return 1;
    }
    // This is handling jaemin NPC
    if (posX == 640 && posY == 416) {
        name.innerText = "째민";
        yes_btn.style.visibility = "visible";
        //aadavar t = document.getElementById('talking');
        t.innerText = "...";
        if (curX - posX > 0) {
            var img_ch = document.getElementById("npc__02");
            img_ch.src = "res/npc_jaemin_transparent_right.png";
        } else {
            var img_ch = document.getElementById("npc__02");
            img_ch.src = "res/npc_jaemin_transparent_left.png";
        }
        localStorage.setItem('player_name', "째민");
        localStorage.setItem('train_type', "push_up");
        console.log(localStorage.getItem('train_type'));
        console.log(localStorage.getItem('player_name'));
        //스쿼트!!
        $('.box').show();
        return 1;
    }
    return 0;
}
function detectNpc_moving(posX, posY) {
    // This is handling hyungshin NPC
    if (posX == 96 && posY == 32) {
        return 1;
    }
    // This is handling kyung NPC
    if (posX == 288 && posY == 128) {
        return 1;
    }
    // This is handling changhun NPC
    if (posX == 288 && posY == 320) {
        return 1;
    }
    // This is handling jaemin NPC
    if (posX == 640 && posY == 416) {
        return 1;
    }
    return 0;
}
function newpage() {
    window.location = newLocation;
}