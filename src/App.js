import './App.css';
import SubirFoto from './components/SubirFoto';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import {useState} from 'react';
import Slider from './components/Carousel';
import { Helmet } from 'react-helmet';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const TITLE = 'PHOTOPEEK SPRAYPAINT'
  return (
    <div>
      <div className='div-background'>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <Navbar />
      </div>
      <div className="App">
        <Slider />
        {/* <SubirFoto /> */}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
    </div>
  );
}

export default App;
