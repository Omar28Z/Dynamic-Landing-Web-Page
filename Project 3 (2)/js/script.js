// Get the navbar list element and all section elements
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Function to create navigation links dynamically
const createNavLinks = () => {
  sections.forEach(section => {
    // Get the section's ID
    const sectionId = section.getAttribute('id');
    // Get the section's data-nav attribute
    const sectionNav = section.getAttribute('data-nav');

    // Create a new list item
    const listItem = document.createElement('li');

    // Create a new anchor (link) element
    const anchor = document.createElement('a');
    // Add class for styling
    anchor.classList.add('menu__link');
    // Set the href to the section ID
    anchor.href = `#${sectionId}`;
    // Set the text content to the data-nav value
    anchor.textContent = sectionNav;
    // Add smooth scroll behavior on link click
    anchor.addEventListener('click', (e) => {
      // Prevent the default anchor click behavior
      e.preventDefault();
      document.getElementById(sectionId).scrollIntoView({
        // Scroll smoothly to the section
        behavior: 'smooth'
      });
    });
    // Append the anchor to the list item
    listItem.appendChild(anchor);  
    // Append the list item to the navbar
    navbarList.appendChild(listItem);
  });
};

// Call the function to create the navigation links
createNavLinks();
// Function to set the active section when scrolling
const setActiveSection = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove the 'active' class from all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });
      // Add the 'active' class to the currently intersecting section
      entry.target.classList.add('active');
    }
  });
};

// Create a new IntersectionObserver to watch for when sections enter the viewport
const observer = new IntersectionObserver(setActiveSection, {
  // Use the viewport as the root
  root: null,
  // Section is considered active when 60% visible
  threshold: 0.6
});
// Observe each section for intersection
sections.forEach(section => {
  observer.observe(section);
});
// Get the comment form and comments container elements
const commentForm = document.getElementById('commentForm');
const commentsContainer = document.getElementById('commentsContainer');

// Add an event listener to handle form submission
commentForm.addEventListener('submit', function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Get the values from the form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentInput = document.getElementById('comment');
  // Validate the form fields
  if (nameInput.value === '' || emailInput.value === '' || commentInput.value === '') {
    // Alert if any field is empty
    alert('Please fill out all fields.');
    return;
  }
  // Validate the email format
  if (!emailInput.value.includes('@')) {
    // Alert if the email is invalid
    alert('Please enter a valid email address.');
    return;
  }
  // Create a new comment div to display the comment
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  // Create and append the author name div
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('comment-author');
  authorDiv.textContent = nameInput.value;
  // Create and append the email div
  const emailDiv = document.createElement('div');
  emailDiv.classList.add('comment-email');
  emailDiv.textContent = emailInput.value;
  // Create and append the comment text div
  const textDiv = document.createElement('div');
  textDiv.classList.add('comment-text');
  textDiv.textContent = commentInput.value;
  // Append the author, email, and text divs to the comment div
  commentDiv.appendChild(authorDiv);
  commentDiv.appendChild(emailDiv);
  commentDiv.appendChild(textDiv);
  // Append the comment div to the comments container
  commentsContainer.appendChild(commentDiv);
  // Clear the form fields after submission
  nameInput.value = '';
  emailInput.value = '';
  commentInput.value = '';
});