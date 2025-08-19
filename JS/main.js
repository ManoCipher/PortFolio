// Navbar shrink on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  
  // ✅ Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  
  // Typing effect
  const typingText = document.querySelector(".typing-text");
  const roles = ["Electronics Engineer", "Aspiring Data Scientist", "Antenna Designer", "Space Enthusiast"];
  let roleIndex = 0;
  let charIndex = 0;
  
  function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
      typingText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }
  
  function eraseEffect() {
    if (charIndex > 0) {
      typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
  });
  
  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");
  
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  }
  
  window.addEventListener("scroll", revealSections);
  window.addEventListener("load", revealSections);
  
  