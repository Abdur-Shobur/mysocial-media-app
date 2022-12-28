import React, { useContext, useEffect, useState } from 'react'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'
import PostMoreSection from '../home/PostMoreSection'

function Media() {
  const [post, set_post] = useState([])
  const [load_post, set_load_post] = useState(false)
  const { user, db_user } = useContext(UseUser)

  useEffect(() => {
    fetch(`https://end-game-server-abdur-shobur.vercel.app/post`)
      .then((res) => res.json())
      .then((data) => {
        set_post(data)
      })
      .catch((err) => console.log(err))
  }, [load_post])
  return (
    <div className="feeds">
      {post?.map((post) => (
        <FeedCard
          key={post._id}
          post={post}
          media="media"
          set_load_post={set_load_post}
          load_post={load_post}
          user={user}
          db_user={db_user}
        />
      ))}
    </div>
  )
}

export default Media
