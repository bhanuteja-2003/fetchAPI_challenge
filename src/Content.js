import React from 'react'

const Content = ({data}) => {
  return (
    <ul>
        {data.map((item)=>{
            return <li key={item.id} >{JSON.stringify(item)}</li>;
        })}
    </ul>
  )
}

export default Content;