const navOptions = document.getElementById("nav-options");

window.addEventListener("click", (event) => {
	console.log("Window is clicked");
	navOptions.setAttribute("display", "flex");
});

document.getElementById("menu-icon").addEventListener("click", (event) => {
	console.log("Menu icon is clicked");
	navOptions.setAttribute("display", "none");
});
