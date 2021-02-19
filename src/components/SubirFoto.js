import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';


const SubirFoto = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const typesAllowed = ['image/png','image/jpeg'];

    const cambioArchivo = (e) =>{
        let selected = e.target.files[0];

        if (selected && typesAllowed.includes(selected.type)){
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Los únicos tipos de imágenes aceptados son PNG y JPEG');
        }
        
    }

    return (
        <form>
            <div className='ma4'>
                <label className='label-subirfoto'>
                    <input className='inputfile' type="file" onChange={cambioArchivo} />
                    <span> <AddPhotoAlternateIcon /> Subir nueva foto</span>
                </label>
            </div>
            <div className='output'>
                {error && <div className='error'>{ error }</div>}
                {file && <div className='filename'>{ file.name }</div>}
                {file && <ProgressBar file = {file} setFile = {setFile} />}
            </div>
        </form>
    )
}

export default SubirFoto;