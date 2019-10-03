import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Google Dialogflow Setup and Configuration', 'Dialogflow Training', 'Connectivity with Bot Connect', 'Configuration Binding'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <p>1. Please login dialogflow using below-mentioned link and on successful login navigate to the console. <br/> &nbsp;&nbsp; &nbsp; <a href="https://dialogflow.com">https://dialogflow.com</a>
              <br/>
              <br/>
              2. Create a new agent to start with NLP service.
              <br/>
              <br/>
              3. Copy client key after successful creation of agent.
              </p>
    case 1:
      return <p>1. Create new intent to add utterances.
              <br/>
              <br/>
              2. Save the intents after adding utterances and it will automatically train the agent.
              </p>;
    case 2:
      return  <p>
        1. git clone <a href="https://github.com/anantha-marlabs/chatbotComponent.git">https://github.com/anantha-marlabs/chatbotComponent.git</a>
        <br/><br/>
        2. npm install
        <br/><br/>
        3. npm start
      </p>


    case 3:
      return <p>
        1. Click setting and upload config.js file as per below. 
        <br/><br/>
        <img src= 'https://chatbot-platform.azurewebsites.net/images/dialogflow_snippet.png ' height ="100px" alt=''></img>
        <br/><br/>
      2. Done. You are ready to use the chatbot.

      </p>
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

