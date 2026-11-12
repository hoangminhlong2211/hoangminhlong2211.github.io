// Nút chuyển chế độ sáng/tối
const themeButton = document.getElementById("theme-toggle");

// Khôi phục giao diện đã chọn
const savedTheme = localStorage.getItem("theme");

function updateTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light", isLight);

    themeButton.textContent = isLight ? "☀️" : "🌙";
    themeButton.setAttribute("aria-pressed", String(isLight));
}

updateTheme(savedTheme === "light" ? "light" : "dark");

// Chuyển giao diện khi nhấn nút
themeButton.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    const newTheme = isLight ? "dark" : "light";

    updateTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

// Công cụ đếm ký tự
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
    charCount.textContent = textInput.value.length;
});

// Hiển thị năm hiện tại
document.getElementById("year").textContent =
    new Date().getFullYear();
