// 'use client';
import { Button } from './ui/button'


import '../styles/NavigationButton.css'

const title = 'Extensions List'

function Navigation({filterButton , setFilterButton}) {
  // On garde le nom du bouton actif (All, Active, Inactive)

  return (
  <div>
    
    <section className="navbar-section">
     
      
      <h1>{title}</h1>

      <div className="navbar_btn">
        
          
            <Button
              variant="outline"
              onClick={() => setFilterButton('All')}
              className={filterButton === 'All' ? 'active' : ''}
            >
              All
            </Button>

          
            <Button
              variant="outline"
              onClick={() => setFilterButton('Active')}
              className={filterButton === 'Active' ? 'active' : ''}
            >
              Active
            </Button>
          

        
            <Button
              variant="outline"
              onClick={() => setFilterButton('Inactive')}
              className={filterButton === 'Inactive' ? 'active' : ''}
            >
              Inactive
            </Button>
          
      </div>
    </section>
  </div>
  )
}

export default Navigation
