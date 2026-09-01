'use client';

import { useEffect } from 'react';

const revealSelectors = [
  '.hero-copy > *',
  '.hero-proof > *',
  '.association-feature > *',
  '.association-menu-heading > *',
  '.association-menu-card',
  '.news-heading > *',
  '.schedule-row',
  '.home-global > *',
  '.home-join > *',
  '.inner-hero-copy > *',
  '.inner-hero-number',
  '.section-label',
  '.section h2',
  '.section article',
  '.section details',
  '.org-map',
  '.org-contact-path > *',
  '.values-section > *',
  '.contact-guide-grid > *',
  '.member-grid > *',
  '.movie-card-grid > *',
  '.contact-section > *:not(.contact-glow)',
  '.footer-brand',
  '.footer-links',
  '.footer-page-links',
  '.footer-bottom',
].join(',');

const mediaSelectors = [
  '.association-menu-image',
  '.home-global-image',
  '.inner-hero-bg',
  '.member-image',
  '.gallery-grid figure',
  '.movie-card-grid > a > div',
  '.message-photo',
].join(',');

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    root.classList.add('motion-ready');

    if (prefersReducedMotion.matches) {
      root.classList.add('motion-reduced');
      return () => {
        root.classList.remove('motion-ready', 'motion-reduced');
      };
    }

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const mediaElements = Array.from(document.querySelectorAll<HTMLElement>(mediaSelectors));
    const animatedElements = [...new Set([...revealElements, ...mediaElements])];
    const siblingOrder = new Map<Element, number>();

    revealElements.forEach((element) => {
      element.classList.add('motion-reveal');
      const parent = element.parentElement;
      const order = parent ? siblingOrder.get(parent) ?? 0 : 0;
      element.style.setProperty('--motion-delay', `${Math.min(order, 5) * 75}ms`);
      if (parent) siblingOrder.set(parent, order + 1);
    });

    mediaElements.forEach((element) => element.classList.add('motion-media'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -7% 0px' },
    );

    animatedElements.forEach((element) => observer.observe(element));

    const progress = document.querySelector<HTMLElement>('.motion-progress');
    const header = document.querySelector<HTMLElement>('.site-header');
    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>('.hero-video, .inner-hero-bg img, .team-call-bg img'),
    );
    let scrollFrame = 0;

    const updateScrollEffects = () => {
      scrollFrame = 0;
      const scrollTop = window.scrollY;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollRange > 0 ? Math.min(scrollTop / scrollRange, 1) : 0;
      progress?.style.setProperty('--motion-progress', `${ratio}`);
      header?.classList.toggle('is-scrolled', scrollTop > 36);

      parallaxTargets.forEach((target) => {
        const parent = target.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        const movement = Math.max(-18, Math.min(18, centerOffset * -0.025));
        target.style.setProperty('--motion-parallax', `${movement.toFixed(2)}px`);
      });
    };

    const handleScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };

    const orb = document.querySelector<HTMLElement>('.motion-orb');
    const handlePointerMove = (event: PointerEvent) => {
      if (!orb || event.pointerType === 'touch') return;
      const target = event.target instanceof Element
        ? event.target.closest('.hero, .inner-hero, .association-portal, .news, .home-global, .contact-section')
        : null;
      orb.classList.toggle('is-active', Boolean(target));
      orb.style.setProperty('--orb-x', `${event.clientX}px`);
      orb.style.setProperty('--orb-y', `${event.clientY}px`);
    };

    const handlePointerLeave = () => orb?.classList.remove('is-active');

    updateScrollEffects();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      observer.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      root.classList.remove('motion-ready');
    };
  }, []);

  return (
    <>
      <span className="motion-curtain" aria-hidden="true" />
      <span className="motion-progress" aria-hidden="true" />
      <span className="motion-orb" aria-hidden="true" />
      <span className="motion-grain" aria-hidden="true" />
    </>
  );
}
