import React from 'react'

const A = ({message, posts}) => { //전역컴포넌트 메세지
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map(post =>{
          return(
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default A