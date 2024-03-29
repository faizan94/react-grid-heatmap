import React from 'react';
import Tooltip from "./Tooltip";

interface Props {
  render?: (x: number, y: number, ratio: number) => {}
  renderTooltip?: (value: string | undefined) => {}
  posX: number
  posY: number
  cellStyle?: (x: number, y: number, ratio?: number, value?: number) => {}
  ratio: number
  value: number
  tooltip?: any
  height?: string
  width?: string
  onClick?: (x: number, y: number) => void
}

const noop = (returnVal: any) => () => returnVal

const Cell = ({
  cellStyle = noop({}),
  ratio,
  posX,
  posY,
  height = '3rem',
  width = '3rem',
  value,
  tooltip,
  onClick
}: Props) => {

  return (
    <div
      onClick={() => (onClick || noop({}))(posX, posY)}
      style={{
        textAlign: 'center',
        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        // overflow: 'hidden',
        boxSizing: 'border-box',
        flexGrow: 1,
        flexBasis: 0,
        flexShrink: 0,
        height: height,
        width: width,
        lineHeight: height,
        direction: 'ltr',
        fontSize: '.8rem',
        cursor: onClick ? 'pointer' : 'initial',
        background: `rgb(12, 160, 44, ${ratio + 0.05})`,
        ...cellStyle(posX, posY, ratio=ratio, value=value)
      }}
    >
      
        <Tooltip
          value={tooltip}
          content={
            <span >
            {tooltip}
            </span>
          }
          direction="bottom"
        >
        {value}
        </Tooltip>
      {/* {!tooltip && (
        {value}
      )} */}
    </div>
        
  )
}

export default React.memo(Cell)
