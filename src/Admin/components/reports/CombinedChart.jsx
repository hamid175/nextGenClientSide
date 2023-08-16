import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "reactstrap";

const CombinedChart = () => {
  const series = [
    {
      name: "Average",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Median",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Q.1",
        "Q.2",
        "Q.3",
        "Q.4",
        "Q.5",
        "Q.6",
        "Q.7",
        "Q.8",
        "Q.9",
        "Q.10",
        "Q.11",
        "Q.12",
        "Q.13",
        "Q.14",
        "Q.15",
        // "Q.16",
        // "Q.17",
        // "Q.18",
        // "Q.19",
        // "Q.20",
        // "Q.21",
        // "Q.22",
        // "Q.23",
        // "Q.24",
        // "Q.25",
        // "Q.26",
      ],
    },
    yaxis: {
      title: {
        text: "Score (Answers)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return (
    <div>
      <Card className="border-0 p-3">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </Card>
    </div>
  );
};

export default CombinedChart;
