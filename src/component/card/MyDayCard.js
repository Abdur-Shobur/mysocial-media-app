import React from 'react'
import user from '../../assets/images/user-post6.jpg'

function MyDayCard() {
  return (
    <div className="story" style={{ backgroundImage: `url(${user})` }}>
      <div className="profile-pic">
        <img src={user} alt="" />
      </div>
      <p className="name">Your Story</p>
    </div>
  )
}

export default MyDayCard
