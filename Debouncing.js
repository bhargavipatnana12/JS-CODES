import React from 'react';
import { useState ,useEffect} from 'react'

const App = () => {
const [search,setSearch] = useState('');
const [debouncedSearch,setDebouncedSearch] = useState('');
useEffect(() => {
  const timer = setTimeout(()=>{setDebouncedSearch(search)},1000)
return () => {clearTimeout(timer);}

},[search]);
useEffect(() => {
  if(debouncedSearch){
    console.log('API call for:' ,debouncedSearch)
  }
} ,[debouncedSearch])


return(
  <div>
  <input type='text' value={search}   onChange = {(e) => setSearch(e.target.value)} placeholder='search employee'/>
  <p>Searching for :{debouncedSearch}</p>
  </div>
)
}
export default App;
