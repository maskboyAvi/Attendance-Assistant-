import React, { useRef } from 'react';
import  { useState, useEffect } from 'react';

import './PhotoUpload.css';
import pustyles from './PhotoUpload.module.css';

sessionStorage.setItem("email",'saketh')

var ssitem=sessionStorage.getItem("email");



const PhotoUpload = () => {
  const fileInputRef = useRef(null);
//   const [imgData,setImgData]=useState('');
  const [imid, setimid] = useState('');


  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    
    const formData = new FormData();
    formData.append('file', file);

    fetch(`http://localhost:8080/fileresource/upload/${ssitem}`, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }


  return (
    <div className={pustyles['bo']}>
      <input className='in1' type="file" ref={fileInputRef} /><br></br>
      <input className='in2-portal' type='text'onChange={(event)=>{setimid(event.target.value)}}/>
      <button className={pustyles['btn']} onClick={handleFileUpload}>Upload</button>
      <br></br>
     
    </div>
  );
}
export default PhotoUpload;
