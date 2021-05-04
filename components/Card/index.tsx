import React from 'react'
import Image from 'next/image'

export interface CardProps {
  className?: string
  style?: React.CSSProperties
  title: string
  poster: string
}
const defaultImage =
  'https://m.media-amazon.com/images/M/MV5BMTNkYWU5YjMtMjY2My00MDI4LTlmYzQtNTFkNTFjM2E1MTVlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SY1000_SX677_AL_.jpg'

const Card: React.FC<CardProps> = ({ title, poster, style }) => {
  const handleImageError = (ev: React.BaseSyntheticEvent) => {
    console.log('Evnt', ev)
    ev.target.onerror = null
    //ev.target.src = defaultImage;
  }
  poster = defaultImage
  return (
    poster && (
      <div>
        <Image
          src={poster}
          alt={title}
          width={300}
          height={1000}
          onError={(ev) => handleImageError(ev)}
        />
      </div>
    )
  )
}

export default Card
