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
            Welcome to Free Chat App
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
            <MenuItem value='Relation'>Relation</MenuItem>
            <MenuItem value='Family'>Family</MenuItem>
            <MenuItem value='Activity'>Activity</MenuItem>
            <MenuItem value='Secret'>Secret</MenuItem>
            <MenuItem value='Technology'>Technology</MenuItem>
            <MenuItem value='Hobby'>Hobby</MenuItem>
            <MenuItem value='Cinema'>Cinema</MenuItem>
            <MenuItem value='Others'>Others</MenuItem>
          </Select>
          <FormHelperText>Select or create your special room!</FormHelperText>
        </FormControl>
        <form>
          <div style={{ margin: '20px' }}>
            <TextField placeholder='Name' type='text' onChange={getName} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <TextField
              placeholder='Room'
              value={room}
              type='text'
              onChange={getRoom}
            />
          </div>
          <Link to={filled && `/chat?name=${name}&room=${room}`}>
            <Button type='submit' variant='contained' color='primary'>
              Join Chat
            </Button>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
}
