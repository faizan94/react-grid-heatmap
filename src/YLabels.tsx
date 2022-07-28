import React from 'react'
import Tooltip from './Tooltip'
import { FaInfoCircle } from 'react-icons/fa';

interface Props {
  labels: string[]
  labelsInfo: string[] | []
  height: string
  reverse?: boolean
  xyProminent?: boolean
  yLabelsStyle?: (index: number) => {}
}

export default function YLabels({
  labels,
  labelsInfo = [],
  height,
  xyProminent,
  yLabelsStyle = () => ({}),
  reverse = false
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: reverse ? 'left' : 'right'
      }}
    >
      {labels
        .map((label, index) => (
          <div
            key={label}
            title={label}
            style={{
              // width: '200px',
              transform: xyProminent ? 'scale(1.5)' : 'scale(1)',
              whiteSpace: 'pre',
              boxSizing: 'border-box',
              padding: '0 0.4rem',
              textAlign: 'left',
              lineHeight: height,
              ...yLabelsStyle(index)
            }}
          >
            {labelsInfo.length ? (
              <Tooltip
                value={labelsInfo[index]}
                content={<span>{labelsInfo[index]}</span>}
                align='right'
                direction='bottom'
              >
                {label} <FaInfoCircle />
              </Tooltip>
            ) : (label)}
          </div>
        ))
        .reverse()}
    </div>
  )
}
