const socket = io("https://socketioserver.webpubsub.azure.com", {
  path: "/clients/socketio/hubs/Hub",
});

socket.on("connect", async () => {
  let token = await Cookies.get("token");
  if (token != null) {
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

