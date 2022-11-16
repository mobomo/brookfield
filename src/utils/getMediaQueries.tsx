import { useState, useEffect } from 'react';
import useWindowDimensions from './getWindowDimensions'


function useMediaQueries() {
  const { width, height } = useWindowDimensions()

  const screenSizes = {
    mobile: 320,
    mobileH1: 320,
    mobileH2: 480,
    mobileH3: 640,
    sm: 640,
    smH1: 320,
    smH2: 480,
    smH3: 900,
    md: 768,
    mdH1: 320,
    mdH2: 600,
    mdH3: 900,
    lg: 1024,
    lgH1: 600,
    lgH2: 900,
    lgH3: 1200,
    xl: 1280,
    xlH1: 600,
    xlH2: 900,
    xlH3: 1200,
    '2xl': 1536,
    '2xlH1': 600,
    '2xlH2': 900,
    '2xlH3': 1200,
    '3xl': 1792,
    '3xlH1': 600,
    '3xlH2': 960,
    '3xlH3': 1280,
    '4xl': 2048,
    '4xlH1': 600,
    '4xlH2': 960,
    '4xlH3': 1330,

  }

  const [screenSize, setScreenSize] = useState('sm')
  const [screenSizeH, setScreenSizeH] = useState('smH1')


  useEffect(() => {
    if (width >= screenSizes['4xl']) {
      setScreenSize('4xl')
      if(height >= screenSizes['4xlH3']) {
        setScreenSizeH('4xlH3')
      }
      else if (height >= screenSizes['4xlH2']) {
        setScreenSizeH('4xlH2')
      }
      else if (height >= screenSizes['4xlH1']) {
        setScreenSizeH('4xlH1')
      }
    } else if (width >= screenSizes['3xl']) {
      setScreenSize('3xl')
      if (height >= screenSizes['3xlH3']) {
        setScreenSizeH('3xlH3')
      }
      else if (height >= screenSizes['3xlH2']) {
        setScreenSizeH('3xlH2')
      }
      else if (height >= screenSizes['3xlH1']) {
        setScreenSizeH('3xlH1')
      }
    } else if (width >= screenSizes['2xl']) {
      setScreenSize('2xl')
      if (height >= screenSizes['2xlH3']) {
        setScreenSizeH('2xlH3')
      }
      else if (height >= screenSizes['2xlH2']) {
        setScreenSizeH('2xlH2')
      }
      else if (height >= screenSizes['2xlH1']) {
        setScreenSizeH('2xlH1')
      }
    } else if (width >= screenSizes.xl) {
      setScreenSize('xl')
      if (height >= screenSizes['xlH3']) {
        setScreenSizeH('xlH3')
      }
      else if (height >= screenSizes['xlH2']) {
        setScreenSizeH('xlH2')
      }
      else if (height >= screenSizes['xlH1']) {
        setScreenSizeH('xlH1')
      }
    } else if (width >= screenSizes.lg) {
      setScreenSize('lg')
      if (height >= screenSizes['lgH3']) {
        setScreenSizeH('lgH3')
      }
      else if (height >= screenSizes['lgH2']) {
        setScreenSizeH('lgH2')
      }
      else if (height >= screenSizes['lgH1']) {
        setScreenSizeH('lgH1')
      }
    } else if (width >= screenSizes.md) {
      setScreenSize('md')
      if (height >= screenSizes['mdH3']) {
        setScreenSizeH('mdH3')
      }
      else if (height >= screenSizes['mdH2']) {
        setScreenSizeH('mdH2')
      }
      else if (height >= screenSizes['mdH1']) {
        setScreenSizeH('mdH1')
      }
    } else if (width >= screenSizes.sm) {
      setScreenSize('sm')
      if (height >= screenSizes['smH3']) {
        setScreenSizeH('smH3')
      }
      else if (height >= screenSizes['smH2']) {
        setScreenSizeH('smH2')
      }
      else if (height >= screenSizes['smH1']) {
        setScreenSizeH('smH1')
      }
    } else if (width >= screenSizes.mobile) {
      setScreenSize('mobile')
      if (height >= screenSizes['mobileH3']) {
        setScreenSizeH('mobileH3')
      }
      else if (height >= screenSizes['mobileH2']) {
        setScreenSizeH('mobileH2')
      }
      else if (height >= screenSizes['mobileH1']) {
        setScreenSizeH('mobileH1')
      }
    }
  }, [width, height])

  return {
    screenSize: screenSize as keyof typeof screenSizes,
    screenSizeH: screenSizeH as keyof typeof screenSizes
  };
}

export default useMediaQueries