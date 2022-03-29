import React from 'react'

interface Props {
  render?: (x: number, y: number, ratio: number) => {}
  renderTooltip?: (value: string | undefined) => {}
  posX: number
  posY: number
  style?: (x: number, y: number, ratio: number) => {}
  ratio: number
  value: number
  tooltip?: string
  height?: string
  square?: boolean
  onClick?: (x: number, y: number) => void
}

const noop = (returnVal: any) => () => returnVal

const Cell = ({
  render = noop(null),
  renderTooltip = noop(null),
  style = noop({}),
  ratio,
  posX,
  posY,
  square = false,
  height = '2rem',
  value,
  tooltip,
  onClick
}: Props) => {

  console.log(tooltip);

  return (
    <div
      onClick={() => (onClick || noop({}))(posX, posY)}
      style={{
        border: '1px solid #fff',
        borderWidth: '1px 1px 0 0',
        textAlign: 'center',
        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        overflow: 'hidden',
        boxSizing: 'border-box',
        flexGrow: square ? 0 : 1,
        flexBasis: square ? height : 0,
        flexShrink: 0,
        height: height,
        lineHeight: height,
        borderRadius: '4px',
        fontSize: '.8rem',
        cursor: onClick ? 'pointer' : 'initial',
        background: `rgb(12, 160, 44, ${ratio + 0.05})`,
        ...style(posX, posY, ratio)
      }}
    >
      <div>
        {render(posX, posY, value)}
        {renderTooltip(tooltip)}
      </div>
    </div>
  )
}

export default React.memo(Cell)
