import React from 'react'
import userlist from '../../assets/images/userlist-2.jpg'

function Comment() {
  return (
    <li className="flex items-center gap-5 ml-10">
      <div>
        <img src={userlist} className="rounded-full max-w-[48px] w-12" alt="" />
      </div>
      <div>
        <div className="flex items-center gap-3">
          <h1>My Name</h1>
          <span> 1 Yera age</span>
        </div>
        <div>
          <p>
            World's most beautiful car in Curabitur #test drive booking ! the
            most beatuiful car available in america and the saudia arabia, you
            can book your test drive by our official website
          </p>
        </div>
      </div>
    </li>
  )
}

export default Comment
