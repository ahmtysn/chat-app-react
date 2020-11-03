import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [filled, setFilled] = useState(false);

  const getName = e => {
    const value = e.target.value;
    if (value.trim()) {
      setName(value);
    }
  };

  const getRoom = e => {
    const value = e.target.value;
    if (value.trim()) {
      setRoom(value);
    } else {
      setRoom('');
    }
  };

  useEffect(() => {
    if (name && room) {
      setFilled(true);
    }
  }, [name, room]);

  return (
    <Grid container className='App'>
      <Grid item container xs={12} alignItems='center' className='home-header'>
        <Grid item xs={8}>
          <Typography variant='h3' gutterBottom>
            Welcome to Coders Chat
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6' gutterBottom>
            @ahmtysn
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            Rotterdam Area, NL
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} className='home-body'>
        <h2>Join</h2>
        <FormControl>
          <Select onChange={getRoom}>
            <MenuItem value=''>None</MenuItem>
            <MenuItem value='JavaScript'>JavaScript</MenuItem>
            <MenuItem value='Python'>Python</MenuItem>
            <MenuItem value='PHP'>PHP</MenuItem>
            <MenuItem value='Java'>Java</MenuItem>
            <MenuItem value='C#'>C#</MenuItem>
            <MenuItem value='Library'>Library</MenuItem>
            <MenuItem value='FrameWork'>FrameWork</MenuItem>
            <MenuItem value='Packages'>Packages</MenuItem>
          </Select>
          <FormHelperText>
            Find other develepors with one click !
          </FormHelperText>
        </FormControl>
        <form>
          <div style={{ margin: '20px' }}>
            <TextField placeholder='Name' type='text' onChange={getName} />
          </div>
          <Link to={filled && `/chat?name=${name}&room=${room}`}>
            <Button type='submit' variant='contained'>
              Join Chat
            </Button>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}
