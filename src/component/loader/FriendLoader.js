import React from 'react'
import style from './FriendLoader.module.css'
function FriendLoader() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img}></div>
      </div>
      <div className={style.btns}>
        <div className={`${style.btn} ${style.btn_1}`}></div>
        <div className={`${style.btn} ${style.btn_2}`}></div>
      </div>
    </div>
  )
}

export default FriendLoader
