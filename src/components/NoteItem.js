import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({ phn, salary,name, email,addr,deg,onItemClicked}) => {
  return (
    <div
     className="NoteItem__container"
     
      >
      <p> Name-:{name}</p>
      <p>Email-:{email}</p>
      <p>Role-:{deg}</p>
      <p>Address-:{addr}</p>
      <p>Salary-:{salary}</p>
      <div className="row">
        <div className="col-md-4">
           <button className="btn btn-success">Update</button>
        </div>
        <div className="col-md-4">
           <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
