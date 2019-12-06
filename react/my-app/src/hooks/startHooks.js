import React,{useState,useEffect} from 'react'

function Example(){
  const [count,seCount]=useState(0)

  useEffect(()=>{
    document.title=`you click ${count} times`
  })
  return (
    <div>
      <p>点击{count}次数</p>
      <button onClick={()=>{seCount(count+1)}}>点击啊我</button>
    </div>
  )
}
export default Example;
