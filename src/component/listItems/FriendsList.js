import React from 'react'
import user from '../../assets/images/userlist-2.jpg'

function FriendsList() {
  return (
    <li className="flex items-center gap-3 my-3">
      <div>
        <img src={user} alt="" className="rounded-full" />
      </div>
      <div>
        <h1>My Name</h1>
        <button className="text-xs">Message</button>
      </div>
    </li>
  )
}

export default FriendsList
