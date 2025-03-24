'use client'
import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export const useInView = (options: UseInViewOptions = {}) => {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, {
      threshold: 0.1,
      ...options
    })

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, isInView] as const
} 