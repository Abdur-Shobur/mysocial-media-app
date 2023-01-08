import React, { useState } from 'react'
import { BiImages } from 'react-icons/bi'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'

function CreatePost({ user, db_user, set_load_post }) {
  const [loading, setLoading] = useState(false)
  const post_form_handler = async (e) => {
    setLoading(true)
    e.preventDefault()
    const post_text = e.target.post.value
    if (post_text.length < 3) {
      setLoading(false)
      return toast.error('Minimum add 3 char', {
        position: 'top-center',
        autoClose: 200,
        closeOnClick: true,
        draggable: true,
      })
    }
    let formData = new FormData()
    const post_image = e.target.image
    formData.append('image', post_image.files[0])

    let milliseconds = new Date().getTime()
    try {
      const fetch_url = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB}`,
        {
          method: 'POST',
          'Content-Type': 'application/json',
          body: formData,
        },
      )
      const response = await fetch_url.json()

      if (response.success) {
        const all_data = {
          post_text,
          post_url: response.data.url,
          user_id: db_user?._id,
          user_name: db_user?.name,
          user_image: db_user?.info?.photoUrl,
          post_react: {
            like: Math.floor(Math.random() * 10) + 1,
            comment: Math.floor(Math.random() * 10) + 1,
            share: Math.floor(Math.random() * 10) + 1,
          },
          post_time: milliseconds,
        }

        const post_db = async () => {
          const fetch_url = await fetch(
            `https://end-game-server-abdur-shobur.vercel.app/post`,
            {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(all_data),
            },
          )
          const response = await fetch_url.json()
          set_load_post(true)
          setLoading(false)
          toast.success('Your Post is Live', {
            position: 'bottom-left',
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            theme: 'light',
          })
        }
        post_db()
      } else {
        setLoading(false)
        toast.error('Image is not uploaded', {
          position: 'bottom-left',
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
        })
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
    e.target.reset()
  }
  return (
    <form className="create-post" onSubmit={post_form_handler}>
      <div className="profile-pic">
        <img src="images/profile-8.jpg" alt="" />
      </div>
      <input
        type="text"
        name="post"
        className="focus:outline-none px-5 py-2 text-xl"
        placeholder={`What's on your mind ${db_user?.name}?`}
        id="create-post"
      />
      <label htmlFor="icon-button-file">
        <BiImages
          color="primary"
          aria-label="upload picture"
          component="span"
          className="text-3xl mr-2 cursor-pointer"
        />
      </label>
      <input
        // accept="image/*"
        name="image"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
      />

      <button
        type="submit"
        disabled={!user}
        className="btn btn-primary !flex justify-center items-center "
      >
        {loading ? (
          <BeatLoader color="#ffffff" size={5} className="inline-block py-2" />
        ) : (
          'Post'
        )}
      </button>
      {/* <input
        type="submit"
        disabled={!user}
        value={loading ? <BeatLoader color="#36d7b7" /> : 'Post'}
        className="btn btn-primary"
      /> */}
    </form>
  )
}

export default CreatePost
