console.log("loaded")
var sidebar = document.querySelector("aside")
var sidebarToggleButton = document.querySelector("#sidebarToggler")

sidebarToggleButton.addEventListener("click", () => {
    console.log("clicked")
    sidebar.classList.toggle("expanded")
})