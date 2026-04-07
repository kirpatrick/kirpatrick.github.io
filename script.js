function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleTheme() {
  document.body.classList.toggle('dark');

  const btn = document.getElementById('themeToggle');

  if (document.body.classList.contains('dark')) {
    btn.textContent = "Light Theme";
  } else {
    btn.textContent = "Dark Theme";
  }
}

function toggleTree(parentElement) {
  const item = parentElement.parentElement;
  item.classList.toggle("open");
}
