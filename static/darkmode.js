const saved_theme = localStorage.getItem("digi-theme");
if (saved_theme) {
	document.body.setAttribute("data-theme", saved_theme);
	document.body.classList.toggle(saved_theme)
} else {
	const prefers_dark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const theme = prefers_dark ? "dark" : "light";
	document.body.classList.toggle(theme)
	document.body.setAttribute("data-theme", theme);
	localStorage.setItem("digi-theme", theme);
}