document.addEventListener("DOMContentLoaded", () => {

 const container = document.querySelector('#vaultContainer');

  console.log("Vault loaded");
console.log("BEFORE:", localStorage.getItem("entries"));

  let entries = JSON.parse(localStorage.getItem('entries')) || [];
