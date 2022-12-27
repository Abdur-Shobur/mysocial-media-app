import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'

function Nav() {
  const { user, db_user } = useContext(UseUser)

  return (
    <nav>
      <div className="container">
        <h2 className="logo">ChiragSocial</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            className="focus:outline-none px-5 py-2 text-xl"
            placeholder="Search for creators, inspirations and projects"
          />
        </div>
        <div className="create">
          <label className="btn btn-primary" htmlFor="create-post">
            Create
          </label>
          <div className="profile-pic">
            <Link to="about">
              <img src={logo} alt="pic 1" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
