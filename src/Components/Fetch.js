import {useEffect,useState} from 'react'
const main=document.querySelector('.weather')

function Fetch({result}) {

    const [obj,setObj]=useState("")

    useEffect(()=>{
        
        getData(result)
        
    },[result])


    async function getData(result) {
     
        const data = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${result.latitude}&lon=${result.longitude}&appid=92ac4c4cde9401b43a5dc6a529ab57c6`
        );
        const res = await data.json();
           
       console.log(res)
        // console.log(res)
       await atama( res.list[0].weather[0].main)
      }

      async function atama(res){
        
        setObj(res)
        console.log("res:",res)
        main.innerHTML=obj
         
      }
       
    
  return (
    
    <div className='yaz'>
   <div className='weather'>
    {<code>{obj}</code>}
      </div>
      
  
   <div className='sehir'>
      {result.name}
      </div>

    </div>
  )
}

export default Fetch