var rawMaps = {};

class rawMap {
    constructor(file, name) {
        this.file = file;
        this.name = name;
        this.loaded = false;
        this.raw = loadJSON("res/" + file + "/" + name + ".json", () => {
            this.loaded = true;
        });

        rawMaps[name] = this;
    }
}

function drawMap(name) {
    var map = rawMaps[name];

    if(!map.loaded) return;
    for (var x=0; x<800; x+=32) {
        for(var y=0; y<640; y+=16) {
          var p = new position(null, x, y);
          imageSet.draw(map.raw["tileset"], p, map.raw["backgroundTile"].x, map.raw["backgroundTile"].y);
         }
      }
      drawMapLayer(map, "layer1");
      drawMapLayer(map, "layer2");
      drawMapLayer(map, "layer3");
}

function drawMapLayer(map, layer) {
    for (var i=0; i<map.raw[layer].length; i++){
        var tile = map.raw[layer][i].tile;
        var p = new position(null, map.raw[layer][i].x*32, map.raw[layer][i].y*32);
        imageSet.draw(map.raw["tileset"], p, tile.x, tile.y);
    }
}

function findValue(posX, posY, layer) {
    var map = rawMaps["madcamp"];

    if(!map.loaded) return;

    for (var i=0; i<map.raw[layer].length; i++){
        var tile = map.raw[layer][i].tile;

        if (map.raw[layer][i].x*32 == posX && map.raw[layer][i].y*32 == posY){
            if ((tile.x==4 && tile.y == 190) || (tile.x==5 && tile.y == 190) || (tile.x==6 && tile.y == 190))
                return 1;
            else
                return 0;
        }
    }
}