import './App.css'
import Alert from './Components/Alert/Alert'
import {Ban } from 'lucide-react';

function App() {

  return (
    <>
      <div>
    
        <Alert 
        typeAlert='alert-danger' 
        headerIcon={<Ban size={18} />} 
        title={"Something went wrong"} >
          <p>
          Something went wrong
          </p>
        </Alert>
      
        
        
        <Alert 
        typeAlert='alert-success' 
        headerIcon={<Ban size={18} />} 
        title="Something went wrong" 
        discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident, tempore in dicta ab quam itaque voluptatibus magnam laboriosam sit!'
        />
            
        <Alert 
        typeAlert='alert-info' 
        headerIcon={<Ban size={18} />} 
        title="Something went wrong" 
        discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident, tempore in dicta ab quam itaque voluptatibus magnam laboriosam sit!'
        />

        <Alert 
        typeAlert='alert-default' 
        headerIcon={<Ban size={18} />} 
        title="Something went wrong" 
        discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident, tempore in dicta ab quam itaque voluptatibus magnam laboriosam sit!'
        />

        <Alert 
        typeAlert='alert-warning' 
        headerIcon={<Ban size={18} />} 
        title="Something went wrong" 
        discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia provident, tempore in dicta ab quam itaque voluptatibus magnam laboriosam sit!'
        />
        </div>

    </>
  )
}

export default App
