import { stringify } from 'querystring';
import React from 'react'
import useMediaQueries from './getMediaQueries'
import { twStyles } from './tailwindStyles'

function useTWMediaQueriesTemplate(pageName: string, divName: string) {
  const {screenSize, screenSizeH} = useMediaQueries();
  
  return {
    santard: twStyles[pageName][divName][screenSize],
    plusHeight: twStyles[pageName][divName][screenSizeH],
  };
}

export default useTWMediaQueriesTemplate;




