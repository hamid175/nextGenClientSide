import React from "react";
import CombinedChart from "../components/reports/CombinedChart";
import AverageChart from "../components/reports/AverageChart";
import Chart from "../components/reports/Chart";

const Reports = () => {

  const compbinedData = [
    {
      name: "Average",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 34, 43, 12,13,45,13],
    },
    {
      name: "Median",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 12,23,34,54,54,70],
    },
  ];
  const averageData = [
    {
      name: "Present",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66,56, 61, 58, 63, 60, 66],
    },
    {
      name: "Future",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94,105, 91, 114, 94],
    },
  ];
  const medianData = [
    {
      name: "Present",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Future",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 98, 87, 105, 91, 114, 94],
    },
  ];



  return (
    <React.Fragment>
      <div className="w-100">
      <Chart series={compbinedData} colors={['#FFC84B', '#6ADA7D']} />
      <Chart series={averageData} colors={['#020F29', '#5088A9']} />
      <Chart series={medianData} colors={['#020F29', '#5088A9']} />
      </div>
    </React.Fragment>
  );
};

export default Reports;
