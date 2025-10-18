  
        window.addEventListener("scroll", function() {
            
        });
        
        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
        const navigationItems = document.querySelectorAll(".navigation a");
        
        
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });
        
        window.addEventListener("scroll", function() {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
        
        navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
                menuBtn.classList.remove("active");
                navigation.classList.remove("active");
            });
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });