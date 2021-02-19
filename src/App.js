import logo from './logo.svg';
import './App.css';
import SubirFoto from './components/SubirFoto';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import {useState} from 'react';
import Slider from './components/Carousel';
import { Carousel } from 'bootstrap';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <div className='div-background'>
        <Navbar />
      </div>
      <div className="App">
        <Slider />
        <SubirFoto />
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
    </div>
  );
}

export default App;
