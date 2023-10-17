import { useState } from 'react';
import MindARViewer from './MindARViewer';
import { Container } from 'reactstrap';
import './App.css'
import CongratsPopup from './CongratsPopup';

function App() {
  const [imageDetected, setImageDetected] = useState(false);

  return (
    <div className='appContainer'>
      {!imageDetected && <MindARViewer setImageDetected={setImageDetected} />}
      <div>
        <CongratsPopup isOpen={imageDetected} setIsOpen={setImageDetected} />
      </div>
    </div>
  );
}

export default App;
