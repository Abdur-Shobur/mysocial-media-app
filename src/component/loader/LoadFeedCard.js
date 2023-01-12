import React from 'react'
import style from './LoadFeedCard.module.css'
function LoadFeedCard() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img}></div>
        <div className={style.details}>
          <span className={style.name}></span>
          <span className={style.about}></span>
        </div>
      </div>
      <div className={style.description}>
        <div className={`${style.line}  ${style.line_4}`}></div>
      </div>
      <div className={style.description}>
        <div className={`${style.line}  ${style.line_1}`}></div>
        <div className={`${style.line}  ${style.line_2}`}></div>
        <div className={`${style.line}  ${style.line_3}`}></div>
      </div>
      <div className={style.btns}>
        <div className={`${style.btn}  ${style.btn_1}`}></div>
      </div>
    </div>
  )
}

export default LoadFeedCard
