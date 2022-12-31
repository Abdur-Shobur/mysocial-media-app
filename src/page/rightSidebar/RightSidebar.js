import React from 'react'
import MessageCard from '../../component/card/MessageCard'

function RightSidebar() {
  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <span>
            <i className="uil uil-edit"></i>
          </span>
        </div>

        <div className="search-bar">
          <span>
            <i className="uil uil-search"></i>
          </span>
          <input
            type="search"
            className="focus:outline-none px-5 py-1 text-lg"
            placeholder="Search Messages"
            id="message-search"
          />
        </div>

        <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Requests(7)</h6>
        </div>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div className="friend-requests ">
        <h4>Requests</h4>
        <div className="flex flex-col gap-2">
          <div className="request">
            <div className="info">
              <div className="profile-pic">
                <img src="https://i.ibb.co/yVKm1rw/dymmy-img.png" alt="d" />
              </div>
              <div>
                <h5 className="capitalize">Jhone Doe</h5>
                <p className="text-muted">1 mutual friend</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Add Friend</button>
              <button className="btn text-rose-50 bg-red-600">Remove</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pic">
                <img src="https://i.ibb.co/yVKm1rw/dymmy-img.png" alt="d" />
              </div>
              <div>
                <h5 className="capitalize">Jhone Doe</h5>
                <p className="text-muted">1 mutual friend</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Add Friend</button>
              <button className="btn text-rose-50 bg-red-600">Remove</button>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pic">
                <img src="https://i.ibb.co/yVKm1rw/dymmy-img.png" alt="d" />
              </div>
              <div>
                <h5 className="capitalize">Jhone Doe</h5>
                <p className="text-muted">1 mutual friend</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn-primary">Add Friend</button>
              <button className="btn text-rose-50 bg-red-600">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
