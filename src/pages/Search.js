import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs'

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform a search or filter operation based on searchQuery
    // For example, you can filter an array of data or make an API call

    // For this example, we'll just set the search results to a sample array
    setSearchResults([
      'Result 1',
      'Result 2',
      'Result 3',
    ]);
  };

  return (
    <main>
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
                {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
                ))}
            </ul>
            </div>
            
            <div style={{flex:1}}></div>
    </main>
  )
}

export default Search;
