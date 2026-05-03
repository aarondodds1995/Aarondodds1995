document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('#entryGrid');
  if (!grid) return;

const entries = JSON.parse(localStorage.getItem('entries')) || [];
  grid.innerHTML = '';

  const recentEntries = entries.slice(-5).reverse();
