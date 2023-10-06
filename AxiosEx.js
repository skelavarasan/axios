import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosEx() {

    const[data,setData] = useState([]);
    const[loading,SetLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

      axios
      .get(apiUrl).then(
        (response)=>{
            setData(response.data);
           
            SetLoading(false);
        }
      ).catch((err)=>{
          setError(err);
          SetLoading(false);
      })
    },[])

    console.log('data:', data);


  return (
    <div>
          <h2>Fetch data with axios</h2>
          {
            loading ? (<div>Loading...</div>) : error ? (<div>Error : {error.message}</div>):

            (<ul>
              {
                data.map((item,index)=>(
                  <li key={index}>
                      {item.title}
                  </li>
                ))
              }
            </ul>)
          }
    </div>
  )
}

export default AxiosEx




