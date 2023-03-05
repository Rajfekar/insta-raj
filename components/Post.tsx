import React from "react"
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid"
type Props = {
  id: number
  username: string
  userImg: string
  img: string
  caption: string
}

const Post = ({ id, username, userImg, img, caption }: Props) => {
  console.log(`${id}  ${username}  ${userImg}`)
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="user"
          className="rounded-full h-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={userImg} alt="image" className="object-cover w-full " />
      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4 pb-2">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatBubbleLeftEllipsisIcon className="btn" />
          <PaperAirplaneIcon className="btn -rotate-45" />
        </div>
        <BookmarkIcon className="btn " />
      </div>
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400" type="button">
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
