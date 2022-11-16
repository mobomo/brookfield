import React, { useState, useEffect } from 'react'
import debounce from "lodash.debounce";



function GetScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);
  return (
    <div>getScrollPosition</div>
  )
}

export default GetScrollPosition