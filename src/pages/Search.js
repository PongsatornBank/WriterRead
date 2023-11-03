import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import './css/History.css'

export const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const data_search = [{'id' : 1,
                        'name' : "หมอ",
                      },
                      {'id' : 2,
                        'name' : 'น้องหมอ'}]

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const listpic =()=> {
    const rd = Math.floor(Math.random() * 2) 
    if( rd === 0 ){
        return 'hand-painted-watercolor-pastel-sky-background-23-2148902771.jpg'
    }
    else{
        return 'friedEgg.jpg'
    }
  }

  const handleSearchSubmit = () => {
    setSearchResults(data_search);
  };

  return (
    <div className='reading'>
        <div style={{flex:1}}> </div>
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',marginTop:'20px'}}>
                <input
                    type="text"
                    placeholder="ชื่อเรื่อง หรือ ผู้เขียน"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{borderRadius:'100px',marginRight:'20px',width:'35rem',borderWidth:'2px',paddingLeft:'10px',color:'deeppink'}}
                />
                <button onClick={handleSearchSubmit}><BsSearch style={{width:'30px',height:'30px',margin:'8px'}} /></button>
            </div>
    
            <ul>
              <div style={{marginTop:'20px'}}>
                {searchResults.map((result, id) => (
                <li key={id} style={{marginBottom:'10px',marginTop:'10px'}}>
                  <a href="./Readfic"><img src={listpic()} className="fic-pic" alt="ficpic" /></a>
                  <div className='details'>{result.name}</div>
                  <div className='details'>{searchQuery}</div></li>
                ))}
              </div>
            </ul>
            </div>
            
            <div style={{flex:1}}></div>
    </div>
  )
}

export default Search;
