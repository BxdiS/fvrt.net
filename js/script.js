window.addEventListener("load", () => {
	document.fonts.ready.then(() => {
		const mainTitle = document.getElementById("main-title");
		const subtitle = document.getElementById("subtitle");

		mainTitle.classList.remove("show");
		subtitle.classList.remove("show");

		void mainTitle.offsetWidth;

		mainTitle.classList.add("show");
		setTimeout(() => {
			subtitle.classList.add("show");
		}, 300);
	});
});

window.addEventListener("keydown", function (e) {
	if (
		e.key === "F12" ||
		(e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
		(e.ctrlKey && e.key === "U")
	) {
		e.preventDefault();
	}
});