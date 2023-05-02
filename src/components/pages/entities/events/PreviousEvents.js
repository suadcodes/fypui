import useLoad from "../../../api/useLoad.js";
import EventsPanel from '../events/EventsPanel.js';

export default function Allpreviousevents(){ 
const endpoint = '/PrevEvents';
const[events,theloadingMessage,loadevents]= useLoad(endpoint);
return(
    <section style={{paddingTop:'10px'}}> 
         <h1>Previous Matches handled</h1>

    {
            !events
                ? <p>{theloadingMessage}</p>
                : events.length === 0
                    ? <p> No events found</p>
                    :<EventsPanel events={events} reloadevents={()=>loadevents(endpoint)} />      
        }
    </section>
);
}
