const toggleButton = document.querySelector('label[for="menu-toggle"]');
const navbarDefault = document.querySelector('.peer-checked + div');

toggleButton.addEventListener('click', () => {
  navbarDefault.classList.toggle('hidden');
});



// Dropdown 
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownDelayButton");
  const dropdown = document.getElementById("dropdownDelay");

  let timeout;

  // Show dropdown on hover
  button.addEventListener("mouseenter", function () {
      timeout = setTimeout(() => {
          dropdown.classList.remove("hidden");
      }, 500); // 500ms delay
  });

  // Hide dropdown when mouse leaves
  button.addEventListener("mouseleave", function () {
      clearTimeout(timeout);
  });

  dropdown.addEventListener("mouseleave", function () {
      dropdown.classList.add("hidden");
  });

  button.addEventListener("click", function () {
      dropdown.classList.toggle("hidden"); // Toggle on click
  });
});