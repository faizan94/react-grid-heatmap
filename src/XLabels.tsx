import React from 'react'

interface Props {
  labels: string[]
  xLabelsStyle?: (index: number) => {}
  square?: boolean
  height: string
  xyProminent: boolean
}

export default function XLabels({
  labels,
  xLabelsStyle = () => ({}),
  height,
  xyProminent,
  square = false
}: Props) {
  const widthPercent = `${100 / labels.length}%`
  return (
    <div style={{ whiteSpace: 'pre', display: 'flex', textAlign: 'center' }}>
      {labels.map((label, index) => (
        <div
          key={label}
          style={{
            transform: xyProminent? 'scale(1.5)' : 'scale(1)',
            padding: '0.2rem 0',
            boxSizing: 'border-box',
            flexGrow: square ? 'initial' : 1,
            overflow: 'hidden',
            flexShrink: 1,
            cursor: 'pointer',
            flexBasis: square ? height : widthPercent,
            width: square ? height : widthPercent,
            ...xLabelsStyle(index)
          }}
        >
          {label}
        </div>
      )).reverse()}
    </div>
  )
}
