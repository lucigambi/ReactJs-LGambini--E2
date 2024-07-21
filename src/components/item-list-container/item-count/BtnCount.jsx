import '../../button-common/Button.css'

const BtnCount = ({ texto, fn }) => {

  return (
    <button className="btn" onClick={() => fn()} > {texto} </button>
  )
}

export default BtnCount