import {useEffect,useState} from 'react';
const url='https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {

  const [isError, setIsError] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [apiData, setApiData] = useState([])

    const fetchData=()=>{
      fetch(url)
      .then((res)=>{
        if(res.ok){
          return res.json()
        }
      })
      .then((data)=>{
        setIsLoading(false)
        setIsError(false)
        setApiData(data)
      })
      .catch((err)=>{
        console.log(err);
        setIsLoading(false)
        setIsError(true)
      })
    }

  useEffect(()=>{
    fetchData()
  },[])
  return {isLoading,isError,apiData}
}

export default useFetch
