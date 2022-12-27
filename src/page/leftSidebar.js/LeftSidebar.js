import React, { useContext } from 'react'
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineUserAdd,
} from 'react-icons/ai'
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi'
import { BiLogOutCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import user from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'
const nav_items = [
  {
    path: '/',
    nav_item: 'Home',
    icon: <AiOutlineHome className="i" />,
  },
  {
    path: 'media',
    nav_item: 'Media',
    icon: <TfiLayoutMediaLeftAlt className="i" />,
  },
  {
    path: 'about',
    nav_item: 'About',
    icon: <AiOutlineUser className="i" />,
  },
  {
    path: 'login',
    nav_item: 'Login',
    icon: <AiOutlineLogin className="i" />,
  },
  {
    path: 'sign-up',
    nav_item: 'Sign Up',
    icon: <AiOutlineUserAdd className="i" />,
  },
]
function LeftSidebar() {
  const { log_out } = useContext(UseUser)
  const sign_out_btn = () => {
    log_out()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <div className="left">
      <div className="!bg-white p-4 rounded-xl">
        <Link to="about" className="flex gap-5">
          <div className="profile-pic">
            <img src={user} alt="user" />
          </div>
          <div className="handle">
            <h4>Chirag</h4>
            <p className="text-muted">@chirag</p>
          </div>
        </Link>
      </div>
      <div className="sidebar">
        {nav_items.map((e, i) => (
          <Link key={i} to={e.path} className="menu-item ">
            <span>{e.icon}</span>
            <h3>{e.nav_item}</h3>
          </Link>
        ))}
        <button
          onClick={sign_out_btn}
          className="menu-item w-full gap-5 text-red-600 "
        >
          <BiLogOutCircle className="ml-7 text-2xl text-red-600" />
          Log out
        </button>
        <label className="btn btn-primary" htmlFor="create-post">
          Create Post
        </label>
      </div>
    </div>
  )
}

export default LeftSidebar
