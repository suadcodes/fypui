import useLoad from "../../../api/useLoad.js";
import EventsPanel from './EventsPanel.js';

export default function Allupevents(){ 
const endpoint = '/UpcomingEvents';
const[events,theloadingMessage,loadevents]= useLoad(endpoint);
return(
    <section style={{paddingTop:'10px'}}> 
         <h1>All Upcoming Fights</h1>

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