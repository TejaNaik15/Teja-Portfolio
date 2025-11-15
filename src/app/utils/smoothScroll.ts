// Cross-browser smooth scrolling utility
export const smoothScrollTo = (element: HTMLElement | null) => {
  if (!element) return;

  // Check if browser supports smooth scrolling
  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  if (supportsNativeSmoothScroll) {
    // Use native smooth scrolling
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  } else {
    // Fallback for browsers that don't support smooth scrolling
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms duration
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
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