'use client'
import { useEffect, useRef, useState } from 'react'

interface UseOnceInViewOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

export const useOnceInView = (options: UseOnceInViewOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsInView(true)
        setHasAnimated(true)
      }
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
  }, [options, hasAnimated])

  return [ref, isInView] as const
} 