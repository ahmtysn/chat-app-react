import React from 'react';

const SideBarInfo = ({ users }) => (
  <div>
    {users && (
      <div>
        <h1>People currently chatting:</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    )}
  </div>
);

export default SideBarInfo;
