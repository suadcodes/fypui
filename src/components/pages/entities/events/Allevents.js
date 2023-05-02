import useLoad from "../../../api/useLoad.js";
import EventsPanel from '../events/EventsPanel.js';

export default function Alleventslist(){ 
const endpoint = '/events';
const[events,theloadingMessage,loadevents]= useLoad(endpoint);
return(
    <section> 
   
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
