document.querySelector("#menu-icon").addEventListener("click", (event) => {
	const navOptions = document.querySelector("#nav-options");
	const display = navOptions.style.display;
	navOptions.style.display = display == "flex" ? "none" : "flex";
});
