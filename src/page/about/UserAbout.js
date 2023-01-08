import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import FeedCard from '../../component/card/FeedCard'
import ChangeTittle from '../../context/ChangeTittle'
import { UseUser } from '../../context/UseAuth'

function UserAbout() {
  const { user, db_user } = useContext(UseUser)
  const params = useParams()
  const [userById, setUserById] = useState([])
  const [user_post, set_user_post] = useState([])
  const [loader, setLoader] = useState(true)
  const [load_post, set_load_post] = useState(false)
  const [load_more, set_load_more] = useState(6)

  ChangeTittle(`About`)
  useEffect(() => {
    const fetch_fun = async () => {
      const fetch_url = await fetch(
        `${process.env.REACT_APP_URL}/user-get-by-id?id=${params.id}`,
      )
      const response = await fetch_url.json()
      setUserById(response)
    }
    fetch_fun()
  }, [params])

  useEffect(() => {
    const fetch_fun = async () => {
      const fetch_url = await fetch(
        `${process.env.REACT_APP_URL}/post-by-u_id?id=${params?.id}&load_more=${load_more}`,
      )
      const response = await fetch_url.json()
      set_user_post(response)
      set_load_post(!load_post)
      setLoader(false)
    }
    fetch_fun()
  }, [load_more, load_post, params])

  return (
    <div>
      <div className="bg-white font-semibold text-center rounded-3xl  border shadow-lg p-10">
        <img
          className="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
          src={userById?.info?.photoUrl}
          alt="product designer"
        />
        <h1 className="text-lg text-gray-700"> {userById?.name}</h1>
        <h3 className="text-sm text-gray-400">Email: {userById?.email}</h3>
        <h3 className="text-sm text-gray-400">
          University: {userById?.info?.university}
        </h3>
        <h3 className="text-sm text-gray-400">
          Address: {userById?.info?.address}
        </h3>
        <p className="text-xs text-gray-400 mt-4">{userById?.info?.about_me}</p>
        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
          Message me
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-xl text-sky-800 font-semibold">
          {userById.name} post is Here
        </h1>
        <div className="feeds">
          {loader && (
            <div className="flex items-center justify-center mt-5">
              <BarLoader color="#36d7b7" width={'100%'} />
            </div>
          )}

          {user_post?.map((post) => (
            <FeedCard
              key={post._id}
              post={post}
              user={user}
              db_user={db_user}
              set_load_post={set_load_post}
              load_post={load_post}
              comment_show={3}
              shadow="shadow-lg shadow-gray-300"
            />
          ))}
        </div>
        <div className="flex justify-center ">
          {!loader && user_post.length >= load_more && (
            <button
              className="text bg-center bg-blue-600 px-4 py-2 !rounded-md text-white mb-10"
              onClick={() => set_load_more((pre) => pre + 5)}
            >
              See more post
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserAbout
