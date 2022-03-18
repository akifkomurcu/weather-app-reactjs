import {useContext} from 'react'
import { CityContext } from './Context/Context';
function Vericek() {


    const {coordinates,setCoordinates}=useContext(CityContext);

console.log(coordinates);
  return (
    <div>{coordinates}</div>
  )
}

export default Vericek