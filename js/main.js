const root = document.documentElement;

// Apply the saved theme before the page renders.
try {
    if (localStorage.getItem("theme") === "dark") {
        root.dataset.theme = "dark";
    }
} catch {
    // The light theme works when storage is unavailable.
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-toggle");
    const year = document.getElementById("year");
    const textInput = document.getElementById("text-input");
    const charCount = document.getElementById("char-count");

    if (themeButton) {
        themeButton.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
        themeButton.hidden = false;

        themeButton.addEventListener("click", () => {
            const theme = root.dataset.theme === "dark" ? "light" : "dark";
            root.dataset.theme = theme;
            themeButton.setAttribute("aria-pressed", String(theme === "dark"));

            try {
                localStorage.setItem("theme", theme);
            } catch {
                // Keep the selected theme for this page.
            }
        });
    }

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (textInput && charCount) {
        const updateCount = () => {
            charCount.value = String(textInput.value.length);
        };

        textInput.addEventListener("input", updateCount);
        window.addEventListener("pageshow", updateCount);
        updateCount();
    }
});
