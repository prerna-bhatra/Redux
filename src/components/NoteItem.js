import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({ phn, salary,name, email,addr,deg,onItemClicked}) => {
  return (
    <div
    className="NoteItem__container"
      role="button"
      onClick={onItemClicked}
      >
      <p> Name-:{name}</p>
      <p>Email-:{email}</p>
      <p>Role-:{deg}</p>
      <p>Address-:{addr}</p>
      <p>Salary-:{salary}</p>
      </div>
  );
};

export default NoteItem;

