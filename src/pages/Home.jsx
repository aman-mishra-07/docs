import React, { useRef } from 'react'
import Card from '../components/Card'

const Home = () => {
    const refBox = useRef(null)

    const data = [
        {
            discription : 'HTML notes, all topics are covered from basics to advance',
            filesize : '.4mb',
            close : true,
            isOpen : true, 
        },
        {
            discription : 'CSS notes, all important topics are covered that you must Know',
            filesize : '.9mb',
            close : false,
            isOpen : true,
        },
        {
            discription : 'JavaScript notes, all topics are covered from basics to advance',
            filesize : '2.5mb',
            close : false,
            isOpen : false,
        }
    ]
  return (
    <>
        <div ref={refBox} className='fixed z-0 inset-0 p-8 flex flex-wrap gap-4'>
            {data.map((item, index) => (
                <Card data={item} reference={refBox}/>
            ))}
        </div>
    </>
  )
}

export default Home
