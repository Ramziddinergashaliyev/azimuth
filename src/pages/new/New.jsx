import React, { useEffect } from 'react'
import "./new.scss"
import News from '../../components/news/News'

const New = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
  return (
    <div className='new'>
        <h3 className='new-title container'>News</h3>
        <News top={true}/>
    </div>
  )
}

export default New