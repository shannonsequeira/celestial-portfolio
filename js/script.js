function createStars() {
    // Select all elements with either 'main-content' or 'stars' class
    const containers = document.querySelectorAll(".main-content, .main-content.section, .stars");
    const starCount = 50;
  
    containers.forEach(container => {
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(star);
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", createStars);
  