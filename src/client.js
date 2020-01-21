
var client = {
  socket: null,
  init: function(link) {
    client.socket = io.connect(link);
    client.socket.on("playerMovement", function(data) {
      console.log(data);
    });
  },
  send: function(data, key) {
    if(!key) key = "send";
    client.socket.emit(key, data);
  }
}
