document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('#entryGrid');
  if (!grid) return;

const entries = JSON.parse(localStorage.getItem('entries')) || [];
  grid.innerHTML = '';

  const recentEntries = entries.slice(-5).reverse();

                      
  recentEntries.forEach(entry => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.content}</p>
      <small>${entry.date}</small>
    `;

    grid.appendChild(card);
  });
});
