import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.css';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const phn = useSelector(state => state.inputs.phn);
   const salary = useSelector(state => state.inputs.salary);
   const deg = useSelector(state => state.inputs.deg);
  const addr = useSelector(state => state.inputs.addr);
   const name = useSelector(state => state.inputs.name);
    const email = useSelector(state => state.inputs.email);
   const [error,setError]=useState(false)
  const dispatch = useDispatch();

  const addNote = () => {
    
    if(name && phn && email && deg && salary && addr) {
      dispatch(noteActions.addNote({
        phn,
        deg,
        name,
        email,
        salary,
        addr
      }))
      dispatch(inputActions.resetInputs())
      setError(false)
    }
    else if(name==='' || email==='' || phn==='' || salary==='' || addr==='' || deg==='')
    {
          setError(true)
    }
    console.log(phn,addr,deg,salary,name,email)
  }

  const updateNote = () => {
    if(name && email && phn && salary && deg && addr) {
      dispatch(noteActions.updateNote(id, {
        name, email,phn,salary,deg,addr
      }))
      dispatch(inputActions.resetInputs())
    }    
  }


  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

const showerror=()=>
{
  if(error)
  {
   return(
    <div className="alert alert-danger">
      <h6 >All fields are required</h6>
    </div>
    ) 

  }
  
}
  return (
    <div className="InputSection__container">
   
    <h6>EMPLOYEE  FORM</h6>
    {showerror()}
       <input
        className="form-control"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => 
          dispatch(inputActions.setInputName(e.target.value))
        }
      />
      
      <input
         className="form-control"
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => 
          dispatch(inputActions.setInputEmail(e.target.value))
        }
      />
      <input
        className="form-control"
        type="number"
        placeholder="Phone"
        value={phn}
        onChange={e => 
          dispatch(inputActions.setInputPhn(e.target.value))
        }
      />
      <input
        className="form-control"
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={e => 
          dispatch(inputActions.setInputSalary(e.target.value))
        }
      />
       <input
         className="form-control"
        type="text"
        placeholder="Address"
        value={addr}
        onChange={e => 
          dispatch(inputActions.setInputAddr(e.target.value))
        }
      />
      <input
         className="form-control"
        type="text"
        placeholder="Designation"
        value={deg}
        onChange={e => 
          dispatch(inputActions.setInputDeg(e.target.value))
        }
      />
     
      <div >
        <button
        className="btn btn-primary"
          onClick={id === -1 ? addNote : updateNote}

        >
          {id === -1 ? "ADD NEW EMPLOYEE" : "UPDATE"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={{ marginLeft: '1em'}}
            className="btn btn-danger"
          >
            DELETE 
          </button>
        }
         
      </div>
    </div>
  );
};

export default InputSection;
