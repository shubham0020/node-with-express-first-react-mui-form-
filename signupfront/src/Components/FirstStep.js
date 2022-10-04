import React from 'react';
import { Button,TextField } from '@material-ui/core';
import { MultiStepContext } from '../StepContext';
import { useContext } from 'react';

export default function FirstStep() {
    const {setStep, userData,  setUserData, errorMessage} = useContext(MultiStepContext);
  return (
    <div>
        <div>
            <TextField label="First name"
             id="outlined-error"
       helperText={errorMessage} 
      
      value={userData['firstname']} onChange= {(e)=>setUserData({...userData, "firstname":e.target.value})} margin="normal" variant="outlined" color="secondary" required/>
        </div>
            
        <div>    
            <TextField label="Last name" value={userData['lastname']} onChange= {(e)=>setUserData({...userData, "lastname":e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>

        <div>   
            <TextField label="Contact No 10 Digit only" type="number" value={userData['contact']} onChange= {(e)=>setUserData({...userData, "contact":e.target.value})} margin="normal" variant="outlined" color="secondary" required/>
        </div> 
          
        <div>  
            <Button  variant="contained" color="primary" onClick={ () => setStep(2) }>Next</Button>
        </div>  

    </div>
  )
}
 