import './Processes.css';
import Icon from '@mdi/react'
import { Link } from 'react-router-dom';
import { mdiRefresh } from '@mdi/js';
import {  interpret } from 'xstate';
import ProcessStateMachine from './ProcessesState';

export default function Processes () {
  const dogService = interpret(ProcessStateMachine())
    .onTransition((state) => console.log(state.value, state))
    .start();
    dogService.send('FETCH');
    
    console.log(dogService.state.value, dogService.state.context)
    return (
      <div className="Page ProcessList">
        <h1>Processes
        <Link to="/accounts/create">
          <Icon className="MenuAddIcon" path={mdiRefresh}
              title="Add Acccount"
              size={1} />
          </Link>
        </h1>
        <div className="ProcessListContainer">
          <table>
            <thead>
              <tr>
              <th>Process ID</th>
              <th>Account</th>
              <th>Launch Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1255</td>
                <td>Example1</td>
                <td>7/3/21 1:35pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="PageToolTip">Page Tooltip</p>
      </div>
    );
  };