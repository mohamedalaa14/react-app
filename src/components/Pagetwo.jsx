import React from 'react'
import '../styles/Pagetwostyle.css'
import { Sandpack } from "@codesandbox/sandpack-react";
function Pagetwo() {
  return (
    <div className='format'>
        <p className='p1'>Create user interfaces<br></br> from components</p>
        <p className='p2'>React lets you build user interfaces out of individual pieces called components.<br></br> Create your own React components like Thumbnail, LikeButton, and Video.<br></br> Then combine them into entire screens, pages, and apps.</p>
        {/* <Sandpack className='code' 
      template="react"
      theme='dark'
      files={{
        "/App.js": `function Video({ video }) {
            return (
              <div>
                <Thumbnail video={video} />
                <a href={video.url}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </a>
                <LikeButton video={video} />
              </div>
            );
          }`,
      }}
    /> */}
    <p className='p3'>Whether you work on your own or with thousands of other developers, using<br></br> React feels the same. It is designed to let you seamlessly combine components<br></br> written by independent people, teams, and organizations.</p>
    
    </div>
  )
}

export default Pagetwo