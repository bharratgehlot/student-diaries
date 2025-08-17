import './problematic.css'
import logo from '../assets/logo.png'

function Problematic() {
  return (
    <div>
      <img src={logo} alt='logo' className='logo'/>
      <p>This is problematic App</p>

      <form>
      <label>Add Problem
        <input type="text" /> </label>

      <button type='submit'>
        Add
      </button>
      
      </form>
    </div>
    
  )
}

export default Problematic