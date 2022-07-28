import React, { useState } from "react";

const Tooltip = (props: any) => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    if(props.value != NaN && props.value!= null){
      timeout = setTimeout(() => {
        setActive(true);
      }, props.delay || 50);
    }
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  

  return (
    <div
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      style={{
        display: 'inline-block',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Wrapping */}
      {active ? (<div
        style={{
          transform: 'scale(1.3)',
        }}
      >{props.children}</div>) : (<div>{props.children}</div>)}
      {active && props.content && (
        <div style={{
          width: '0px',
          height: '0px',
          borderTop: '15px solid transparent',
          borderBottom: '15px solid transparent',
          borderRight: '20px solid #F5F5F5',
          textAlign: 'left',
          fontSize: '.8rem',
          color: 'black',
          position: 'absolute',
          zIndex: 1989,
          left: '100%',
          right: 'calc(100% + var(40px))',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',
          lineHeight: '20px',
        }}></div>
      )}

      {active && props.content && (
        <div style={{
          textAlign: 'left',
          fontSize: '.8rem',
          backgroundColor: '#F5F5F5',
          whiteSpace: 'pre',
          color: 'black',
          position: 'absolute',
          border: '6px solid #F5F5F5',
          borderRadius: '4px',
          zIndex: 1991,
          left: '110%',
          right: 'calc(100% + var(40px))',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',
          lineHeight: '20px',
        }}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default React.memo(Tooltip);
