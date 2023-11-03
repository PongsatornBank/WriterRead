import React,{ useState } from 'react';
import { BsFillPersonFill , BsEyeFill , BsHeartFill } from 'react-icons/bs';
import './css/Fiction.css'

export default function Fiction() {
    const Button = () => {
        const [toggle, setToggle] = useState(false);
        const [fav, setFav] = useState(999);
    
        const handleHeartClick = () => {
            setFav(toggle ? fav - 1 : fav + 1);
            setToggle(!toggle);
        }
    
        return (
            <>
                <div className="fiction_details">
                    <p className="icons"> <BsEyeFill className='view' /> 10563 </p>
                    <p className="icons"> <BsHeartFill className='fav' /> {fav} </p>
                </div>
                <div className='button'>
                    <a href='/Readfic'> <button type="button" class="accept-button" > Let's Read </button> </a>
                    <button type="button" class="accept-button" onClick={() => {}}> Bookmark </button>
                    <button type="button" class="accept-button" onClick={handleHeartClick} style={toggle ? { color: 'red' } : { color: 'white' }}>
                        <BsHeartFill />
                    </button>
                </div>
            </>
        )
    }

    return (
        <div className='body'>
            <div className='container' style={{backgroundImage: `url('https://i.ibb.co/ftbsdS0/img2.jpg')`}}>
                <div className="modal">
                    <h2> มุมมองนักอ่านพระเจ้า (Omniscient Reader's Viewpoint) </h2>
                    <div style={{display:'flex' , flexDirection:'row' , justifyContent:'center'}}>
                        <h4 style={{display:'flex' , fontSize:18 ,fontWeight:'bold'}} > <BsFillPersonFill style={{display:'flex' , flexDirection:'column', alignSelf:'center' , marginRight:10}}/>  Sing Shong </h4>
                    </div>
                    <p className="terms">
                        "เดี๋ยวนะ สถานการณ์นี่มันคุ้นๆ?" โลกใบเดิมพลิกผันไปในชั่วพริบตา! 
                        ชีวิตพนักงานบริษัทธรรมดาๆ ของผมเปลี่ยนแปลงไปอย่างฉับพลัน นี่มันโลกในนิยายที่มีผมอ่านอยู่แค่คนเดียวนี่!
                    </p>
                    <Button/>
                </div>
            </div>
        </div>
    )
}