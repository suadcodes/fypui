import React, {useState,useEffect} from 'react';
//import RenderCount from '../RenderCount.js';
import API from '../../api/API.js';
import EventsPanel from '../entities/events/EventsPanel.js';
import ToolTipDecorator from '../PageLayout/ToolTipDecorator.js';
import EventForm from '../entities/events/EventForm.js';
import Alleventslist from '../entities/events/Allevents.js';
import JoinEventForm from '../entities/events/JoinEventForm.js';
import Action from '../PageLayout/Actions.js'
import useLoad from '../../api/useLoad.js';

export default function Events(){

// State
const [loadingMessage,setLoadingMessage] = useState('Loading records...');
const [newevent,setNewEvent]= useState(false);
const [joinEventForm,setJoinEventForm]= useState(false);
const[allevents,loadallevents]= useState(true);

const handleAdd =() =>setNewEvent(true);
const handleJoin =() =>setJoinEventForm(true);
const handleAllEvents=() => loadallevents(true);
//View
    return (
        <section>
          <h1>All Matches</h1>
        <Action.Tray>          
            <ToolTipDecorator message="Create an event">
                <Action.Add showText onClick={handleAdd} buttonText="Create a match" />
            </ToolTipDecorator>
            
        </Action.Tray>
        {
            newevent && <EventForm/>
        }
       
        {
            allevents && <Alleventslist/>
        }
        </section>
      
    );
}

