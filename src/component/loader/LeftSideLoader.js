import React from 'react'
import style from './LeftSide.module.css'
function LeftSideLoader() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img}></div>
        <div className={style.img}></div>
        <div className={style.img}></div>
        <div className={style.img}></div>
      </div>
    </div>
  )
}

export default LeftSideLoader
