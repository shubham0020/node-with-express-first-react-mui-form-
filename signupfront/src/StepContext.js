import React, { useState } from 'react';
import App from './App';
import axios from 'axios';
export const MultiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");

    function submitData(){

      if (userData.firstname.length > 1 && userData.contact.length === 10   && userData.email.length > 1) {
        //
       
        const url = 'http://localhost:4000/app/signup';
        const reactData = { fullName: userData.firstname, username: userData.lastname, email: userData.email, password: userData.contact };
        console.log(reactData,'data')
        axios.post(url, reactData)
           .then(res => console.log('Data send'))
           .catch(err => console.log(err.data))
        

        //
        setFinalData(finalData=>[...finalData, userData]);
        setUserData('');
        
        setStep(1);
      }else{
        setErrorMessage(
          "All * fields are required"
        );
        setStep(1);
      }
      
            
    }

  return (
    <div>
            <MultiStepContext.Provider value={{currentStep,setStep, userData, setUserData, finalData, setFinalData, submitData, errorMessage, setErrorMessage}}>
                <App />
            </MultiStepContext.Provider>
    </div>
  )
}

export default StepContext;