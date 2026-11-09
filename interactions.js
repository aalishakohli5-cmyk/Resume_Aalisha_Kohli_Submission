(() => {
  const portraitArea = document.querySelector('.portrait-area');
  const portraitFrame = document.querySelector('.portrait-frame');
  const portraitImage = portraitFrame?.querySelector('img');
  const halo = document.querySelector('.portrait-halo');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (portraitArea && portraitFrame && portraitImage && halo && finePointer && !reduceMotion) {
    const resetParallax = () => {
      portraitImage.style.setProperty('--portrait-x', '0px');
      portraitImage.style.setProperty('--portrait-y', '0px');
      portraitFrame.style.setProperty('--frame-x', '0px');
      portraitFrame.style.setProperty('--frame-y', '0px');
      halo.style.setProperty('--halo-x', '0px');
      halo.style.setProperty('--halo-y', '0px');
    };

    portraitArea.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch') return;
      const bounds = portraitArea.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - .5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - .5) * 2));
      portraitImage.style.setProperty('--portrait-x', `${x * 4}px`);
      portraitImage.style.setProperty('--portrait-y', `${y * 4}px`);
      portraitFrame.style.setProperty('--frame-x', `${x * 2}px`);
      portraitFrame.style.setProperty('--frame-y', `${y * 2}px`);
      halo.style.setProperty('--halo-x', `${x * 1}px`);
      halo.style.setProperty('--halo-y', `${y * 1}px`);
    }, { passive: true });
    portraitArea.addEventListener('pointerleave', resetParallax);
  }

  const revealCards = document.querySelectorAll('#education > article, #competitions > article, #projects > article, #skills dl > div, #achievements > article');
  if (!reduceMotion && revealCards.length && 'IntersectionObserver' in window) {
    revealCards.forEach((card, index) => {
      card.classList.add('scroll-preview');
      card.style.setProperty('--preview-delay', `${Math.min(index % 4 * 80, 240)}ms`);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .14, rootMargin: '0px 0px -5% 0px' });
    revealCards.forEach(card => observer.observe(card));
  }
})();
