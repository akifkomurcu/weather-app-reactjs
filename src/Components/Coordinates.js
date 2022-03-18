import { Formik  } from "formik";
import CityVal from "./CityVal";
import { useState,useEffect } from "react";
import axios from 'axios'
function Fetch() {
    const [city,setCity]=useState("sivas");
    const [coordinates,setCoordinates]=useState({});

    useEffect(()=>{
        axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=92ac4c4cde9401b43a5dc6a529ab57c6`).then((res)=>setCoordinates({lat:res.data[0].lat,lon:res.data[0].lon}))
    },[city])


    return (
    <div>

<Formik
        initialValues={{ CityVal: "sivas"}}
        onSubmit={ (values) => {
            setCity(values.CityVal)
          
        }}
      >
       {
           ({handleSubmit,handleChange,values})=>(
            <form onSubmit={handleSubmit}>
          
            <select name="CityVal" value={values.CityVal} onChange={handleChange}>
              <option value="sivas">Sivas</option>
              <option value="istanbul">İstanbul</option>
            </select>
            <br />
            <button type="submit" onSubmit={handleSubmit}>Gönder</button>
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
           )
       }
      </Formik>
        {coordinates.lat}
        <br></br>
        {coordinates.lon}

       <CityVal coordinates={coordinates} city={city}/>

    </div>
  )
}

export default Fetch