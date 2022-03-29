import React from 'react';
import Tooltip from "./Tooltip";

interface Props {
  render?: (x: number, y: number, ratio: number) => {}
  renderTooltip?: (value: string | undefined) => {}
  posX: number
  posY: number
  cellStyle?: (x: number, y: number, ratio: number) => {}
  ratio: number
  value: number
  tooltip?: string
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
        border: '1px solid #fff',
        borderWidth: '1px 1px 0 0',
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
        borderRadius: '4px',
        fontSize: '.8rem',
        cursor: onClick ? 'pointer' : 'initial',
        background: `rgb(12, 160, 44, ${ratio + 0.05})`,
        ...cellStyle(posX, posY, ratio)
      }}
    >
        <Tooltip
          content={
            <span >
              {value} <br />
             {tooltip} <br /> asdasd <br /> asdasdasddsa asd asd asd ads
            </span>
          }
          direction="bottom"
        >
        {value}
        </Tooltip>
      </div>
  )
}

export default React.memo(Cell)
