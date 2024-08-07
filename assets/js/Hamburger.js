// document.addEventListener('DOMContentLoaded', function() {
//     const menuLink = document.querySelector('.menu-link');
//     const menu = document.querySelector('nav[role="navigation"]');
    
//     menuLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       menu.classList.toggle('active');
//     });
  
    
//     document.querySelectorAll('.has-submenu > a').forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         this.parentElement.classList.toggle('active');
//       });
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('nav[role="navigation"] .has-submenu > a');
  
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        var parentLi = this.parentElement;
        
        // Close other sub-menus
        document.querySelectorAll('nav[role="navigation"] .has-submenu').forEach(function(li) {
          if (li !== parentLi) {
            li.classList.remove('active');
          }
        });
        
        // Toggle 'active' class for the clicked menu item
        parentLi.classList.toggle('active');
      });
    });
  });
  
  