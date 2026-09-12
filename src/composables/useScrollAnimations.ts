import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let isInitialized = false

export function useScrollAnimations() {
  if (typeof window !== 'undefined' && !isInitialized) {
    gsap.registerPlugin(ScrollTrigger)
    isInitialized = true
  }

  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  /**
   * Fade and slide reveal on element entry
   */
  const revealOnScroll = (
    target: HTMLElement | string,
    options: {
      y?: number
      duration?: number
      delay?: number
      start?: string
      stagger?: number
    } = {}
  ) => {
    if (prefersReducedMotion()) {
      return gsap.fromTo(
        target,
        { opacity: 0 },
        {
          opacity: 1,
          duration: options.duration || 0.6,
          delay: options.delay || 0,
          scrollTrigger: {
            trigger: target,
            start: options.start || 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      )
    }

    return gsap.fromTo(
      target,
      {
        opacity: 0,
        y: options.y ?? 40
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: 'power3.out',
        stagger: options.stagger,
        scrollTrigger: {
          trigger: target,
          start: options.start || 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  }

  /**
   * Refresh all scroll triggers after DOM changes
   */
  const refreshScrollTriggers = () => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.refresh()
    }
  }

  return {
    gsap,
    ScrollTrigger,
    prefersReducedMotion,
    revealOnScroll,
    refreshScrollTriggers
  }
}
