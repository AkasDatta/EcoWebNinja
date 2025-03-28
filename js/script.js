const toggleButton = document.querySelector('label[for="menu-toggle"]');
const navbarDefault = document.querySelector('.peer-checked + div');

toggleButton.addEventListener('click', () => {
  navbarDefault.classList.toggle('hidden');
});
