import React from 'react'
import { Overlay } from './styles'

export const OverlayLayout = ({ children, isVisible }) => {
  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isVisible])

  return isVisible ? <Overlay>{children}</Overlay> : <>{children}</>
}
