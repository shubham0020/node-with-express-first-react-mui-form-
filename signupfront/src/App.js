import React, { useContext } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper, StepLabel,Step } from '@material-ui/core';
import { MultiStepContext } from './StepContext';
import DisplayData from './Components/DisplayData';
//import "bootstrap/dist/css/bootstrap.min.css";
//mport {Routes, Route} from "react-router-dom";
//import Home from './pages/home'; 

function App(){
      const {currentStep, finalData} = useContext(MultiStepContext);
    function showStep(step){

      switch(step){
          case 1:
            return <FirstStep/>
          case 2:
            return <SecondStep/>
          case 3:
            return <ThirdStep/>
      } 
    }

    return (
      <div className='App'>
              <header className='App-header' style={{ background:'#f5f5f5'}}>
                <h3 style={{ color:'red' ,textDecoration:'underline'}}>React From</h3>

                    <div className='center-stepper'>
                        <Stepper style={{width: '100%'}} activeStep={ currentStep - 1 } orientation='horizontal'>
                            <Step>
                                  <StepLabel></StepLabel>
                            </Step>
                            <Step>
                                  <StepLabel></StepLabel>
                            </Step>
                            <Step>
                                  <StepLabel></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                        { showStep(currentStep) }
                  <span><br/></span>
                   {finalData.length == 0 ? <DisplayData/> : ''}    
                    
              </header>
        </div>
    )
}

export default App;