// Define Global Variables 
const sections = document.getElementsByTagName('section');
const navBar = document.getElementById('nav-bar-list');
const listItems = document.getElementsByTagName('li');

// Main function to call all needed functions to start the process
function main() {
  setupNavBar();
  document.addEventListener('DOMContentLoaded', isInViewport)
  document.addEventListener('scroll', isInViewport)
}

// setupNavBar function is to create the nav dynamically 
function setupNavBar() {
  const sectionArray = Array.from(sections);

  sectionArray.forEach((section, index) => {
    const name = `Section ${index + 1}`;
    const navItem = document.createElement('li');

    navItem.textContent = name
    navBar.appendChild(navItem);
    if (index === 0) {
      navItem.classList.add('active');
    }

    navItem.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// clearActive function is to clear the active nav state
function clearActive() {
  const listArray = Array.from(listItems);

  listArray.forEach((listItem, Index) => {
    listItem.classList.remove('active');
  });
}

// isInViewport is to dynamically change the nav state active class 
function isInViewport() {
  const sectionArray = Array.from(sections);
  const listArray = Array.from(listItems);

  sectionArray.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top - 100;
    const bottom = rect.top + rect.height - 100;

    if (top <= window.innerHeight && bottom <= window.innerHeight) {
      clearActive();
      listArray[index].classList.add('active');
    }
  });
}


main();