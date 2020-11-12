import React from 'react';
import './EmpItem.styles.css';

const NoteItem = ({ phn, salary,name, email,addr,deg,onItemClicked}) => {
  return (
    <div >
   
     <tr
     role="button"
      onClick={onItemClicked}>
      
      <td>{name}</td>
       <td>{email}</td>
        <td>{addr}</td>
         <td>{phn}</td>
     <td>{deg}</td>
      <td>{salary}</td>
     </tr>
      </div>
  );
};

export default NoteItem;

