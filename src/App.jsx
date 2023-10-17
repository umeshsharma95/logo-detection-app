import { useState } from 'react';
import MindARViewer from './MindARViewer';
import { Container } from 'reactstrap';
import './App.css'
import CongratsPopup from './CongratsPopup';

function App() {
  const [imageDetected, setImageDetected] = useState(false);

  return (
    <Container className='appContainer'>
      {!imageDetected && <MindARViewer setImageDetected={setImageDetected} />}
      <div>
        <CongratsPopup isOpen={imageDetected} setIsOpen={setImageDetected} />
      </div>
    </Container>
  );
}

export default App;
