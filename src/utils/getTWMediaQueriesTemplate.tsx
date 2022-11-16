import { stringify } from 'querystring';
import React from 'react'
import useMediaQueries from './getMediaQueries'

// @ts-nocheck

function useTWMediaQueriesTemplate(pageName: string, divName: string) {
  const screenSize = useMediaQueries();
  
  const page3: Record <string, string> = {
        'mobile': 'flex justify-center items-center',
        'sm': ' flex justify-center items-center -mt-40 ',
        'md': ' flex justify-center items-center mt-20 bg-red-500',
        'lg': ' flex justify-center items-center mt-80 ',
        'xl': ' flex justify-center items-center mt-120 ',
        '2xl': ' flex justify-center items-center mt-120 ',
        '3xl': ' flex justify-center items-center mt-96 bg-green-300',
        '4xl': ' flex justify-center items-center mt-40 ',
  }

  const page4: Record <string, string> = {
        'mobile': 'flex flex-col justify-center items-center',
        'sm': ' flex flex-col justify-center items-center  ',
        'md': ' flex flex-col justify-center items-center ',
        'lg': ' flex flex-col justify-center items-center mt-80 ',
        'xl': ' flex flex-col justify-center items-center mt-120 ',
        '2xl': ' flex flex-col justify-center items-center mt-120 ',
        '3xl': ' flex flex-col justify-center items-center mt-96 bg-green-300',
        '4xl': ' flex flex-col justify-center items-center mt-40 ',
  }


  const App: Record<string , typeof page3 > = {
    page3
  }
  
  const twStyles: Record<string, typeof App> = {
    App
  }

  return twStyles[pageName][divName][screenSize]
}

export default useTWMediaQueriesTemplate;




// const appPage3 = 'flex justify-center items-center  sm:-mt-40 md:mt-20 lg:mt-80 xl:mt-120  2xl:mt-120  3xl:mt-96   4xl:mt-40 '
// const appPage4 = 'flex flex-col justify-center items-center lg:mt-140 xl:mt-180 2xl:mt-180  3xl:mt-140   4xl:mt-40  ';
// const appPage5 = 'flex  text-center justify-center items-center  lg:mt-160 bg-blue-300  xl:mt-200 2xl:mt-200  3xl:mt-150 4xl:mt-40 ';
// const appPage6 = 'flex  text-center justify-center items-center  lg:mt-160 bg-blue-300  xl:mt-200 2xl:mt-200  3xl:mt-150 4xl:mt-40 ';
// const appPage7 = 'flex flex-col text-center justify-center items-center mb-0 mt-0 lg:mt-160 xl:mt-240  2xl:mt-250  3xl:mt-200 4xl:mt-40 ';
// const appPage8 = ' 4xl:mt-10  3xl:mt-210 2xl:mt-260  xl:mt-250 lg:mt-180'