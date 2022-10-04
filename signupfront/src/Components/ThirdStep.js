import React from 'react';
import { Button,TextField } from '@material-ui/core';
import { MultiStepContext } from '../StepContext';
import { useContext } from 'react';

export default function ThirdStep() {
    const {setStep, userData,  setUserData, submitData } = useContext(MultiStepContext);
  return (
    <div>
        <div>
            <TextField label="City" value={userData['city']} onChange= {(e)=>setUserData({...userData, "city":e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
            
        <div>    
            <TextField label="Landmark" value={userData['landmark']} onChange= {(e)=>setUserData({...userData, "landmark":e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>

        <div>   
            <TextField label="Address" value={userData['address']} onChange= {(e)=>setUserData({...userData, "address":e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div> 
          
        <div>  
            <Button  variant="contained" color="secondary" onClick={()=>setStep(2)}>Back</Button> <span></span>
            <Button type="submit" variant="contained" color="primary" onClick = {submitData}>Submit</Button>
        </div>  

    </div>
  )
}
 