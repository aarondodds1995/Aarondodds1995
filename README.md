Here is a fully functional multi-page digital diary built with HTML, CSS, and JavaScript. Entries are saved persistently using `localStorage`. The app uses browser-based storage so that entries persist even after the page is closed.

<img width="1915" height="957" alt="Image" src="https://github.com/user-attachments/assets/cd91e884-7778-46d8-ba2f-9d500e7da2c0" />

<img width="1916" height="876" alt="Image" src="https://github.com/user-attachments/assets/18d26c2a-8ee9-4829-b127-fc02a5fb947a" />

<img width="1918" height="892" alt="Image" src="https://github.com/user-attachments/assets/5da43067-dece-4816-8395-01a03d040de9" />

The technologies/code Used

HTML5 – Semantic markup and page structure
CSS3 – Flexbox, Grid, and modern styling
JavaScriptDOM manipulation, form handling, and dynamic rendering
localStorage – Client-side data persistence

Saving Entries

When a user submits the form on the New Entry page:

JavaScript captures the input values using .value
A new entry object is created
The entry is added to an array
The array is converted into a string using JSON.stringify()
The data is saved in localStorage under the key "entries"

Displaying the 5 Most Recent Entries

On the Home page:

Stored entries are retrieved using:
JSON.parse(localStorage.getItem('entries'))

The array is limited to the 5 most recent entries using:
entries.slice(0, 5)
A loop dynamically creates and inserts entry cards into the grid. his ensures only the newest entries are shown


Reference
MDN Web Docs – localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
