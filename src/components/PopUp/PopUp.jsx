'use client'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import ContactForm from '../ContacForm/ContactForm';


export default function PopUp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button   variant="outlined"
    onClick={handleClickOpen}
    style={{
    fontFamily: 'Montserrat, sans-serif',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: 0,
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '17px',
    position: 'absolute',
    cursor: 'pointer',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}>
        CONTACTANOS
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <ContactForm handleClose={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{
    fontFamily: 'Montserrat, sans-serif',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    borderRadius: 0,
    fontSize:'10px',
    padding: '6px 10px'}}>
            Cancelar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}