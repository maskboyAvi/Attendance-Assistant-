import React, { useRef } from 'react';
import  { useState, useEffect } from 'react';

import './PhotoUpload.css';

const PhotoUpload = () => {
  const fileInputRef = useRef(null);
//   const [imgData,setImgData]=useState('');
  const [imid, setimid] = useState('');


  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8080/fileresource/upload/'+imid, {
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
    <div id='bo'>
      <input id='in1' type="file" ref={fileInputRef} /><br></br>
      <input className='in2-portal' type='text'onChange={(event)=>{setimid(event.target.value)}}/>
      <button id='btn' onClick={handleFileUpload}>Upload</button>
      <br></br>
     
    </div>
  );
}
export default PhotoUpload;
