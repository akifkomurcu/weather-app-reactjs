import {useEffect,useState} from 'react'

function Fetch({result}) {

    const [obj,setObj]=useState({})

    useEffect(()=>{
        
        getData(result)
        
    },[result])
    var tarih = new Date();
    var gunler = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var gunlersayi = [];
    // console.log(gunler[tarih.getDay()])
    var i=tarih.getDay();
     var counter =0;
     for(i;i<7;i++){
      gunlersayi[counter]=i;
      
        counter++;
      
          if(i==6){
            i=-1
          }
          if(counter==7)
          break
        }
        
    async function getData(result) {
     
        const data = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${result.latitude}&lon=${result.longitude}&appid=92ac4c4cde9401b43a5dc6a529ab57c6`
        );
        const res = await data.json();
          // kelvin to celsius  -272.15
       console.log(res)
        // console.log(res)
        const datas=
        {
          highesttemp1:parseInt(res.list[0].main.temp_max-272.15),
          lowesttemp1:parseInt(res.list[0].main.temp_min-272.15),
          gun1:gunler[gunlersayi[0]],
          weather1:res.list[0].weather[0].main,
          icon1:res.list[0].weather[0].icon,
       
          highesttemp2:parseInt(res.list[1].main.temp_max-272.15),
          lowesttemp2:parseInt(res.list[1].main.temp_min-272.15),
          gun2:gunler[gunlersayi[1]],
          weather2:res.list[1].weather[0].main,
          icon2:res.list[1].weather[0].icon,
       
          highesttemp3:parseInt(res.list[2].main.temp_max-272.15),
          lowesttemp3:parseInt(res.list[3].main.temp_min-272.15),
          gun3:gunler[gunlersayi[2]],
          weather3:res.list[2].weather[0].main,
          icon3:res.list[2].weather[0].icon,
             
          highesttemp4:parseInt(res.list[3].main.temp_max-272.15),
          lowesttemp4:parseInt(res.list[3].main.temp_min-272.15),
          gun4:gunler[gunlersayi[3]],
          weather4:res.list[3].weather[0].main,
          icon4:res.list[3].weather[0].icon,
            
          highesttemp5:parseInt(res.list[4].main.temp_max-272.15),
          lowesttemp5:parseInt(res.list[4].main.temp_min-272.15),
          gun5:gunler[gunlersayi[4]],
          weather5:res.list[4].weather[0].main,
          icon5:res.list[4].weather[0].icon,
            
          highesttemp6:parseInt(res.list[5].main.temp_max-272.15),
          lowesttemp6:parseInt(res.list[5].main.temp_min-272.15),
          gun6:gunler[gunlersayi[5]],
          weather6:res.list[5].weather[0].main,
          icon6:res.list[5].weather[0].icon,
           
          highesttemp7:parseInt(res.list[6].main.temp_max-272.15),
          lowesttemp7:parseInt(res.list[6].main.temp_min-272.15),
          gun7:gunler[gunlersayi[6]],
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
      <div className="card today" >
        
  <img src={`https://openweathermap.org/img/wn/${obj.icon1}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun1}</h5>
  <p className="card-text">{obj.weather1}</p>
  <p className="card-text-cel">Max: {obj.highesttemp1}°<br/> Min: {obj.lowesttemp1}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon2}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun2}</h5>
  <p className="card-text">{obj.weather2}</p>
  <p className="card-text-cel">Max: {obj.highesttemp2}° <br/>Min: {obj.lowesttemp2}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon3}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun3}</h5>
  <p className="card-text">{obj.weather3}</p>
  <p className="card-text-cel">Max: {obj.highesttemp3}° <br/>Min: {obj.lowesttemp3}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon4}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun4}</h5>
  <p className="card-text">{obj.weather4}</p>
  <p className="card-text-cel">Max: {obj.highesttemp4}° <br/>Min: {obj.lowesttemp4}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon5}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun5}</h5>
  <p className="card-text">{obj.weather5}</p>
  <p className="card-text-cel">Max: {obj.highesttemp5}°<br/> Min: {obj.lowesttemp5}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon6}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun6}</h5>
  <p className="card-text">{obj.weather6}</p>
  <p className="card-text-cel">Max: {obj.highesttemp6}° <br/>Min: {obj.lowesttemp6}°</p>
</div>
</div>
<div className="card" >
  <img src={`https://openweathermap.org/img/wn/${obj.icon7}.png`} className="card-img-top" alt="..." style={{width:"50px",margin:"0 auto"}}/>
  <div className="card-body">
  <h5 className="card-title"> {obj.gun7}</h5>
  <p className="card-text">{obj.weather7}</p>
  <p className="card-text-cel">Max: {obj.highesttemp7}°<br/> Min: {obj.lowesttemp7}°</p>
</div>
</div>
<span >Mehmet Akif Kömürcü - 2022</span>

      </div>



  
    </div>
  

  )
}

export default Fetch

