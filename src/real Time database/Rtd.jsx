import React from 'react'
import { getDatabase ,ref, set } from "firebase/database";
import {app} from '../firebase'


const Rtd = () => {
  const db = getDatabase(app);
  const putdata = ()=>{
    set(ref(db, 'users/ayush'), {
      id:1,
      name: "Ayush__069",
      age: "18"
    })
  }
  return (
    <div>
      
      <button onClick={putdata}>Put data</button>
    </div>
  )
}

export default Rtd
