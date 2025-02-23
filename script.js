// const form = document.getElementById('contact-form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;

//   // Check if all fields are filled in
//   if (!name || !email || !subject || !message) {
//     alert('Please fill in all fields');
//     return;
//   }

//   fetch('/contact', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, email, subject, message }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// });
console.log('JavaScript code is being executed');
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled in
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    return; 
  }
 
  fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
// ... Your existing JavaScript (Typed.js, etc.) ...
const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');
console.log(navToggle);
console.log(navItems);
navToggle.addEventListener('click', () => {
    navItems.classList.toggle('show');
    navToggle.classList.toggle('active');
});
// Project Filtering (Add this to your live.js file)
document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded

  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectItems = document.querySelectorAll('.project-item');

  categoryBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove 'active' from all buttons
          categoryBtns.forEach(b => b.classList.remove('active'));

          // Add 'active' to the clicked button
          this.classList.add('active');

          const category = this.dataset.category; // Get the category

          // Filter projects
          projectItems.forEach(item => {
            if(category === 'all' || item.classList.contains(category)){
              item.style.display = 'flex';
            }
            else{
              item.style.display = 'none';
            }
          });
      });
  });
});    