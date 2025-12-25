import { useState } from 'react'
import './App.css'

function App() {

  const [isFollowing, setIsFollowing] = useState(false);

  const [followersCount, setFollowersCount] = useState(21);

  const handleFollow = () => {
    if (isFollowing) {
      // unfollow
      setIsFollowing(false);
      setFollowersCount(followersCount - 1);
    } else {
      // follow
      setIsFollowing(true);
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <>
      <div className="main">

        <div className="header">
          <p>meet chitroda's profile.</p>
        </div>

        <div className="profile">
          <div className="img"></div>
          <div className="info">
            <div className="username">
              <p>meetzyyy</p>
            </div>
            <div className="bio">
              <p>sleeping rn...</p>
            </div>
          </div>
          <div className="info2">
            <div className="details">
              <div className="posts">
                <p className='text1'>Posts</p>
                <p className='text2'>03</p>
              </div>
              <div className="followers">
                <p className='text1'>Followers</p>
                <p className='text2'>{followersCount}</p>
              </div>
              <div className="following">
                <p className='text1'>Following</p>
                <p className='text2'>03</p>
              </div>
            </div>
            <div className="follow">
              <button onClick={handleFollow}>{isFollowing ? "Follwing" : "Follow"}</button>
            </div>
          </div>
        </div>

        <div className="photos">
          <div className="post1"></div>
          <div className="post2"></div>
          <div className="post3"></div>
        </div>

      </div>
    </>
  )
}

export default App
