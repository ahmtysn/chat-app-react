import React from 'react';
import Typography from '@material-ui/core/Typography';

const SideBarInfo = ({ users, messages }) => {
  return (
    <div style={{ padding: '30px' }}>
      {users && messages && (
        <div>
          <div style={{ textAlign: 'center', color: '#29735d' }}>
            <Typography
              variant='h5'
              gutterBottom
              style={{
                fontWeight: 'bolder',
                borderTop: '2px solid #29735d',
                borderBottom: '2px solid #29735d',
                padding: '10px',
                marginBottom: '10%',
              }}
            >
              Online Users
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              {users.map(({ name }) => (
                <div
                  key={name}
                  style={{
                    color: '#333',
                    backgroundColor: '#f3f3f3',
                    borderRadius: '10px',
                    fontWeight: 'bolder',
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
