
export const smoothScrollTo = (element: HTMLElement | null) => {
  if (!element) return;

  
  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  if (supportsNativeSmoothScroll) {
    
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  } else {
    
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; 
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      
      const ease = percentage < 0.5 
        ? 2 * percentage * percentage 
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
};
