document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#entryForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const newEntry = {
      title,
      content,
      date: new Date().toLocaleString()
    };

    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    entries.push(newEntry);

    localStorage.setItem('entries', JSON.stringify(entries));

    console.log("SAVED ENTRIES:", entries);

    setTimeout(() => {
      window.location.href = "vault.html";
    }, 50);

  });

});