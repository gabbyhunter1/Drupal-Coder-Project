document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.navbar__toggle');
    const navList = document.querySelector('.navbar__list');
    const navToggleIcons = document.querySelectorAll('.navbar__toggle-icon');
    const navItems = document.querySelectorAll('.navbar__item');
  
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      navToggleIcons.forEach(icon => icon.classList.toggle('active'));
    });
  
    navItems.forEach(item => {
      const hasDropdown = item.querySelector('.navbar__dropdown');
      
      if (hasDropdown) {
        item.classList.add('has-dropdown');
        
        item.addEventListener('click', (e) => {
          if (e.target.closest('.navbar__dropdown')) return;
          
          e.stopPropagation();
          
          if (hasDropdown.classList.contains('active')) {
            hasDropdown.classList.remove('active');
          } else {
            hasDropdown.classList.add('active');
          }
        });
      }
    });
  
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        navList.classList.remove('active');
        navToggleIcons.forEach(icon => icon.classList.remove('active'));
        
        navItems.forEach(item => {
          const dropdown = item.querySelector('.navbar__dropdown');
          if (dropdown) {
            dropdown.classList.remove('active');
          }
        });
      }
    });
  });