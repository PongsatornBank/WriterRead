import React,{useState}from 'react';
import './css/History.css';
import {BsFillPersonFill,BsFillTrashFill,BsFillBookmarkHeartFill} from 'react-icons/bs';
import {SiDarkreader} from 'react-icons/si';
import {FaSadCry} from 'react-icons/fa'


const History = () => {
    const [read,setRead] = useState('latest')
    var [count,setCount] = useState(5)
    const BookmarkItem = 0

    const ShowBookmark = () => {
        if (BookmarkItem === 0){
            return (
                <div style={{display:'flex',borderColor:'goldenrod',borderWidth:'2px',borderRadius:'30px',height:'150px',width:'90%'}}>
                    <text style={{display:'flex',justifyContent:'center',fontSize:'30px',fontFamily:'The nuatigul',margin:'auto'}}>No Bookmark Here <FaSadCry style={{marginTop:'5px',width:'50px'}}/></text>
                </div>
            )
        }
        else {
            return ShowRead()
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
                <div style={{display:'flex',borderColor:'goldenrod',borderWidth:'2px',borderRadius:'30px',height:'150px',width:'90%'}}>
                    <text style={{display:'flex',justifyContent:'center',fontSize:'30px',fontFamily:'The nuatigul',margin:'auto'}}>No Latest Reading Here <FaSadCry style={{marginTop:'5px',width:'50px'}}/></text>
                </div>
            )
        }
        else{
            while(i<=count){
                boxs.push(
                <div className='fiction'>
                    <a href="./Fiction"><img src={listpic()} className="fic-pic" alt="ficpic" /></a>
                    <div className='details'>
                        <text style={{display:'flex',justifyContent:'center',fontSize:'20px',fontWeight:'bold',paddingTop:'20px'}}>หมอ</text>
                        <div style={{display:'flex',paddingLeft:'10px'}}>
                            <BsFillPersonFill style={{color:'grey',marginTop:'5px'}}/>
                            <text style={{color:'grey',cursor: 'pointer',paddingLeft:'10px' }} onClick={()=>{}}>spondazeus</text>
                        </div>
                        
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:'auto'}}>
                            <p>ตอนที่1 30 นาทีที่ผ่านมา</p>
                            <BsFillTrashFill style={{color:'grey',cursor: 'pointer',alignItems:'flex-end'}} onClick={() => {setCount(count=count-1)}}/>
                        </div>
                    </div>
                </div>
                )
                i++
            }
        }
        return boxs
    }
    const flexRead = () => {
        if (ShowRead > 6){
            return 'column'
        }
        else{
            return 'row'
        }
    }
    
    return(
        
        <main style={{flexDirection:'row'}}>
                <div style={{flex:1}}> </div>
                <div className='content'>
                    <div className='topic'>
                        <div style={{backgroundColor: 'white',borderColor:'white' }}
                            ><text style={{fontSize:'45px',fontFamily:'The nautigal',fontWeight:'bold',cursor: 'pointer'}}>Reading</text>
                        </div>
                        <div className='navbar' >
                            <ul className='nav-list'>
                                <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{setRead('latest')}}>Latest read <SiDarkreader  style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                                <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{setRead('bookmark')}}>Bookmark<BsFillBookmarkHeartFill style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className='zone-fic' style={{flexDirection:{flexRead}}}>
                        {SelectRead()}
                    </div>
                    
                </div>
                
                <div style={{flex:1}}></div>
            
        </main>
        
    )
}

export default History ;