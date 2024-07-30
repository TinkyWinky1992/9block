import { useEffect, useState } from 'react'
import { BlockSecuritygame } from './Components'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log(event.data)
    
        const { action } = event.data;
      
        console.log('Received message action:', event.data); 
  
        setIsOpen(action);

  

    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []); 

  return (
    <>
      {isOpen && (
        <div className='App'>
          <BlockSecuritygame />
        </div>
      )}
    </>
  );
}
  

export default App
