import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to initialize GSAP scroll-triggered animations and page transitions.
 * Automatically scans elements and registers clean, smooth, non-intrusive entrance effects.
 */
export const useGsapScroll = (pageDependency?: any) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    // Reset & refresh ScrollTrigger when page switches
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearMatchMedia();

    const ctx = gsap.context(() => {
      // 1. Page hero entrance animation
      const heroHeadings = document.querySelectorAll('h1');
      if (heroHeadings.length > 0) {
        gsap.fromTo(
          heroHeadings,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
          }
        );
      }

      // 2. Animate all main sections as they scroll into view
      const sections = document.querySelectorAll('section');
      sections.forEach((sec, idx) => {
        // Skip the very top hero from heavy scroll delays to avoid flash
        if (idx === 0) return;

        gsap.fromTo(
          sec,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Stagger card grids (e.g. mentor cards, service items, resource cards, program tracks)
      const cardContainers = document.querySelectorAll(
        '.whats-next-grid, .mentor-hero-grid, #mentors-grid > div > div, .service-row, .template-card-item'
      );

      cardContainers.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Subtle scale entrance on booking forms & hero cards
      const floatingCards = document.querySelectorAll(
        '.featured-event-card, form, .about-hero-grid > div:last-child, .services-hero-grid > div:last-child, .programs-hero-grid > div:last-child, .resources-hero-grid > div:last-child'
      );

      floatingCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.96,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    // Refresh after layout settling
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [pageDependency]);

  return containerRef;
};

export { gsap, ScrollTrigger };
