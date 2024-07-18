import React from 'react'
import GuessBox from '../components/GuessBox'
import profile from "../assets/Profile.png" 
import { useState,useEffect } from 'react'
const Landingpage = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [style,setstyle]=useState({});
    useEffect(()=>{
        if(isEmpty){
            setstyle({opacity:0.5});
        }else{
            setstyle({});
        }
    },[isEmpty]);
  return (
    <div className='app_container'>
      <div className="background_svg">
      <svg width="360" height="250" viewBox="0 0 360 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-12 -97C16.3333 -95.3333 137.593 89.8627 95 62.5C12.5 9.5 -5.5 80.5 43.5 108.5C108 145.357 218.245 240 144 240C95 240 113 137.5 191.5 159.5C270 181.5 313.387 225.588 336.5 172.5C368.5 99 257.5 52 311 -23C360.614 -92.5529 388 -32 388 0.5" stroke="#1D2939" stroke-width="19"/>
</svg>
      
      </div>
      <div className="heading_above">
        <p className='you_got_a'>You Got a</p>
        <p className='Emoji_charades'>Emoji charades</p>
      </div>
      <GuessBox isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
      {(
        <div className="Lie_Information">
          <div className="User_picture">
            <img src={profile} alt="User" />
          </div>
          <div className="User_text">
          Wow !! that’s a tough one and I have managed something let’s see if you get it
          </div>
        </div>
      )}
      {(
        <button className="SpotPage_Submit" >
            <p style={style}>Send</p>
        </button>
      )}
    </div>
  )
}

export default Landingpage
