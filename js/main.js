
// =======================================
// 1. CHẾ ĐỘ SÁNG / TỐI
// =======================================

const themeButton = document.getElementById("theme-toggle");

function updateTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light", isLight);

    if (themeButton) {
        themeButton.textContent = isLight ? "☀️" : "🌙";
        themeButton.setAttribute(
            "aria-pressed",
            String(isLight)
        );
        themeButton.setAttribute(
            "aria-label",
            isLight ? "Bật chế độ tối" : "Bật chế độ sáng"
        );
    }
}

// Đọc chế độ giao diện đã lưu
const savedTheme = localStorage.getItem("theme");
updateTheme(savedTheme === "light" ? "light" : "dark");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        const isLight =
            document.body.classList.contains("light");

        const newTheme = isLight ? "dark" : "light";

        updateTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });
}


// =======================================
// 2. TỰ ĐỘNG ĐÁNH DẤU MENU
// =======================================

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // Chuẩn hóa dấu / ở cuối đường dẫn
    const normalize = path =>
        path.replace(/\/index\.html$/, "/");

    if (normalize(linkPath) === normalize(currentPath)) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});


// =======================================
// 3. CÔNG CỤ ĐẾM KÝ TỰ
// =======================================

const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

if (textInput && charCount) {
    textInput.addEventListener("input", () => {
        charCount.textContent = textInput.value.length;
    });
}


// =======================================
// 4. NĂM HIỆN TẠI
// =======================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
