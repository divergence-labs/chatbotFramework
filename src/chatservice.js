import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import App from './App'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStylesforModal = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

function handlefile(e){

  let file = e.target.files[0];
  handleUpload(file)
}

function handledocumentation(){

  window.location = "./documentation";
}

function handleUpload(file){
  console.log(file);
  let formData = new FormData();
  formData.append('config',file)
  axios({
    url:'https://chatbot-platform.azurewebsites.net/upload/dialogflow/configfile',
    method: 'POST' ,
    data: formData
  }).then((res) => {
    console.log("success")
  })
}

export default function ButtonAppBar() {

  const classes = useStyles();
  const classesforModal = useStylesforModal();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit" onClick={handledocumentation}>Documentation</Button>
          <Button color="inherit" onClick={handleOpen}>Settings</Button>
          <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classesforModal.paper}>
        <p> <b>DialogFlow Configuration File</b></p><br/>
         <label> Select File </label>
         <input type ="file" name = "file" onChange={(e) => handlefile(e)}></input><br></br>
        </div>
      </Modal>
        </Toolbar>
      </AppBar>
      <App/>
    </div>  
  );
}
