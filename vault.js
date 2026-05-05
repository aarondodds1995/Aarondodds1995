document.addEventListener("DOMContentLoaded", () => {

 const container = document.querySelector('#vaultContainer');

  console.log("Vault loaded");
console.log("BEFORE:", localStorage.getItem("entries"));

  let entries = JSON.parse(localStorage.getItem('entries')) || [];

 console.log("Vault entries:", entries);

  container.innerHTML = '';

  entries.reverse().forEach(entry => {
    const row = document.createElement('div');
    row.classList.add('entry-row');
