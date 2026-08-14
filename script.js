const menu = document.getElementById('menu');
    const navLinks = document.getElementById('navLinks');
    menu.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.getElementById('year').textContent = new Date().getFullYear();
