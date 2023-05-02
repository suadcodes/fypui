import PropTypes from 'prop-types';
import Icon from './Icons.js';
import '../scss/Actions.scss';

export default function Action({ children, onClick, showText, buttonText }) {
  return (
    <button className="Action" onClick={onClick}>
      {children} {showText && <p>{buttonText}</p>}
    </button>
  );
}
Tray.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  }
  
  export function Tray({children}) {
    return (
      <div className="ActionTray">
        { children }
      </div>
    );
  }

  Action.propTypes = {
    onClick: PropTypes.func.isRequired,
    showText: PropTypes.bool,
    buttonText: PropTypes.string.isRequired,
  };
  
 /* function ActionButton({ children, onClick, showText, buttonText }) {
    return (
      <button className="Action" onClick={onClick}>
        {children} {showText && <p>{buttonText}</p>}
      </button>
    );
  }
  */
  const ActionPropTypes = {
    onClick: PropTypes.func.isRequired,
    showText: PropTypes.bool
  };
  
  Add.propTypes = ActionPropTypes;
  
  export function Add({ onClick, showText=false, buttonText="Add"}) {
    return (
      <Action buttonText={buttonText || "Add"} onClick={onClick} showText={showText} >
        <Icon.Plus />
      </Action>
    );
  }
  
  Close.propTypes = ActionPropTypes;
  
  export function Close({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Close"} onClick={onClick} showText={showText} >
        <Icon.Cross />
      </Action>
    );
  }
  
  Delete.propTypes = ActionPropTypes;
  
  export function Delete({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Delete"} onClick={onClick} showText={showText} >
        <Icon.Trash />
      </Action>
    );
  }
  
  Favourites.propTypes = ActionPropTypes;
  
  export function Favourites({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Favourite"} onClick={onClick} showText={showText} >
        <Icon.RedHeart />
      </Action>
    );
  }
  
  ListAll.propTypes = ActionPropTypes;
  
  export function ListAll({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "List"} onClick={onClick} showText={showText} >
        <Icon.List />
      </Action >
    );
  }
  
  Modify.propTypes = ActionPropTypes;
  
  export function Modify({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Modify"} onClick={onClick} showText={showText} >
        <Icon.Pen />
      </Action>
    );
  }
  
  No.propTypes = ActionPropTypes;
  
  export function No({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "No"} onClick={onClick} showText={showText} >
        <Icon.Cross />
      </Action>
    );
  }
  
  Subscribe.propTypes = ActionPropTypes;
  
  export function Subscribe({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Subscribe"} onClick={onClick} showText={showText} >
        <Icon.Tick />
      </Action>
    );
  }
  
  Yes.propTypes = ActionPropTypes;
  
  export function Yes({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Yes"} onClick={onClick} showText={showText} >
        <Icon.Tick />
      </Action>
    );
  }
  
  Unsubscribe.propTypes = ActionPropTypes;
  
  export function Unsubscribe({ onClick, showText=false, buttonText=null}) {
    return (
      <Action buttonText={buttonText || "Unsubscribe"} onClick={onClick} showText={showText} >
        <Icon.Cross />
      </Action>
    );
  }

  Action.Add = Add;
  Action.Tray= Tray;
  Action.Close = Close;
  Action.Delete = Delete;
  Action.No= No;
  Action.Yes = Yes;
  Action.Subscribe = Subscribe;
  Action.Unsubscribe= Unsubscribe;
  Action.Modify= Modify;