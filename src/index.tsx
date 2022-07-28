import * as React from 'react'
import Cell from './Cell'
import Row from './Row'
import XLabels from './XLabels'
import Column from './Column'
import YLabels from './YLabels'
import YLabelAligner from './YLabelAligner'
import useElemetHeight from './useElemetHeight'

interface Props {
  data: number[][]
  xLabels?: string[]
  yLabels?: string[]
  yLabelsInfo?: string[] | []
  tooltip?: any[][]
  cellHeight?: string
  cellWidth?: string
  xyProminent?: boolean
  xLabelsPos?: 'top' | 'bottom'
  yLabelsPos?: 'left' | 'right'
  xLabelsStyle?: (index: number) => {}
  yLabelsStyle?: (index: number) => {}
  cellStyle?: (x: number, y: number, ratio?: number, value?:number) => {}
  cellRender?: (x: number, y: number, value: number) => {}
  onClick?: (x: number, y: number) => void
}

function getMinMax(data: number[][]): [number, number] {
  const flatArray = data.reduce((i, o) => [...o, ...i], [])
  const max = Math.max(...flatArray)
  const min = Math.min(...flatArray)
  return [min, max]
}

export const HeatMapGrid = ({
  data,
  xLabels,
  yLabels,
  yLabelsInfo = [],
  tooltip,
  xLabelsPos = 'top',
  yLabelsPos = 'left',
  cellHeight = '3rem',
  cellWidth = '3rem',
  xyProminent = false,
  xLabelsStyle,
  yLabelsStyle,
  cellStyle,
  cellRender,
  onClick
}: Props) => {
  const [xLabelHeight, xLabelRef] = useElemetHeight(22)
  const [min, max] = getMinMax(data)
  const minMaxDiff = max - min
  const isXLabelReverse = xLabelsPos === 'bottom'
  const isYLabelReverse = yLabelsPos === 'right'

  return (

    <Row reverse={isYLabelReverse}>
      {yLabels && (
        <YLabelAligner
          xLabelHeight={xLabelHeight}
          isXLabelReverse={isXLabelReverse}
        >
          <YLabels
            reverse={isYLabelReverse}
            labels={yLabels}
            labelsInfo={yLabelsInfo}
            height={cellHeight}
            yLabelsStyle={yLabelsStyle}
            xyProminent={xyProminent}
          />
        </YLabelAligner>
      )}
      <Column reverse={isXLabelReverse} grow={false}>
        <div ref={xLabelRef}>
          {xLabels && (
            <XLabels
              labels={xLabels}
              xLabelsStyle={xLabelsStyle}
              height={cellHeight}
              xyProminent={xyProminent}
            />
          )}
        </div>
        <Column>
          {data.map((rowItems, xi) => (
            <Row key={xi}>
              {rowItems.map((value, yi) => (
                <Cell
                  key={`${xi}-${yi}`}
                  posX={xi}
                  posY={yi}
                  onClick={onClick}
                  value={value}
                  tooltip={tooltip && tooltip[xi][yi]}
                  height={cellHeight}
                  width={cellWidth}
                  render={cellRender}
                  cellStyle={cellStyle}
                  ratio={(value - min) / minMaxDiff}
                />
              )).reverse()}
            </Row>
          )).reverse()}
        </Column>
      </Column>
    </Row>
  )
}
