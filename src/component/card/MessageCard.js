import React from 'react'

function MessageCard() {
  return (
    <div className="message">
      <div className="profile-pic">
        <img src="https://i.ibb.co/yVKm1rw/dymmy-img.png" alt="d" />
        <div className="active"></div>
      </div>
      <div className="message-body">
        <h5>New test user</h5>
        <p className="text-bold">3 New Messages</p>
      </div>
    </div>
  )
}

export default MessageCard
