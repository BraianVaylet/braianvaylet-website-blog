import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ReactChild } from 'react'

interface ReactResponsiveCarouselProps {
  children: ReactChild[]
}

const ReactResponsiveCarousel = ({ children }: ReactResponsiveCarouselProps) => {
  return (
    <Carousel>
      {children}
    </Carousel>
  )
}

export default ReactResponsiveCarousel
