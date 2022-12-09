import {useEffect, useState} from 'react';

const useApiFetch = () =>{
   const [ data, setData] = useState(null);
   const [ isLoading, setIsLoading ] = useState(true)
   const [error, setError] =useState(null)

    useEffect(()=> {
    fetch(apiUrl)
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
      setIsLoading(false)
      setError(err.message)
    })
  }, []);

  return {data, isLoading, error}
}

export default useApiFetch;