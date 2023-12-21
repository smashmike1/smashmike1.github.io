const socket = io("https://socketioserver.webpubsub.azure.com", {
  path: "/clients/socketio/hubs/Hub",
});

socket.on("connect", async () => {
  let token = await Cookies.get("token");
  if (token != null) {
    socket.emit("token", token);
  } else {
    let pass = prompt("Password");
  }
});
socket.on("loadPage", (data) => {
  document.body.innerHTML = data["page"];
  loadScript(data["script"]);
  });

socket.on("assignToken", (token) => {
  Cookies.set("token", token);
});

function loadScript(script) {
    let newScript = document.createElement("script");
    newScript.innerHTML = script;
    document.head.appendChild(newScript);
}