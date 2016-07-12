import R from "ramda"

export const chartCols = [
  {label: "Location", type: "string"},
  {label: "Lives lost", type: "number"}
]

export const bubbleChartCols = [
  {label: "Location", type: "string"},
  {label: "Civilians", type: "number"},
  {label: "Injuries", type: "number"},
  {label: "Country", type: "string"},
  {label: "Deaths", type: "number"},
]

export const bubbleChartLabels = R.map(R.compose(
	R.toLower,
	R.path(["label"])
))(bubbleChartCols)
