const Image = ({ src, fallback, type = 'image/webp', alt }) => (
  <picture>
    <source srcSet={src} type={type} />
    <img src={fallback} alt={alt} />
  </picture>
)

export default Image