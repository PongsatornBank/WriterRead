import {React}from 'react';
import './css/History.css';
import {BsFillPersonFill,BsFillTrashFill,BsFillBookmarkHeartFill} from 'react-icons/bs';
import {SiDarkreader} from 'react-icons/si';

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

const Bookmark = () => {
    // const [read,setRead] = useState('lastest')

    return(
        <div className='body'>
            <main style={{flexDirection:'row'}}>
                    <div style={{flex:1}}>left </div>
                    <div className='container'>
                        <div className='topic'>
                            <div style={{backgroundColor: 'white',borderColor:'white' }}
                                ><text style={{fontSize:'45px',fontFamily:'The nautigal',fontWeight:'bold',cursor: 'pointer'}}>Reading</text>
                            </div>
                            <div className='navbar' >
                                <ul className='nav-list'>
                                    <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{}}>Latest read <SiDarkreader  style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                                    <div style={{cursor: 'pointer',display:'flex'}} onClick={()=>{}}>Bookmark<BsFillBookmarkHeartFill style={{marginTop:'5px',paddingLeft:'5px',width:'24px'}}/></div>
                                </ul>
                            </div>
                           
                        </div>
                        <div className='zone-fic' style={{flexDirection:{flexRead}}}>
                           <text>Bookmark here</text>
                        </div>
                        
                    </div>
                    
                    <div style={{flex:1}}>right</div>
                
            </main>
        </div>
    )
}

export default Bookmark ;