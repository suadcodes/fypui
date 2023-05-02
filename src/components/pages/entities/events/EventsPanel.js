import {useState} from 'react';
import ObjectTable from '../../PageLayout/ObjectTable';
import Panel from '../../PageLayout/Panel.js';
import Action from '../../PageLayout/Actions.js'
import ToolTipDecorator from '../../PageLayout/ToolTipDecorator.js';
import EventForm from './EventForm.js';
import API from '../../../api/API';
import Modal from '../../PageLayout/Modal';

export default function EventsPanel({events,reloadevents})
{

const puteventEndpoint = '/events';
const deleteeventEndpoint = '/events';

const displayableattributes=[
{key:'Venue',label: 'Gym'},
{key:'Date', label: 'Date'},
{key:'LocalBoxer',label: 'Local Boxer: '},
{key:'ForeignBoxer',label: 'Foreign Boxer:'}
 ];

const {handleModal}= Modal.useModal();

const [selectedForm,setSelectedForm]= useState(0);
const handleUpdate=(id)=>setSelectedForm(selectedForm === id ? 0: id);

 const handleDelete = async (id)=>{
  const response = await API.delete(`${deleteeventEndpoint}/${id}`);
  response.isSuccess 
  ? reloadevents()
  : showErrorModal("Delete failed", response.message);
 }
 const handleSubmit= async (e)=>{
  const response = await API.put(`${puteventEndpoint}/${e.EventID}`,e);
  if (response.isSuccess){
    setSelectedForm(0);
    reloadevents();
  }

 }
 const handleCancel=()=> setSelectedForm(0);

 const dismissModal =()=> handleModal({show:false});

 const showDeleteModal=(id)=> handleModal({
  show:true,
  title:"Alert!",
  content:<p> Are you sure you want to delete this event?</p>,
  actions: [
    <ToolTipDecorator key="ActionYes" message="Click to confirm deletion">
      <Action.Yes showText onClick={() => handleDelete(id)} />
    </ToolTipDecorator>,
    <ToolTipDecorator key="ActionNo" message="Click to abandon deletion">
      <Action.No showText onClick={dismissModal} />
    </ToolTipDecorator>
  ]

 });
 
 const showErrorModal = (title,message)=> handleModal({
  show:true,
  title:title,
  content:<p>{message}</p>,
  actions:[
    <Action.Close showText onClick={dismissModal}/>
  ]
 })


  return(
    <Panel.Container>
        {
            events.map((e) =>
             <Panel 
             key={e.EventID} 
             title ={`${e.LocalBoxer} ${`vs `}${e.ForeignBoxer}`} 
             level={4}>
                <Panel.Static level={4}>
                 <ObjectTable object={e} attributes={displayableattributes} />
                </Panel.Static>
                <Action.Tray>
                  <ToolTipDecorator message="Modify this fight">
                   <Action.Modify showText onClick={()=> handleUpdate(e.EventID)} buttonText="Modify match" />
                  </ToolTipDecorator>
                  <ToolTipDecorator message="Delete this fight">
                    <Action.Delete showText onClick={()=>showDeleteModal(e.EventID)} buttonText="Delete match"/>
                  </ToolTipDecorator>
                </Action.Tray>
        
        {
        (selectedForm === e.EventID) &&
        <EventForm 
        initialEvent= {e}
        onCancel={handleCancel} 
        onSubmit={handleSubmit} 
        />
        }
              </Panel>
                 )
                        }
             </Panel.Container> 
    );
}