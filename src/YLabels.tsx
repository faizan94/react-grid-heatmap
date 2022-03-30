import React from 'react'

interface Props {
  labels: string[]
  height: string
  reverse?: boolean
  yLabelsStyle?: (index: number) => {}
}

export default function YLabels({
  labels,
  height,
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
      {labels.map((label, index) => (
        <div
          key={label}
          style={{
            // width: '200px',
            boxSizing: 'border-box',
            padding: '0 0.4rem',
            textAlign: 'left',
            lineHeight: height,
            ...yLabelsStyle(index)
          }}
        >
          {label}
        </div>
      )).reverse()}
    </div>
  )
}
