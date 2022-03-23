import {useEffect,useState} from 'react'

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
        const datas=
        {
          weather1:res.list[0].weather[0].main,
          icon1:res.list[0].weather[0].icon,
       
          weather2:res.list[1].weather[0].main,
          icon2:res.list[1].weather[0].icon,
       
          weather3:res.list[2].weather[0].main,
          icon3:res.list[2].weather[0].icon,
             
          weather4:res.list[3].weather[0].main,
          icon4:res.list[3].weather[0].icon,
            
          weather5:res.list[4].weather[0].main,
          icon5:res.list[4].weather[0].icon,
            
          weather6:res.list[5].weather[0].main,
          icon6:res.list[5].weather[0].icon,
           
          weather7:res.list[6].weather[0].main,
          icon7:res.list[6].weather[0].icon,
        }
        
       await atama( datas)
      }

      async function atama(datas){
        
        setObj(datas)     

      }
       
    
  return (
    <div className='container'>
      <div className="row col-xs-12 ">
      <div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon1}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather1}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon2}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather2}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon3}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather3}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon4}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather4}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon5}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather5}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon6}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather6}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>
<div className="card" style={{width: "11rem",color:"black",height:"14rem",marginRight:"10px",marginTop:"10px",background:"#F7CCAC"}}>
  <img src={`https://openweathermap.org/img/wn/${obj.icon7}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {result.name}</h5>
  <p className="card-text">{obj.weather7}</p>
  {/* <p className="card-text-cel">{obj.weather}</p> */}
</div>
</div>

      </div>




    </div>
  

  )
}

export default Fetch

