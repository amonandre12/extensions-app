// The toggle component 
import '../styles/MyToggle.css'

function MyToggle({active , onToggle}) {

  return (
    <>
    <div className='switch-container' onClick={onToggle}>
      <div className={`switch ${active ? 'active' : ''}`}>
      <div className='thumb'></div> 
     </div>
    </div>
    </>
  )
}
export default MyToggle