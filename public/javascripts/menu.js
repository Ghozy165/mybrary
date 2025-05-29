document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    let isMenuOpen = false;
    
    function openMenu() {
        menuContent.classList.add('active');
        overlay.classList.add('active');
        menuIcon.classList.add('active');
        document.body.style.overflow = 'hidden';
        isMenuOpen = true;
    }
    
    function closeMenu() {
        menuContent.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.classList.remove('active');
        document.body.style.overflow = 'auto';
        isMenuOpen = false;
    }
    
    function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Event listeners
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu dengan ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    // Prevent menu content click from closing menu
    if (menuContent) {
        menuContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});