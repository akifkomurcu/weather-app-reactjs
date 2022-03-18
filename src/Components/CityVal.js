import axios from 'axios'
import {useEffect,useState} from 'react'

function CityVal({coordinates,city}) {

    const [Info,setInfo]=useState([])
    useEffect(()=>{

        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=92ac4c4cde9401b43a5dc6a529ab57c6`).then((res)=>console.log(res.data))
    },[coordinates])
  return (
    <div>

{/* {
    Info.map((element,index)=>
    (
    <div key={index}>{element.current}</div>
    ))} */}


    </div>
  )
}

export default CityVal

