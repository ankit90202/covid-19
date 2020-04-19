import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const initialData = {
  labels: [],
  datasets: [{ label: "", backgroundColor: "", borderWidth: 0, data: [] }],
};

const LineChart = ({ data }) => {
  const [dataInfo, setDataInfo] = useState(initialData);

  useEffect(() => {
    setDataInfo(data);
  });

  if (dataInfo.labels.length < 0) {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <div>
      <Bar data={dataInfo} width={100} height={50} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default LineChart;
