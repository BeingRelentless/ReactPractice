import React from 'react'

function CommentsCard({comment}) {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
    }
  return (
    <div style={style}>{comment}</div>
  )
}

export default CommentsCard 