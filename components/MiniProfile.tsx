import React from "react"

type Props = {}

const MiniProfile = (props: Props) => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="/a2.jpeg"
        alt="profile"
        className="rounded-full border p-[2px] w-16 h-16  "
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">rajfekar</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram2.0</h3>
      </div>
      <button className="text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}

export default MiniProfile
