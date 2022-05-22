import React, { useEffect, useState } from 'react'

const Search = () => {
  const [datas, setdatas] = useState([]);
const [searchTerm, setsearchTerm] = useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);
    const handelSearchTerm =(e)=>{
        let value =e.target.value;
        setsearchTerm(value);
    };
    console.log(searchTerm)

return (
    <>
    
    <div className='searchBar'>
        <input
        type='text'
       
        onChange={handelSearchTerm}
        />
    </div>
    <div className='search_results'>
{
    datas.filter((val)=>{
        return val.title.tolowerCase().includes(searchTerm.tolowerCase())
    })
    .map((val)=>{
        return (
             <div className='search_result' key={val.id}>
                {val.title}
             </div>
            )
    })
}
    </div>
    </>
  )
}

export default Search