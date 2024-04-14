import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Slider from '../../components/Slider'

import { useProducts } from '../../context'

export function Home() {
  const [headerClassName, setHeaderClassName] =
    useState<string>('headerMouseOff')
  const { isTabAreaActive } = useProducts()

  function handleMouseOver() {
    setHeaderClassName('headerMouseOn')
  }
  function handleMouseOut() {
    setHeaderClassName('headerMouseOff')
  }
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderClassName('headerMouseOn')
    } else if (isTabAreaActive === false) {
      setHeaderClassName('headerMouseOff')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTabAreaActive])

  return (
    <div>
      <Header
        headerClassName={headerClassName}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      <Slider />
    </div>
  )
}
