import React from 'react';
import { useState,useEffect } from 'react'

function useLocalStorage(key,initialValue) {
 const [value,setValue] = useState(() => {
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : initialValue;
 })
 useEffect(() => {
  localStorage.setItem(key,JSON.stringify(value))
 },[key,value])
 return [value,setValue]
}

export default useLocalStorage;

//App.js
import useLocalStorage from './useLocalStorage';

function App() {
const [data,setData] = useLocalStorage('appStorre','srinu');
}
export default App;
 

