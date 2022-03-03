import React from "react"

function Card(props) {
  function classes(){
    // checks for the style properties - if they don't exist, the default values will be used
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 ' + bg + txt;
  }
  return (
    <div className="container">
    <div className={classes()} style={{maxWidth: "18rem"}}>
    {/* we will write the classes component shortly*/}
        <div className="card-header">{props.header}</div>
        {/* takes property of header  -- the component that is using this card will pass in that property */}
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {/*above -- if props.title exists, then the <h5> that uses that value for its innerHTML will be created, but otherwise nothing at all will be created. this is what the && is doing here -- it checks if props.title exists */}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id="createStatus">{props.status}</div>)}
        </div>
    </div>
    </div>
  );
}

export { Card }