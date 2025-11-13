console.log("loaded")
var sidebar = document.querySelector(".sidebar")
var sidebarToggleButton = document.querySelector("#sidebarToggler")

sidebarToggleButton.addEventListener("click", () => {
    console.log("clicked")
    sidebar.classList.toggle("collapsed")
})