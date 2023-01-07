import React, { useContext, useEffect, useState } from 'react'
import FriendReqCard from '../../component/card/FriendReqCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { UseUser } from '../../context/UseAuth'
import { BarLoader } from 'react-spinners'

function Peoples() {
  const { db_user } = useContext(UseUser)
  const [all_user, set_all_user] = useState([])
  const [loader, setLoader] = useState(true)
  const [load_more, set_load_more] = useState(16)

  useEffect(() => {
    const fetch_func = async () => {
      const fetch_url = await fetch(
        `https://end-game-server-abdur-shobur.vercel.app/user?limit=${load_more}`,
      )
      const response = await fetch_url.json()
      set_all_user(response)
      setLoader(false)
    }
    fetch_func()
  }, [load_more])

  const add_friend_handler = (id) => {
    const all_data = {
      user_id: db_user?._id,
      user_name: db_user?.name,
      user_photo: db_user?.info.photoUrl,
    }
    const fetch_func = async () => {
      const fetch_url = await fetch(
        `https://end-game-server-abdur-shobur.vercel.app/user-add-friends?id=${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(all_data),
        },
      )
      const response = await fetch_url.json()
    }
    fetch_func()
  }
  return (
    <div className="">
      <Tabs>
        <TabList className="grid grid-cols-4 gap-1 mb-5 sticky top-16">
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="md:text-lg text-sm sm:text-base ">Suggestions</h4>
            </button>
          </Tab>
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="md:text-lg text-sm sm:text-base ">Friends</h4>
            </button>
          </Tab>
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="md:text-lg text-sm sm:text-base ">Requested</h4>
            </button>
          </Tab>
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="md:text-lg text-sm sm:text-base ">Send Request</h4>
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {loader && (
              <div className="flex items-center justify-center mt-5 mb-3">
                <BarLoader color="#36d7b7" width={'100%'} />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {all_user?.map((user) => (
                <FriendReqCard
                  key={user._id}
                  user={user}
                  db_user={db_user}
                  text="Add Friend"
                  ul_text="Remove"
                  add_handler={add_friend_handler}
                />
              ))}
            </div>
            <div className="flex justify-center mt-3">
              {!loader && all_user.length >= load_more && (
                <button
                  className="text bg-center bg-blue-600 px-4 py-2 !rounded-md text-white mb-10"
                  onClick={() => set_load_more((pre) => pre + 20)}
                >
                  See more
                </button>
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <h1>Coming Soon..</h1>

            {/* <FriendReqCard />
            <FriendReqCard />
            <FriendReqCard />
            <FriendReqCard /> */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <h1>Coming Soon..</h1>
            {/* {all_user?.map((user) => (
              <FriendReqCard
                key={user._id}
                user={user}
                text="Add Friend"
                ul_text="Remove"
                add_handler={add_friend_handeler}
              />
            ))} */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <h1>Coming Soon..</h1>
            {/* {all_user?.map((user) => (
              <FriendReqCard
                key={user._id}
                user={user}
                text="Add Friend"
                ul_text="Remove"
                add_handler={add_friend_handeler}
              />
            ))} */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Peoples
