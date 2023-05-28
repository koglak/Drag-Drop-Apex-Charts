import React from "react";
import ReactApexChart from "react-apexcharts";

export const Chart = (props) => {
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: props.title,
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={props.series} type="line" />
    </div>
  );
};
