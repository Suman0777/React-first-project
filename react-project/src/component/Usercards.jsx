import './usercard.css'
import namew from  '../assets/react.svg'
export const Usercards = (props) => {
  return (
    <div id='first' >
        
        <img src= {namew} id='user-img' alt="img" />
        <h2>{props.name}</h2>
        <p>This is my First React project</p>

    </div>
  )
}
export default Usercards