import './Button.css'

const Button = ({ texto, color }) => {
  return (
    <button className={color}>{texto}</button>
  )
}

export default Button