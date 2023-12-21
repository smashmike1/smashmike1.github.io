const socket = io("https://socketioserver.webpubsub.azure.com", {
  path: "/clients/socketio/hubs/Hub",
});

socket.on("connect", () => {
  let token = Cookies.get("token");
  if (token) {
    socket.emit("token", token);
  } else {
    let pass = prompt("Test");
    socket.emit("Password", pass);
  }
});

socket.on("loadPage", (data) => {
  document.body.innerHTML = data;
});

socket.on("assignToken", (token) => {
  Cookies.set("token", token);
});

