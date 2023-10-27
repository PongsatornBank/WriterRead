import React from 'react';
// import {Navbar} from './Navbar'
import './css/History.css'
import {BsFillPersonFill,BsFillTrashFill} from 'react-icons/bs';
import Navbar from '../Navbar'

const listpic =()=> {
    const rd = Math.floor(Math.random() * 2) 
    if( rd === 0 ){
        return 'hand-painted-watercolor-pastel-sky-background-23-2148902771.jpg'
    }
    else{
        return 'friedEgg.jpg'
    }

   
} 
const showRead = () => {
    let boxs = []
    let i = 1
    while(i<=6){
        boxs.push(
            <div className='fiction'>
                <img src={listpic()} style={{cursor: 'pointer'}} onClick={()=>{}} className="fic-pic" alt="ficpic" />
                <div className='details'>
                    <text style={{display:'flex',justifyContent:'center',fontSize:'20px',fontWeight:'bold',paddingTop:'20px'}}>หมอ</text>
                    <div style={{display:'flex',paddingLeft:'10px'}}>
                        <BsFillPersonFill style={{color:'grey',marginTop:'5px'}}/>
                        <text style={{color:'grey',cursor: 'pointer',paddingLeft:'10px' }} onClick={()=>{}}>spondazeus</text>
                    </div>
                    
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'auto'}}>
                        <p>ตอนที่1 30 นาทีที่ผ่านมา</p>
                        <BsFillTrashFill style={{color:'grey',cursor: 'pointer',alignItems:'flex-end'}} onClick={() => { console.log('remove')}}/>
                    </div>
                </div>
            </div>
        )
        i++
    }
    return boxs
}
const flexRead = () => {
    if (showRead > 6){
        return 'column'
    }
    else{
        return 'row'
    }
}
// const ficList = {}
const History = () => {
    return(
        <div className='body'>
            <header>
                <Navbar/>
                {/* <Navbar/> */}
                {/* <h1>Header</h1> */}
                {/* <div style={{cursor: 'pointer'}} onClick={()=>{}}><img src="friedEgg.jpg" className="App-logo" alt="logo" /></div> */}
            </header>
            <main style={{flexDirection:'row'}}>
                    <div style={{flex:1}}> </div>
                    <div className='container'>
                        <div className='topic'>
                            <div style={{backgroundColor: 'white',borderColor:'white' ,cursor: 'pointer'}}
                                onClick={console.log('press')}
                                ><text style={{fontSize:'45px',fontFamily:'The nautigal',fontWeight:'bold'}}>Reading</text>
                            </div>
                            <div className='navbar' >
                                <ul className='nav-list'>
                                    <div style={{cursor: 'pointer'}} onClick={()=>{}}>Latest read</div>
                                    <div style={{cursor: 'pointer'}} onClick={()=>{}}>Bookmark</div>
                                </ul>
                            </div>
                           
                        </div>
                        <div className='zone-fic' style={{flexDirection:{flexRead}}}>
                           {showRead()}
                        </div>
                        
                    </div>
                    
                    <div style={{flex:1}}></div>
                
            </main>
            <footer>
                <h1>Footer</h1>
                
            </footer>
        </div>
    )
}

export default History ;