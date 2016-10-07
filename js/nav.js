function toggleNav() {
	let nav = document.getElementById("nav-toggle");
	nav.classList.toggle("vertical");
}

document.getElementById("nav-toggle").addEventListener("click", function(e) {
	e.preventDefault();
	toggleNav();
})