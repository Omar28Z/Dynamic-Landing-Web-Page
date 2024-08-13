## Project Overview

This project is a dynamic landing page that includes a navigation bar, section highlighting on scroll, and a simple comment submission form. The landing page is built using HTML, CSS, and JavaScript. The page dynamically generates navigation links based on the sections present in the HTML, provides smooth scrolling to sections, and highlights the section in view. Additionally, users can submit comments which are displayed on the page.

## Features

- **Dynamic Navigation Bar:** The navigation links are dynamically created based on the sections of the page. Each link scrolls smoothly to the corresponding section.
- **Active Section Highlighting:** The section currently in view is automatically highlighted in the navigation bar and on the page.
- **Smooth Scrolling:** Smooth scroll behavior is applied to the page when navigating through sections.
- **Comment Submission Form:** A simple form allows users to submit comments, which are then displayed on the page.

## Technologies Used

- **HTML:** Basic page structure
- **CSS:** Page styling
- **JavaScript:** Makes the page dynamic, needed for features like smooth scrolling and submitting comments

## How It Works

### 1. Dynamic Navigation Bar

The JavaScript code selects all sections on the page and creates navigation links based on their `data-nav` attribute. The links are appended to the navigation bar and include an event listener for smooth scrolling.

### 2. Active Section Highlighting

An `IntersectionObserver` is used to detect which section is currently in the viewport. The observed section is highlighted by adding an `active` class, while others have the `active` class removed.

### 3. Smooth Scrolling

Smooth scrolling is achieved by using the `scrollIntoView` method with the `behavior: 'smooth'` option, ensuring a user-friendly navigation experience.

### 4. Comment Submission Form

The form captures the user's name, email, and comment. Upon submission, the input is validated to ensure all fields are filled, and a valid email is provided. The comment is then displayed on the page.

## Project Link

Here is a link to my project:
    https://github.com/Omar28Z/Dynamic-Landing-Web-Page