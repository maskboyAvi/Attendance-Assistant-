import React from 'react'

const AbtCard = ({name,fullName,role,desc,mail}) => {
  return (
    <div class="column-abt2">
        <div class="card-abt2">
          <img src={`./Main/${name}.jpeg`} alt={name} style={{width:"100%"}}/>
          <div class="container-abt2">
            <h2>{fullName}</h2>
            <p class="title-abt2">{role}</p>
            <p>{desc}</p>
            <p>{mail}</p>
          </div>
        </div>
      </div>
  )
}

export default AbtCard