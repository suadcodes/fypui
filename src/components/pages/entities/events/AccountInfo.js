import useLoad from "../../../api/useLoad.js";
import '../../scss/AccountInfo.scss';
export default function AccountInfo(){ 

const[infoData, setInfoData, loadingMessage, loadEvents]= useLoad('/Referees');
return(
    <section> 
    <h1>Account Information</h1>
    <div className="grid">
        {infoData && infoData.map((info) => (
          <div className="info" key={info.Name}>
             <p className="name">Full Name : {info.Name}</p>
            <p className="EM">Email Address : {info.Email_Address}</p>
            <p className="AD">Home Address : {info.Address}</p>
            <p className="PH">Phone Number : {info.Phone_Number}</p>
          </div>
        ))}
      </div>
</section>
   
);
}