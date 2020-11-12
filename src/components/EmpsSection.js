import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmpItem from './EmpItem';
import inputActions from '../redux/actions/inputActions';
import './EmpsSection.style.css';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputPhn(item.phn));
      dispatch(inputActions.setInputName(item.name));
        dispatch(inputActions.setInputEmail(item.email));
    dispatch(inputActions.setInputSalary(item.salary));
    dispatch(inputActions.setInputAddr(item.addr));
    dispatch(inputActions.setInputDeg(item.deg));
    document.documentElement.scrollTop = 0; 
  }


  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p className="noemp">No Employees ,Please Add</p>
      </div>  
    )
  }
  else
  {
    return(
      <div className="empdet">
      <div className="NotesSection__container__empty">
        <h6 className="noemp">Click on row to update or remove</h6>
       </div> 
      <div>
          <thead className="tbhead">
          <tr>
            <td>Name</td>
            <td className="email" >Email</td>
            <td className="addr">Address</td>
            <td className="phn">Phone </td>
            <td className="deg">Role</td>
            <td className="salary">Salary</td>
          </tr>
          </thead>
          </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-condensed">
         <tbody>
          <React.Fragment>
           {notes.map((item,index) => (
                  <EmpItem 
                    phn={item.phn}
                  deg={item.deg}
                  name={item.name}
                   email={item.email}
                  salary={item.salary}
                  addr={item.addr}
                  onItemClicked={() => {
                    onItemClicked(item, index);
                  }}
                  />
             ))}
          </React.Fragment>
        
            </tbody>
        </table>
        </div>
        </div>
      )
  }


}

 

export default NotesSection;








