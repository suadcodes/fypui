import React, {useState,useEffect} from 'react';
import Allupevents from '../entities/events/Allupevents.js';
import AccountInfo from '../entities/events/AccountInfo.js';
import Action from '../PageLayout/Actions.js'
import ToolTipDecorator from '../PageLayout/ToolTipDecorator.js';
import EventForm from '../entities/events/EventForm.js';
export default function HomePage(){

// State
const[upevents,loadallupevents]= useState(true);
const [newevent,setNewEvent]= useState(false);
const handleAdd =() =>setNewEvent(true);
//View
    return (
        <section>
        <Action.Tray>          
            <ToolTipDecorator message="Create an event">
                <Action.Add showText onClick={handleAdd} buttonText="Create a match" />
            </ToolTipDecorator>
            
        </Action.Tray>
        {
            newevent && <EventForm/>
        }
         <div className="row">
        <div className="col-md-12">
          {
            upevents && <Allupevents />
          }
        </div>
        </div>
        </section>
      
    );
}

