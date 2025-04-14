// Використовуємо Intersection Observer для спостереження за видимістю кожного екрану
    const screens = document.querySelectorAll('.screen');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5  // Анімацію запускаємо, коли 50% екрана у полі зору
    });

    screens.forEach(screen => observer.observe(screen));