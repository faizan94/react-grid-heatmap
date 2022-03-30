import { HeatMapGrid } from 'react-grid-heatmap'

const xLabels = new Array(100).fill(0).map((_, i) => `${i}`)
const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 1000 - 500))
  )

const tooltip = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 1000 - 500).toString() )
  )

const App = () => {
  return (
    <div
      style={{
        paddingBottom: "40px",
        paddingTop: "40px",
        paddingRight: "80px",
        display: "block",
        width: "100%",
        fontFamily: "Arial",
        color: "black",
        overflow: "scroll",
        direction: "rtl"
      }}
    >
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        // Reder cell with tooltip
        tooltip={tooltip}
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
        )}

        xLabelsStyle={index => ({
          color: index % 2 ? 'transparent' : '#777',
          fontSize: ".8rem"
        })}
        yLabelsStyle={() => ({
          fontSize: ".8rem",
          textTransform: "uppercase",
          color: "#777"
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          width:"7rem"
        })}
        cellHeight="2rem"
        cellWidth='5rem'
        xLabelsPos="top"
        onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
        yLabelsPos="left"
      />
    </div>
  )
}

export default App
