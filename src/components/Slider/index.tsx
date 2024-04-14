import React, { useEffect, useState } from 'react'
import { PageContainer, SliderImg, HeaderCards } from './styles'
import axios from 'axios'

interface SliderImage {
  id: string
  activeSlider: boolean
  image: string
  link: string
}

export default function Slider() {
  const [sliderImage, setSliderImage] = useState<SliderImage[]>([])
  const [activeItem, setActiveItem] = useState<SliderImage | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/slider')
        setSliderImage(response.data)
      } catch (error) {
        console.error('Erro ao buscar imagens do slider:', error)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const foundActiveItem = sliderImage.find((item) => item.activeSlider)
    setActiveItem(foundActiveItem || null)
  }, [sliderImage])

  return (
    <PageContainer>
      {activeItem && (
        <SliderImg key={activeItem.id} alt="" src={activeItem.image} />
      )}
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
      <HeaderCards>oi</HeaderCards>
    </PageContainer>
  )
}
