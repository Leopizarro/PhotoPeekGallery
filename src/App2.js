import './App.css';
import SubirFotoCG from './components/SubirFotoCG';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import {useState} from 'react';
import SliderCG from './components/CarouselCG';
import ImageGridCG from './components/ImageGridCG';
import { Helmet } from 'react-helmet';

function App2() {
  const [selectedImg, setSelectedImg] = useState(null);
  const TITLE = 'PHOTOPEEK CELLPHONE PHOTOS'
  return (
    <div>
      <div className='div-background'>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <Navbar />
      </div>
      <div className="App">
        <SliderCG />
        {/* <SubirFotoCG /> */}
        <ImageGridCG setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
    </div>
  );
}

export default App2;