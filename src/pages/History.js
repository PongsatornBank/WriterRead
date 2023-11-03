import React,{useState}from 'react';
import './css/History.css';
import {BsFillPersonFill,BsFillTrashFill,BsFillBookmarkHeartFill} from 'react-icons/bs';
import {SiDarkreader} from 'react-icons/si';
import {FaSadCry} from 'react-icons/fa'


const History = () => {
    const [read,setRead] = useState('latest')
    var [count,setCount] = useState(7)
    const BookmarkItem = 2

    const ShowBookmark = () => {
        if (BookmarkItem === 0){
            return (
                <div className='bookmark-item-frame'>
                    <text>No Bookmark Here <FaSadCry style={{marginTop:'5px',width:'50px'}}/></text>
                </div>
            )
        }
        else {
            return ShowBookmarkItem()
        }
    }
    const SelectRead = () => { 
        if (read === 'latest'){
            return ShowRead()
        }
        else{
            return ShowBookmark()
        }
    }

    const listpic =()=> {
        const rd = Math.floor(Math.random() * 2) 
        if( rd === 0 ){
            return 'hand-painted-watercolor-pastel-sky-background-23-2148902771.jpg'
        }
        else{
            return 'friedEgg.jpg'
        }
    
       
    } 
    const ShowRead = () => {
        let boxs = []
        let i = 1
        if(count===0){
            return(
                <div className='reading-item'>
                    <text>No Latest Reading Here <FaSadCry style={{marginTop:'5px',width:'50px'}}/></text>
                </div>
            )
        }
        else{
            while(i<=count){
                boxs.push(
                <div className='fiction'>
                    <a href="./Readfic"><img src={listpic()} className="fic-pic" alt="ficpic" /></a>
                    <div className='details'>
                        <text className='fic-name'>หมอ</text>
                        <div className='fic-boxes'>
                            <BsFillPersonFill style={{color:'grey',marginTop:'5px'}}/>
                            <a href="./Fiction"><text className='writer-name' onClick={()=>{}}>spondazeus</text></a>
                        </div>
                        
                        <div className='chapter-remove'>
                            <p>ตอนที่1 30 นาทีที่ผ่านมา</p>
                            <BsFillTrashFill className='chapter-remove-icon' onClick={() => {setCount(count-=1)}}/>
                        </div>
                    </div>
                </div>
                )
                i++
            }
        }
        return boxs
    }
    const ShowBookmarkItem = () => {
        let boxs = []
        let i = 1
        if(BookmarkItem===0){
            return(
                <div className='reading-item'>
                    <text>No Latest Reading Here <FaSadCry style={{marginTop:'5px',width:'50px'}}/></text>
                </div>
            )
        }
        else{
            while(i<=BookmarkItem){
                boxs.push(
                <div className='fiction'>
                    <a href="./Readfic"><img src={listpic()} className="fic-pic" alt="ficpic" /></a>
                    <div className='details'>
                        <text className='fic-name'>หมอ</text>
                        <div className='fic-boxes'>
                            <BsFillPersonFill style={{color:'grey',marginTop:'5px'}}/>
                            <a href="./Fiction"><text className='writer-name' onClick={()=>{}}>spondazeus</text></a>
                        </div>
                        
                        <div className='chapter-remove'>
                            <p>ตอนที่1 30 นาทีที่ผ่านมา</p>
                            <BsFillTrashFill className='chapter-remove-icon' onClick={() => {setCount(count-=1)}}/>
                        </div>
                    </div>
                </div>
                )
                i++
            }
        }
        return boxs
    }

    
    return(
        <div className='reading'>
            <div style={{flex:1}}> </div>
            <div className='cont'>
                <div className='topic'>
                    <text>Reading</text>
                    <div className='navbar' >
                        <ul className='nav-list'>
                            <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{setRead('latest')}}>Latest read <SiDarkreader  style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                            <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{setRead('bookmark')}}>Bookmark<BsFillBookmarkHeartFill style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                        </ul>
                    </div>
                </div>
                <div className='zone-fic'>
                    {SelectRead()}
                </div>
                
            </div>
            <div style={{flex:1}}></div>
        </div>
    )
}

export default History ;