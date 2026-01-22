const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('dashboard-theme', isDark ? 'dark' : 'light');
});


if (localStorage.getItem('dashboard-theme') === 'dark') {
    body.classList.add('dark-theme');
}