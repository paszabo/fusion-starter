import initialState from './initialState';

export default function chartDataReducer(chartData = initialState.chartData, action) {
  switch (action.type) {
    default:
      return chartData;
  }
}
