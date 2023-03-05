import React from "react"
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

type Props = {}

const Feed = (props: Props) => {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3  xl:max-w-6xl max-auto">
        {/* Section */}
        <section className="col-span-2">
          {/* Stories */}
          <Stories />
          {/* Posts */}
          <Posts />
        </section>
        {/* Section */}
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20 ">
            {/* Mini Profile */}
            <MiniProfile />
            {/* Suggetions */}
            <Suggestions />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Feed
