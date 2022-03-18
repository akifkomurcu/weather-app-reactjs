import { createContext,useState,useEffect } from "react";



const CityContext =createContext();

export const CityProvider = ({children})=>{
    const [city,setCity]=useState("sivas");

    const [coordinates,setCoordinates]=useState({});
    
    useEffect(()=>{
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e77064823525169898f77090bfe7c5ee`).then((res)=>res.json()).then((data)=> setCoordinates({lat:data[0].lat,lon:data[0].lon}))
    },[city])




    const values={coordinates,setCoordinates}
    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}
export default CityContext;