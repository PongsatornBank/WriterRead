import React,{useState} from 'react';
import './css/Readfiction.css'
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons/bi'
import {GoHome} from 'react-icons/go'
import {BsChatHeart,BsChatHeartFill} from 'react-icons/bs'

const Readfiction = () => {
    const [heart,setHeart] = useState(true)
    const [ep,setEp] = useState(1)
    let maxEp = 10

    const previousPages = () => {
        if (ep > 0) {
            setEp(ep-1)
        }
    }
    const NextPages = () => {
        if (ep != maxEp){
            setEp(ep+1)
        }
    }
    return(
        <div className='fic' >
            <div className='frame-arrow-icon'>
                <BiSolidLeftArrow style={{color:'lightgrey',width:'40px',height:'60px',cursor:'pointer'}} onClick={previousPages}/>
            </div>
            <div className='story'>
                <div className='box-fiction'>
                    <div className='home'>
                            <a href='/Fiction' ><GoHome style={{width:'40px',height:'40px'}}/></a>
                            <text style={{fontWeight:'bold'}}>Episode {ep}</text>
                            <div style={{cursor:'pointer',paddingRight:'10px'}} onClick={() => setHeart(!heart)}>
                                {heart ? (
                                    <div><BsChatHeart style={{width:'30px',height:'30px'}}/></div>
                                ) :
                                (
                                    <div><BsChatHeartFill style={{width:'30px',height:'30px'}}/></div>
                                )}
                            </div>

                    </div>
                    <div className='chapter'>
                            <div>
                                
                            </div>
                            
                    </div>
                </div>
            </div>
            <div className='frame-arrow-icon'>
                <BiSolidRightArrow style={{color:'lightgrey',width:'40px',height:'60px',cursor:'pointer'}} onClick={NextPages}/>
            </div>
        </div>
            
    )
}

export default Readfiction;