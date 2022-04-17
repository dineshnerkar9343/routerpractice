import React, { useState } from 'react'

import Newsitems from './newsitems'

export default function News() {

  const [mode, setMode] = useState(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d01f6bf520634f6b903ad0b2a70fc8ac&page=1&pageSize=10`
    // color:'black',
    // backgroung:'light'
  )
    
   const danny=() =>{
     setMode({
      //  color:'white',
      //  backgroung:'dark'
     })
     
    }



  return (
      <>
      <div className="container" style={mode}>
  <div className="row">
      <div className="col-md-4">
      <Newsitems title="dinesh" description="this is newsitem" newsurl="how are you" imageurl=" "/>
      </div>
      </div>

      <div className="d-flex justify-content-between">
            <button  type="button" className="btn btn-info" style={mode} onClick={danny}>Previous</button>
            <button type="button" className="btn btn-info">Next</button>
          </div>
    
      </div>
  
     
        </>
    
  )
}
