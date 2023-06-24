import React from 'react'

const Service = ({title, desc, flag, flagDesc, flagUrl,icon}) => {
  return (
    <div class="small-box">
                <div class="service-icon">
                    <i class={icon}></i>
                </div>
                <div>
                    <h3 class="service-title">{title}</h3>
                    <p class="service-text">
                        {desc}
                    </p>
                </div>
                {flag && (<a class="read-more" href={flagUrl} target="_blank">{flagDesc}
                    <span class="arrow">
                        <i class="ri-arrow-right-line"></i>
                    </span></a>)}
    </div>
  )
}

export default Service