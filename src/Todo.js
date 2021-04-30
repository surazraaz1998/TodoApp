import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText } from '@material-ui/core';
function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={props.text} secondary='Dummy Dealine🤢👀'/>
            </ListItem>
        </List>
        // <div>
        //    <li>{props.text}</li> 
        // </div>
    )
}

export default Todo
