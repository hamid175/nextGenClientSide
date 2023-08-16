import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "reactstrap";

const Chart = ({ series, colors }) => {
  const options = {
    chart: {
      type: "bar",
      height: 425,
      width: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
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
      colors: colors,
    },
    
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    legend: {
        show: true,
        horizontalAlign: "left",
        
        markers: {
            fillColors: colors,
        }

    }
  };

  return (
    <div className="pb-4 w-100">
      <Card className="border-0 p-3">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={425}
        />
      </Card>
    </div>
  );
};

export default Chart;
