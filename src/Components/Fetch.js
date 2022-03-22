import {useEffect,useState} from 'react'



// .src = "https://openweathermap.org/img/wn/" + icon + ".png";

function Fetch({result}) {

    const [obj,setObj]=useState({})

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
       await atama( res.list[0].weather[0].main,res.list[0].weather[0].icon)
      }

      async function atama(res,icon){
        
        setObj({weather:res,icon:icon})     
        // main.innerHTML=obj.weather
        // console.log(obj)
      }
       
    
  return (
    
  <div className="card" style={{width: "18rem",color:"white",background:"grey"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon}.png`} className="card-img-top" alt="..." style={{width:"100px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
  )
}

export default Fetch

