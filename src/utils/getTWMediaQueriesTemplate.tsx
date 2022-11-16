import { stringify } from 'querystring';
import React from 'react'
import useMediaQueries from './getMediaQueries'
import { twStyles } from './tailwindStyles'

function useTWMediaQueriesTemplate(pageName: string, divName: string) {
  const screenSize = useMediaQueries();
  
  return twStyles[pageName][divName][screenSize]
}

export default useTWMediaQueriesTemplate;




