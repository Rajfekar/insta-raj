import React from "react"
import Post from "./Post"

type Props = {}
var postuser = [
  {
    id: 123,
    username: "rajfekar",
    userImg: "/a2.jpeg",
    img: "hello",
    caption: "helo world",
  },
  {
    id: 124,
    username: "rajfekar",
    userImg: "/a2.jpeg",
    img: "hello",
    caption: "helo world",
  },
]
const Posts = (props: Props) => {
  return (
    <div>
      {postuser.map((val, i) => (
        <Post
          key={i}
          id={val.id}
          username={val.username}
          userImg={val.userImg}
          img={val.img}
          caption={val.caption}
        />
      ))}
    </div>
  )
}

export default Posts
