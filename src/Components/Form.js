import cities from '../cities.json'
import Fetch from './Fetch'
import {useState} from 'react'


function Form() {
    
 
    const [result,setResult]=useState({
      "name": "adana",
      "latitude": "37.00167",
      "longitude": "35.32889",
      
    })
    const [form,setForm]=useState(result)
    const onChangeInput=(e)=>{
      
     setResult(cities.find(cities=>cities.name===form.name))
      console.log(result)
     
    }
  return (
   
      <div>
        
       
        <select name={ form.name } onChange={(e)=>setForm({ name:e.target.value})}>
            {cities.map((e,i)=>(
              <option key={i} value={e.name}>{e.name}</option>
            ))}
        </select>
        <br />
        <button style={{marginTop:"10px"}} type='submit' className='btn btn-primary' onClick={onChangeInput}>GONDER</button>
        
      <br />
      
        <Fetch result={result}/>
      </div>

  )
  
}

export default Form