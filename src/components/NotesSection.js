import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
      dispatch(inputActions.setInputName(item.name));
        dispatch(inputActions.setInputEmail(item.email));
    dispatch(inputActions.setInputContent(item.content));
  }


  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p className="noemp">No Employees ,Please Add</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if(item) {
          return (
            <NoteItem

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
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
