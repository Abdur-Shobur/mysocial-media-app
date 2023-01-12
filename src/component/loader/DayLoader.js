import React from 'react'
import style from './DayLoader.module.css'
function DayLoader() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img}></div>
        <div className={style.img}></div>
        <div className={style.img}></div>
        <div className={style.img}></div>
        <div className={style.img}></div>
      </div>
    </div>
  )
}

export default DayLoader
