import React from "react"
import { faker } from "@faker-js/faker"
import { useEffect, useState } from "react"
import Story from "./Story"
import { type } from "os"
type Props = {}

const Stories = (props: Props) => {
  var [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestion = [...Array(20)].map((val, i) => ({
      // userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      // email: faker.internet.email(),
      avatar: faker.image.avatar(),
      // password: faker.internet.password(),
      // birthdate: faker.date.birthdate(),
      // registeredAt: faker.date.past(),
    }))
    console.log(suggestion)
    setSuggestions(suggestion)
  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border border-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile, i) => (
        <Story key={i} imgurl={profile.avatar} username={profile.username} />
      ))}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
    </div>
  )
}

export default Stories
