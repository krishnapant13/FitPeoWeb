import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

const FPPieChart = () => {
  const data = [
    { name: "Active Campagins", value: 30 },
    { name: "Inactive Campagins", value: 50 },
    { name: "ICPs with no campagins", value: 50 },
  ];

  const COLORS = ["#e553ab", "#f4ecff", "#7c00ef", "#FF8042"];

  const CustomLabel = ({ viewBox, value, labelText }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#0088FE"
          fontSize="26"
          fontWeight="600"
        >
          {value}%
        </text>
        <text
          x={cx}
          y={cy + 20}
          className="recharts-text recharts-label "
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="15" 
        >
          {labelText}
        </text>
      </g>
    );
  };
  return (
    <div className="flex justify-center items-center w-full h-[18.7em] mt-5 bg-white rounded-lg">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={100}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                strokeWidth={index === 1 ? 10 : index === 2 ? 6 : 1}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={
                <CustomLabel value={65} labelText="Total customers" />
              }
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FPPieChart;
