import React, {useState,useEffect} from 'react';
import Allpreviousevents from '../entities/events/PreviousEvents.js';
import AccountInfo from '../entities/events/AccountInfo.js';

export default function ProfilePage(){

// State
const[events,loadevents]= useState(true);

//View
    return (
        <section>
            <div className="row1">
        <div className="col-md-6">
          <AccountInfo />
        </div>
      </div>
        <hr />
      <div className="row">
        <div className="col-md-12">
          {
            events && <Allpreviousevents  />
          }
        </div>
        </div>
        </section>
      
    );
}

