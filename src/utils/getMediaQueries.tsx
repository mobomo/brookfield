import { useState, useEffect } from 'react';
import useWindowDimensions from './getWindowDimensions'


function useMediaQueries() {
  const { width, height } = useWindowDimensions()

  const screenSizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1792,
    '4xl': 2048,
  }

  const [screenSize, setScreenSize] = useState('sm')

  useEffect(() => {
    if (width >= screenSizes['4xl']) {
      setScreenSize('4xl')
    } else if (width >= screenSizes['3xl']) {
      setScreenSize('3xl')
    } else if (width >= screenSizes['2xl']) {
      setScreenSize('2xl')
    } else if (width >= screenSizes.xl) {
      setScreenSize('xl')
    } else if (width >= screenSizes.lg) {
      setScreenSize('lg')
    } else if (width >= screenSizes.md) {
      setScreenSize('md')
    } else if (width >= screenSizes.sm) {
      setScreenSize('sm')
    }
  }, [width])

  return screenSize as keyof typeof screenSizes
}

export default useMediaQueries