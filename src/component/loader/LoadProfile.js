import React from 'react'
import style from './LoadProfile.module.css'
function LoadProfile() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img}></div>
        <div className={style.details}>
          <span className={style.name}></span>
          <span className={style.about}></span>
        </div>
      </div>
    </div>
  )
}

export default LoadProfile
