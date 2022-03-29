import React from "react"
import Header from "../components/Header"

type Props = {
  bio
}

const About: React.FC<Props> = (props) => {
  return (
    <>
    <Header />
    <section className="flex p-3 max-w-auto max-h-auto rounded-xl shadow-lg justify-center">
      <h1 className="text-3xl font-bold">
        About
      </h1>
    </section>
    
    </>
  )
}

export default About;