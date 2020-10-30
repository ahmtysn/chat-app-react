import React, { useEffect } from 'react';

import ReactEmoji from 'react-emoji';

import Grid from '@material-ui/core/Grid';

const Message = ({ message: { user, text, time }, name }) => {
  let sentByUser = false;

  if (user === name) {
    sentByUser = true;
  }

  return (
    <Grid container>
      <p>{sentByUser ? name : user}</p>
      <p>{time}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </Grid>
  );
};

export default Message;
