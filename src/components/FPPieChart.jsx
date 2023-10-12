import React from "react";
import { PieChart, Pie, Legend } from "recharts";

const FPPieChart = () => {
  const data = [
    { value: 400, fill: "#0088FE" },
    { value: 800, fill: "#00C49F" },
    { value: 300, fill: "#333" },
  ];
  return (
    <div>
      <PieChart width={800} height={400}>
        <Legend
          height={36}
          iconType="none"
          layout="vertical"
          verticalAlign="middle"
        />
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        ></Pie>
      </PieChart>
    </div>
  );
};

export default FPPieChart;
