import React from 'react'

function MyDayCard({ data }) {
  return (
    <div
      className="story h-full"
      style={{ backgroundImage: `url(${data?.day_photo})` }}
    >
      <div className="profile-pic">
        <img src={data?.user_img} alt="" />
      </div>
      <p className="name">{data?.user_name}</p>
    </div>
  )
}

export default MyDayCard
