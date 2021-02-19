import logo from './logo.svg';
import './App.css';
import SubirFotoCG from './components/SubirFotoCG';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import {useState} from 'react';
import SliderCG from './components/CarouselCG';
import ImageGridCG from './components/ImageGridCG';

function App2() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <div className='div-background'>
        <Navbar />
      </div>
      <div className="App">
        <SliderCG />
        <SubirFotoCG />
        <ImageGridCG setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
    </div>
  );
}

export default App2;