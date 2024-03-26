import React from 'react'
import './main.css'
import { comments, feedImg1, feedImg2, feedImg3, feedImg4, feedImg5, feeling, like, livevideos, member1, member2, member3, member4,photo,share,upload } from '../indexContImg'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaCaretDown} from 'react-icons/fa'
import { profilePic } from '../../../indexImg'

const stories = [
  {id:1,img:upload,text:'Post Story',storyClass:'story1'},
  {id:2,img:member1,text:'Alina',storyClass:'story2'},
  {id:3,img:member2,text:'Ali',storyClass:'story3'},
  {id:4,img:member3,text:'Ayesha',storyClass:'story4'},
  {id:5,img:member4,text:'Basit',storyClass:'story5'},
  
]
const mainContainerPosts = [
  {id:1,profilepic:profilePic,like:like,comment:comments,share:share,image:feedImg1,name:'Basit',message:'March 25 2024, 02:18pm',linkText:"Visit Youtube Channel"},
  {id:2,profilepic:profilePic,like:like,comment:comments,share:share,image:feedImg2,name:'Basit',message:'March 25 2024, 02:18pm',linkText:"Visit Youtube Channel"},
  {id:3,profilepic:profilePic,like:like,comment:comments,share:share,image:feedImg3,name:'Basit',message:'March 25 2024, 02:18pm',linkText:"Visit Youtube Channel"},
  {id:4,profilepic:profilePic,like:like,comment:comments,share:share,image:feedImg4,name:'Basit',message:'March 25 2024, 02:18pm',linkText:"Visit Youtube Channel"},
  {id:5,profilepic:profilePic,like:like,comment:comments,share:share,image:feedImg5,name:'Basit',message:'March 25 2024, 02:18pm',linkText:"Visit Youtube Channel"},
]
const MainContent = () => {
  return (
    <>
      <div className="story-gallery">
          
          {stories.map((story)=>{
            const {id,img,text,storyClass} = story
            return(
              <div key={id} className={`story ${storyClass}`}>
            <img src={img} alt="" />
            <p>{text}</p>
          </div>
            )
          })}
        </div>



        <div className="write-post-container">
          <div className="user-profile">
            <img src={profilePic} />
            <div>
              <p>Basit</p>
              <small> Public <i className="fa-solid fa-caret-down"></i></small>
            </div>
          </div>
          <div className="post-input-container">
            <textarea
              name=""
              id=""
              rows="3"
              placeholder="What's on your mind, Basit"
            ></textarea>
            <div className="add-post-links">
              <a href=""
                ><img src={livevideos}/>Live Video</a
              >
              <a href=""
                ><img src={photo} />Photo/Video</a
              >
              <a href=""
                ><img
                  src={feeling}
                />Feeling/Action</a
              >
            </div>
          </div>
        </div>

{mainContainerPosts.map((post)=>{
  const {id,profilepic,like,share,comment,image,name,message,linkText} = post
  return(
    <div key={id} className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} alt="" />
              <div>
                <p>{name}</p>
                <span> {message}</span>
              </div>
            </div>
            <a href="#"><BsThreeDotsVertical />
</a>
          </div>
          <p className="post-text">
            Subscribe <span>@FutureStarsGaming</span> for more videos on Garena
            Freefire, <a href="#">{linkText}</a>
          </p>
          <img src={image} className="post-img" alt="" />

          <div className="post-row">
            <div className="activity-icons">
              <div><img src={like} />120</div>
              <div><img src={comment} />17880</div>
              <div><img src={share} />12000</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><FaCaretDown />

            </div>
          </div>
        </div>
  )
})}
        

        {/* <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="/Img_Ic/images/profile-pic.png" alt="" />
              <div>
                <p>Noyan Ganju</p>
                <span> June 24 2021, 13:04 pm</span>
              </div>
            </div>
            <a href="#"> <i className="fas fa-ellipsis-v"></i></a>
          </div>
          <p className="post-text">
            Like and Share this video with friends,tag,
            <span>facebook page </span>on your post. ask your doubts in the
            comments for more videos on Garena Freefire,
            <a href="#">Visit Youtube Channel</a>
          </p>
          <img src="/Img_Ic/images/feed-image-2.png" className="post-img" alt="" />

          <div className="post-row">
            <div className="activity-icons">
              <div><img src="/Img_Ic/images/like.png" alt="" />120</div>
              <div><img src="/Img_Ic/images/comments.png" alt="" />17880</div>
              <div><img src="/Img_Ic/images/share.png" alt="" />12000</div>
            </div>
            <div className="post-profile-icon">
              <img src="/Img_Ic/images/profile-pic.png" alt="" /><i
                className="fa-solid fa-caret-down"
              ></i>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="/Img_Ic/images/profile-pic.png" alt="" />
              <div>
                <p>Noyan Ganju</p>
                <span> June 24 2021, 13:04 pm</span>
              </div>
            </div>
            <a href="#"> <i className="fas fa-ellipsis-v"></i></a>
          </div>
          <p className="post-text">
            Like and Share this video with friends,tag,
            <span>facebook page </span>on your post. ask your doubts in the
            comments for more videos on Garena Freefire,
            <a href="#">Visit Youtube Channel</a>
          </p>
          <img src="/Img_Ic/images/feed-image-3.png" className="post-img" alt="" />

          <div className="post-row">
            <div className="activity-icons">
              <div><img src="/Img_Ic/images/like.png" alt="" />120</div>
              <div><img src="/Img_Ic/images/comments.png" alt="" />17880</div>
              <div><img src="/Img_Ic/images/share.png" alt="" />12000</div>
            </div>
            <div className="post-profile-icon">
              <img src="/Img_Ic/images/profile-pic.png" alt="" /><i
                className="fa-solid fa-caret-down"
              ></i>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="/Img_Ic/images/profile-pic.png" alt="" />
              <div>
                <p>Noyan Ganju</p>
                <span> June 24 2021, 13:04 pm</span>
              </div>
            </div>
            <a href="#"> <i className="fas fa-ellipsis-v"></i></a>
          </div>
          <p className="post-text">
            Like and Share this video with friends,tag,
            <span>facebook page </span>on your post. ask your doubts in the
            comments for more videos on Garena Freefire,
            <a href="#">Visit Youtube Channel</a>
          </p>
          <img src="/Img_Ic/images/feed-image-4.png" className="post-img" alt="" />

          <div className="post-row">
            <div className="activity-icons">
              <div><img src="/Img_Ic/images/like.png" alt="" />120</div>
              <div><img src="/Img_Ic/images/comments.png" alt="" />17880</div>
              <div><img src="/Img_Ic/images/share.png" alt="" />12000</div>
            </div>
            <div className="post-profile-icon">
              <img src="/Img_Ic/images/profile-pic.png" alt="" /><i
                className="fa-solid fa-caret-down"
              ></i>
            </div>
          </div>
        </div>
        
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src="/Img_Ic/images/profile-pic.png" alt="" />
              <div>
                <p>Noyan Ganju</p>
                <span> June 24 2021, 13:04 pm</span>
              </div>
            </div>
            <a href="#"> <i className="fas fa-ellipsis-v"></i></a>
          </div>
          <p className="post-text">
            Like and Share this video with friends,tag,
            <span>facebook page </span>on your post. ask your doubts in the
            comments for more videos on Garena Freefire,
            <a href="#">Visit Youtube Channel</a>
          </p>
          <img src="/Img_Ic/images/feed-image-5.png" className="post-img" alt="" />

          <div className="post-row">
            <div className="activity-icons">
              <div><img src="/Img_Ic/images/like-blue.png" alt="" />120</div>
              <div><img src="/Img_Ic/images/comments.png" alt="" />17880</div>
              <div><img src="/Img_Ic/images/share.png" alt="" />12000</div>
            </div>
            <div className="post-profile-icon">
              <img src="/Img_Ic/images/profile-pic.png" alt="" /><i
                className="fa-solid fa-caret-down"
              ></i>
            </div>
          </div>
        </div> */}
        <button type="button" className="load-more-button">Load More</button>
    </>
  )
}

export default MainContent