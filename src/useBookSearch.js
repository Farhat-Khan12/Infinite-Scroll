import axios from 'axios';
import React,{useState,useEffect} from 'react';

export default function useBookSearch(query,pageNumber) {
    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: {q: query, page: pageNumber}
        }).then(res=>{
            console.log(res.data);
        })
    },[query,pageNumber])
    return (
    <>
    
    </>
  );
}
