import React from 'react';
import Typography from '@material-ui/core/Typography';

const SideBarInfo = ({ users, messages }) => {
  return (
    <div style={{ padding: '30px' }}>
      {users && messages && (
        <div>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <img
              style={{ width: '40%' }}
              src='https://cdn3.iconfinder.com/data/icons/communication-media-malibu-vol-1/128/mobile-messaging-512.png'
              alt='chat-logo'
            />
            <Typography variant='h5' gutterBottom>
              Online Users
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              {users.map(({ name }) => (
                <div
                  key={name}
                  style={{
                    color: '#333',
                    backgroundColor: '#f3f3f3',
                    borderRadius: '20px',
                    padding: '10px',
                    marginBottom: '2px',
                  }}
                >
                  {name}
                </div>
              ))}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBarInfo;
