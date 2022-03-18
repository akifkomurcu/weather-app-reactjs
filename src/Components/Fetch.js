import { Formik  } from "formik";
import { useState,useEffect } from "react";
import axios from 'axios'
function Fetch() {
    const [city,setCity]=useState("sivas");
    const [coordinates,setCoordinates]=useState({});

    useEffect(()=>{
        axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e77064823525169898f77090bfe7c5ee`).then((res)=>setCoordinates({lat:res.data[0].lat,lon:res.data[0].lon}))
    },[city])

  
    return (
    <div>

<Formik
        initialValues={{ CityVal: ""}}
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
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
           )
       }
      </Formik>

       coordinates: 
       <br />
       {coordinates.lat}
       <br />
       {coordinates.lon}

    </div>
  )
}

export default Fetch