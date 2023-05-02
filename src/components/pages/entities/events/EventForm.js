import useLoad from "../../../api/useLoad.js";
import Form from "../../PageLayout/Form.js";

const emptyevents ={
    EventID:0,
    Venue:"DummyVenue",
    boxer1: "Suad",
    boxer2:"Taiiii",
    Date:""
};

export default function EventForm({onCancel, onSubmit, initialEvent= emptyevents}){

//Initialisation
const validation = {
    isValid :{
    Venue: (name) => name.length >2,
    boxer1: (name) => name.length >2,
    boxer2: (name) => name.length >2,
},
    errorMessage :{
    Venue: "Too Short",
    Boxer1Name: "Invalid",
    Boxer2name: "Invalid"

}}

const conformance = ['boxer1','boxer2'];
//State
const[events, errors,handleChange, handleSubmit] = Form.useForm(initialEvent, conformance, validation, onCancel, onSubmit);
const[venues, loadingVenueMessage]= useLoad('/Venue');
const[boxer1, loadingBoxer1Message]= useLoad('/LocalBoxer');
const[boxer2, loadingBoxer2Message]= useLoad('/ForeignBoxer');



//View
return(
     <Form onSubmit={handleSubmit} onCancel={onCancel} >
        <Form.Item 
        //label="Venue"
        htmlFor="Venue"
        advice="Select Venue"
        error={errors.Venue}
      >
        {
          !venues
            ? <p>{loadingVenueMessage}</p>
            : venues.length === 0
              ? <p>No Venue found</p>
              : <select
                  name="Venue"
                  value={events.Venue}
                  onChange={handleChange}
                >
                  <option value="0" disabled>None selected</option>
                  {
                    venues.map((venue) => <option key={venue.Venue} value={venue.Venue}>{venue.Venue}</option>)
                  }
                </select>
        }
      </Form.Item>
      <Form.Item
          htmlFor="Date"
          advice="The Date "
          >
          <input 
          type="Date"
          name="Date"
          placeholder="Date"
          value={events.Date}
          onChange={handleChange}
          />
      </Form.Item>
      <Form.Item
        htmlFor="LocalBoxer"
        advice="Boxer 1"
        error={errors.Player1name}
      >
        {
          !boxer1
            ? <p>{loadingBoxer1Message}</p>
            : boxer1.length === 0
              ? <p>No name found</p>
              : <select
                  name="boxer1"
                  value={events.boxer1}
                  onChange={handleChange}
                >
                 <option value="0" disabled>None selected</option>

                  {
                    boxer1.map((boxer11) => <option key={boxer11.LocalBoxer} value={boxer11.LocalBoxer}>{boxer11.LocalBoxer}</option>)
                  }
                </select>
        }
      </Form.Item>
        <Form.Item 
        htmlFor="ForeignBoxer"
        advice="Boxer 2"
        error={errors.Boxer1Name}
      >
        {
          !boxer2
            ? <p>{loadingBoxer2Message}</p>
            : boxer2.length === 0
              ? <p>No name found</p>
              : <select
                  name="boxer2"
                  value={events.boxer2}
                  onChange={handleChange}
                >
                   
                   <option value="0" disabled>None selected</option>
                  {
               
                    boxer2.map((boxer) => 
                    <option key={boxer.ForeignBoxer}
                    
                    value={boxer.ForeignBoxer}>
                      {boxer.ForeignBoxer}</option>)
                  }
                </select>
        }
      </Form.Item>
      
     
    </Form>

);

}