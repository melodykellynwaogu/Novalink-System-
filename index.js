const text = "NovaLink Systems";
const typewriterTarget = document.getElementById("typewriter");
let i = 0;
function typeWriter() {
    if (i < text.length) {
    typewriterTarget.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    root.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
});

// Chart.js
const ctx = document.getElementById('performanceChart');
new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ['Team A', 'Team B', 'Team C'],
    datasets: [{
        label: 'Productivity %',
        data: [87, 75, 92],
        backgroundColor: ['#6366f1', '#8b5cf6', '#f59e0b'],
    }]
    },
    options: {
    responsive: true,
    plugins: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Q2 Team Productivity'
        }
    }
    }
});