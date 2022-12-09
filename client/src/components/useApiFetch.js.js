import {useEffect, useState} from 'react';

const useApiFetch = (apiUrl) =>{
   const [ data, setData] = useState(null);
   const [ isLoading, setIsLoading ] = useState(true)
   const [error, setError] =useState(null)

    useEffect(()=> {
      const abortCont = new AbortController();
    setTimeout(() => {  
    fetch(apiUrl, {signal: abortCont.signal})
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch data from directory')
      }
      return res.json();
    })
    .then(data => {
      setData(data)
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      if(err.name ==='AborError'){
        
      }
      setIsLoading(false)
      setError(err.message)
    })
    }, 1000);
    return ()=> abortCont.abort();
  }, [apiUrl]);

  return {data, isLoading, error}
}

export default useApiFetch;