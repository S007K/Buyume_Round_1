import React from 'react'
import Card from './Card'

function Post({id, title, body}) {
  return (
    <Card className="post-card">
        <h2>id:{id}</h2>
        <h3>title:{title}</h3>
        <p>body:{body}</p>
    </Card>
  )
}

export default Post