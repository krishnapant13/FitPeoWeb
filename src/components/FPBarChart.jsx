import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend, Cell } from "recharts";

function FPBarChart() {
  const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 15 },
    { name: "Mar", value: 7 },
    { name: "Apr", value: 20 },
    { name: "May", value: 13 },
    { name: "Jun", value: 11 },
    { name: "Jul", value: 8 },
    { name: "Aug", value: 16 },
    { name: "Sep", value: 20 },
    { name: "Oct", value: 20 },
    { name: "Nov", value: 7 },
    { name: "Dec", value: 2 },
  ];
  const [newData, setNewData] = useState({ data, activeIndex: 7 });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (i) => {
    let temp = {
      ...newData,
    };
    temp.activeIndex = i;
    setNewData(temp);
  };
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mt-5 relative">
      <BarChart
        width={700}
        height={400}
        data={data}
        barGap={50}
        style={{
          backgroundColor: "#fff",
          borderRadius: "0.5em",
          position: "relative",
        }}
        margin={{
          top: 60,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar
          dataKey="value"
          radius={10}
          fill="#8884d8"
          onClick={(data, i) => handleClick(i)}
        >
          {newData.data.map((entry, index) => (
            <Cell
              key={`cell-${index + 1}`}
              fill={index === newData.activeIndex ? "#7c00ef" : "#f4ecff"}
            />
          ))}
        </Bar>
      </BarChart>
      {/* <div className="w-full flex justify-between absolute top-2">
        <div className="flex-col justify-start items-center">
          <p className="text-xl font-[500]">Overview</p>
          <p className="text-sm text-gray-500">Monthly Earning</p>
        </div>
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickMenu}
          >
            Dashboard
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div> */}
    </div>
  );
}

export default FPBarChart;
