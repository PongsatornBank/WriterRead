import React,{useState} from 'react';
import './css/Readfiction.css'
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons/bi'
import {GoHome} from 'react-icons/go'

const Readfiction = () => {
    const [inputComment,setInputComment] = useState("");
    // const [listComment,setListcomment] = ([]);
    var listComment = [{'id' : 1,
                        'message' : 'สวัสดีค่ะ'},
                        {'id' : 2,
                        'message' : 'yeah yeah'}]
    const handleInputSend = () => {
        listComment.push(inputComment) 
    }
    const InputSend = () => {
        return ( <div>
                <div>{listComment.map((result) => (
                    <li style={{marginBottom:'10px',marginTop:'10px'}}>
                        
                        <div className='details'>{result.message}</div>
                        
                    </li>
                ))}</div>
        </div>
        
        )
      };

    return(
        <main>
            <div className='fic' >
                <div className='frame-arrow-icon'>
                    <BiSolidLeftArrow style={{color:'lightgrey',width:'40px',height:'60px'}} onClick={() => {}}/>
                </div>
                <div className='container'>
                    <div className='box-fiction'>
                        <div className='home'>
                                <GoHome style={{width:'40px',height:'40px'}}/>
                                <text style={{fontWeight:'bold'}}>Episode.</text>

                        </div>
                        <div className='chapter'>
                                <div>
                                   
                                </div>
                                
                        </div>
                    </div>
                </div>
                <div className='frame-arrow-icon'>
                    <BiSolidRightArrow style={{color:'lightgrey',width:'40px',height:'60px'}} onClick={() => {}}/>
                </div>
            </div>
            <div className='add-sticker' >
                <div style={{paddingLeft:'50px',paddingTop:'20px',paddingBottom:'20px'}}>
                    <text style={{padding:'50px',marginTop:'100px',color:'grey'}}>Add your comment and give a heart for writer 💖 </text>
                </div>
                <div className='comment'>
                    <div className="bg-comment">
                        <div className='text-comment'>
                            <text >บอกความในใจกับนิยายเรื่องนี้</text>
                        </div> 
                        <div className='input-comment'>
                            <input type='text' 
                                    value={inputComment} 
                                    placeholder='เพิ่มความคิดเห็น...'
                                    onChange={(text) => {setInputComment(text.target.value)}} />
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',marginTop:'35px',marginBottom:'10px'}}>
                            <button type='button' class="px-3 py-2 rounded-lg bg-pink-300 text-black-600" onClick={handleInputSend()} >SEND</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='fic' >
                <div className='frame-arrow-icon'>
            </div>
            <div style={{display:'flex',flex:'1',}}>
                {InputSend()}
            </div>
            <div className='frame-arrow-icon'>

            </div>
        </div>


    </main>    
            
    )
}

export default Readfiction;