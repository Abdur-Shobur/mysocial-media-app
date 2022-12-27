import React, { useContext } from 'react'
import user from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'
function About() {
  const { user, db_user } = useContext(UseUser)

  return (
    <div className="">
      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">37</h1>
              <h1 className="text-stone-600 text-sm">Friends</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">23</h1>
              <h1 className="text-stone-600 text-sm">Photo</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">64</h1>
              <h1 className="text-stone-600 text-sm">Comments</h1>
            </div>
          </div>
          <div>
            <button className="bg-[#6b4ce6] px-4 py-2 text-white rounded-md">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={user} alt="" className="w-36 rounded-full" />
        </div>
        <h1 className="text-center text-2xl mt-5">
          Name: {user && db_user?.name}
        </h1>
        <h1 className="text-center text-2xl mt-5">
          Email: {user && db_user?.email}
        </h1>
        <h1 className="text-center text-2xl mt-5">University: bu</h1>
        <h1 className="text-center text-2xl mt-5">Address: Dhaka Bangladesh</h1>
        <h1 className="text-2xl mt-5 underline">About Me: </h1>
        <p className="text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          itaque.{' '}
        </p>
      </div>
    </div>
  )
}

export default About
