import React, { useState } from "react";

const Tooltip = (props: any) => {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 50);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      style={{
        display: 'inline-block',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div style={{
          textAlign: 'left',
          fontSize: '.8rem',
          backgroundColor: 'white',
          whiteSpace: 'pre',
          color: 'black',
          position: 'absolute',
          border: '4px solid white',
          zIndex: 100000,
          left: '110%',
          right: 'calc(100% + var(40px))',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',
          lineHeight: '20px',
        }}className={`Tooltip-Tip`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default React.memo(Tooltip);
