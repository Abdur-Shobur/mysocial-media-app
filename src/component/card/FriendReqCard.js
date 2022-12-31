import React from 'react'

function FriendReqCard({ user, text, ul_text, add_handler }) {
  const { _id, info, name } = user
  return (
    <div className="request">
      <div className="info">
        <div className="profile-pic">
          <img src={info.photoUrl} alt="d" />
        </div>
        <div>
          <h5 className="capitalize">{name}</h5>
          <p className="text-muted">1 mutual friend</p>
        </div>
      </div>
      <div className="action">
        <button onClick={() => add_handler(_id)} className="btn btn-primary">
          {text}
        </button>
        <button className="btn text-rose-50 bg-red-600">{ul_text}</button>
      </div>
    </div>
  )
}

export default FriendReqCard
