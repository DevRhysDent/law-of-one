import React from "react"

//Create json text of sessions
/*
  [
    {
      number : int,
      body: string,
    }
  ]
*/

//Require a json file

async function getText() {
  const text = await fetch("test.txt").then(res => res.text())
  console.log(text)
}
const IndexPage = () => {
  const text = getText()

  return <div></div>
}

export default IndexPage
