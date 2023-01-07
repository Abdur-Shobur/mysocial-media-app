import React from 'react'
import { toast } from 'react-toastify'

function FriendReqCard({ user, text, ul_text, db_user }) {
  const { _id, info, name } = user
  const add_friend_handler = (id) => {
    const all_data = {
      user_id: db_user?._id,
      user_name: db_user?.name,
      user_photo: db_user?.info.photoUrl,
    }

    const fetch_func = async () => {
      const fetch_url = await fetch(
        `${process.env.REACT_APP_URL}/user-add-friends?id=${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(all_data),
        },
      )
      const response = await fetch_url.json()
    }
    toast.error('Not Completed Yet', {
      autoClose: 300,
      draggable: true,
      position: 'top-center',
    })
    // fetch_func()
  }
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
        <button
          onClick={() => add_friend_handler(_id)}
          className="btn btn-primary"
        >
          {text}
        </button>
        <button
          onClick={() => add_friend_handler()}
          className="btn text-rose-50 bg-red-600"
        >
          {ul_text}
        </button>
      </div>
    </div>
  )
}

export default FriendReqCard
