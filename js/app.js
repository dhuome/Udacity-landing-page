const sections = document.getElementsByTagName('section');
const navBar = document.getElementById('nav-bar-list');

function main() {
  const sectionArray = Array.from(sections);
  sectionArray.forEach((section, index) => {
    const navItem = document.createElement('li');
    navItem.textContent = `Section ${index + 1}`
    navBar.appendChild(navItem);
  });
}


main();