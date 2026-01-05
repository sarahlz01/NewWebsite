function dark() {

  //Contact Page Icons
  const contactEmail = document.getElementById('contactEmail');
  contactEmail.classList.remove('hover:text-blue-100');
  contactEmail.classList.add('hover:text-rose-100');
  const contactLinked = document.getElementById('contactLinked');
  contactLinked.classList.remove('hover:text-blue-100');
  contactLinked.classList.add('hover:text-rose-100');

  const contactPage = document.getElementById('rounddiv');
  contactPage.classList.remove('bg-rose-100');

  const contact = document.getElementById('contact');
  contact.classList.add('bg-[#20405E]');

  // Toggle buttons
  document.getElementById('sun-button').classList.add('hidden');
  document.getElementById('moon-button').classList.remove('hidden');

  // Shutters
  const shutters = document.querySelectorAll('.shutter');
  shutters.forEach(shutter => {
    shutter.classList.remove('bg-shutter-gray', '-rotate-[8deg]', 'h-[8vh]', 'h-[9vh]');
    shutter.classList.add('bg-[#20405E]', '-rotate-[4deg]', 'h-[2vh]');
  });

  // Shutters Container
  const shuttersContainer = document.getElementById('shutters');
  shuttersContainer.classList.remove('from-cream/50', 'to-shutter-gray/20', 'space-y-[2vh]');
  shuttersContainer.classList.add('from-[#5D80B1]', 'to-[#20405E]/20', 'space-y-[8vh]');

  // Gradient
  const gradient = document.getElementById('gradient');
  gradient.classList.remove('via-rose-50/10', 'to-rose-50/80');
  gradient.classList.add('via-[#20405E]/10', 'to-[#20405E]/80');

  // Background
  const background = document.getElementById('background');
  background.classList.remove('bg-shutter-gray');
  background.classList.add('bg-[#20405E]');

  // About
  const about = document.getElementById('about');
  if (about) {
    about.classList.remove('text-black');
    about.classList.add('bg-[#20405E]');
    about.classList.add('text-cream');
  }

  // Pole
  const pole = document.getElementById('pole');
  pole.classList.remove('bg-shutter-gray');
  pole.classList.add('bg-[#20405E]');

  // Main Text container
  const mainText = document.getElementById('main-text');
  if (mainText) {
    mainText.classList.remove('text-rose-100');
    mainText.classList.add('text-cream');
  }

  // Ensure all h1 elements in main-text get cream color
  const h1Elements = document.querySelectorAll('#main-text h1');
  h1Elements.forEach(h1 => {
    h1.classList.remove('text-rose-100');
    h1.classList.add('text-cream');
  });

  // Ensure all links (a elements) in main-text get cream color
  const mainTextLinks = document.querySelectorAll('#main-text a');
  mainTextLinks.forEach(link => {
    link.classList.remove('text-rose-100');
    link.classList.add('text-cream');
    // Change hover color from blue-100 to rose-100 for dark mode
    link.classList.remove('hover:text-blue-100');
    link.classList.add('hover:text-rose-100');
  });

  // Nav Texts
  const navButtons = document.querySelectorAll('.nav-text');
  navButtons.forEach(button => {
    if (!button.classList.contains('text-cream')) {
      button.classList.remove('text-rose-100');
      button.classList.add('text-cream');
    }
  });

  // Nav Background
  const nav = document.getElementById('nav');
  nav.classList.remove('bg-cream/20');
  nav.classList.add('bg-[#20405E]/50');

  // Mobile Menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('bg-[#20405E]/95');
    mobileMenu.classList.add('bg-cream/95');
  }

  // Menu backdrop
  const backdrop = document.getElementById('menu-backdrop');
  if (backdrop) {
    backdrop.classList.remove('bg-black/20');
    backdrop.classList.add('bg-black/40');
  }

  // Mobile Nav Texts
  const mobileNavTexts = document.querySelectorAll('.mobile-nav-text');
  mobileNavTexts.forEach(text => {
    text.classList.remove('text-rose-100', 'text-cream');
    text.classList.add('text-blue-100');
  });

  // Menu close button
  const menuCloseIcon = document.getElementById('menu-close-icon');
  if (menuCloseIcon) {
    menuCloseIcon.classList.remove('stroke-rose-100', 'stroke-cream');
    menuCloseIcon.classList.add('stroke-blue-100');
  }

  // Mini Menu
  const menuIconSvg = document.getElementById('menu-icon-svg');
  if (menuIconSvg) {
    menuIconSvg.classList.remove('stroke-rose-100');
    menuIconSvg.classList.add('stroke-cream');
  }
  
  // Menu toggle button (parent of the SVG)
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.classList.remove('text-rose-100');
    menuToggle.classList.add('text-cream');
  }

  // Icon Change
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = 'assets/icon1.png';
  }
  const iconImage = document.querySelector('a[href="/"] button img');
  if (iconImage) {
    iconImage.src = 'assets/icon1.png';
  }
}

// Light mode function
function light() {
  //Contact Page Icons
  const contactEmail = document.getElementById('contactEmail');
  contactEmail.classList.remove('hover:text-rose-100');
  contactEmail.classList.add('hover:text-blue-100');
  const contactLinked = document.getElementById('contactLinked');
  contactLinked.classList.remove('hover:text-rose-100');
  contactLinked.classList.add('hover:text-blue-100');

  const contactPage = document.getElementById('rounddiv');
  contactPage.classList.add('bg-rose-100');

  const contact = document.getElementById('contact');
  contact.classList.remove('bg-[#20405E]');
  
  document.getElementById('moon-button').classList.add('hidden');
  document.getElementById('sun-button').classList.remove('hidden');

  const shutters = document.querySelectorAll('.shutter');
  shutters.forEach(shutter => {
    shutter.classList.remove('bg-[#20405E]', '-rotate-[4deg]', 'h-[2vh]');
    shutter.classList.add('bg-shutter-gray', '-rotate-[8deg]');
  
    const shutterId = shutter.id;
    if (shutterId === 'shutter6' || shutterId === 'shutter10') {
      shutter.classList.add('h-[9vh]');
    } else {
      shutter.classList.add('h-[8vh]');
    }
  });

  // Shutters container
  const shuttersContainer = document.getElementById('shutters');
  shuttersContainer.classList.remove('from-[#5D80B1]', 'to-[#20405E]/20', 'space-y-[8vh]');
  shuttersContainer.classList.add('from-cream/50', 'to-shutter-gray/20', 'space-y-[2vh]');

  // Gradient
  const gradient = document.getElementById('gradient');
  gradient.classList.remove('via-[#20405E]/10', 'to-[#20405E]/80');
  gradient.classList.add('via-rose-50/10', 'to-rose-50/80');

  // Background
  const background = document.getElementById('background');
  background.classList.remove('bg-[#20405E]');
  background.classList.add('bg-shutter-gray');

  // About
  const about = document.getElementById('about');
  if (about) {
    about.classList.remove('text-cream');
    about.classList.remove('bg-[#20405E]');
    about.classList.add('text-black');
  }


  // Pole
  const pole = document.getElementById('pole');
  pole.classList.remove('bg-[#20405E]');
  pole.classList.add('bg-shutter-gray');

  // Change all text-cream back to text-rose-100 (only for text elements that were changed)
  // Target specific elements: main text, nav buttons, mobile nav, and social links
  const mainText = document.getElementById('main-text');
  if (mainText) {
    mainText.classList.remove('text-cream');
    mainText.classList.add('text-rose-100');
  }

  // All elements that should have rose-100 text (nav buttons, social links, headings)
  // Note: mobile-nav-text is handled separately to stay blue-100
  const textElements = document.querySelectorAll('.nav-text, #main-text a, #main-text h1');
  textElements.forEach(element => {
    element.classList.remove('text-cream');
    element.classList.add('text-rose-100');
  });

  // Restore hover color to blue-100 for social media links in light mode
  const mainTextLinks = document.querySelectorAll('#main-text a');
  mainTextLinks.forEach(link => {
    link.classList.remove('hover:text-rose-100');
    link.classList.add('hover:text-blue-100');
  });

  // Nav background
  const nav = document.getElementById('nav');
  nav.classList.remove('bg-[#20405E]/50');
  nav.classList.add('bg-cream/20');

  // Mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.remove('bg-[#20405E]/95');
    mobileMenu.classList.add('bg-cream/95');
  }

  // Menu backdrop
  const backdrop = document.getElementById('menu-backdrop');
  if (backdrop) {
    backdrop.classList.remove('bg-black/40');
    backdrop.classList.add('bg-black/20');
  }

  // Mobile nav texts
  const mobileNavTexts = document.querySelectorAll('.mobile-nav-text');
  mobileNavTexts.forEach(text => {
    text.classList.remove('text-cream', 'text-blue-100');
    text.classList.add('text-rose-100');
  });

  // Menu close button
  const menuCloseIcon = document.getElementById('menu-close-icon');
  if (menuCloseIcon) {
    menuCloseIcon.classList.remove('stroke-cream', 'stroke-blue-100');
    menuCloseIcon.classList.add('stroke-rose-100');
  }

  // Menu button icon
  const menuIconSvg = document.getElementById('menu-icon-svg');
  if (menuIconSvg) {
    menuIconSvg.classList.remove('stroke-cream');
    menuIconSvg.classList.add('stroke-rose-100');
  }
  
  // Menu toggle button (parent of the SVG)
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.classList.remove('text-cream');
    menuToggle.classList.add('text-rose-100');
  }

  // Icon change
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = 'assets/icon2.png';
  }
  const iconImage = document.querySelector('a[href="/"] button img');
  if (iconImage) {
    iconImage.src = 'assets/icon2.png';
  }


}

// Mobile menu toggle
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const backdrop = document.getElementById('menu-backdrop');
  
  if (mobileMenu && menuIcon && closeIcon) {
    const isOpen = !mobileMenu.classList.contains('translate-x-full');
    
    if (isOpen) {
      // Close menu
      mobileMenu.classList.add('translate-x-full');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      if (backdrop) {
        backdrop.classList.add('hidden');
      }
    } else {
      // Open menu
      mobileMenu.classList.remove('translate-x-full');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      if (backdrop) {
        backdrop.classList.remove('hidden');
      }
    }
  }
}

// Close menu on Escape key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
      toggleMenu();
    }
  }
});

