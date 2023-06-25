import React from 'react'
import ser from './home.module.css'
const Service = ({title, desc, flag, flagDesc, flagUrl,icon}) => {
  return (
    <div className={ser["small-box"]}>
                <div className={ser["service-icon"]}>
                    <i className={icon}></i>
                </div>
                <div>
                    <h3 className={ser["service-title"]}>{title}</h3>
                    <p className={ser["service-text"]}>
                        {desc}
                    </p>
                </div>
                {flag && (<a className={ser["read-more"]} href={flagUrl} target="_blank">{flagDesc}
                    <span className={ser["arrow"]}>
                        <i className={ser["ri-arrow-right-line"]}></i>
                    </span></a>)}
    </div>
  )
}

export default Service