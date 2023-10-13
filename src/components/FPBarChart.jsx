import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

function FPBarChart() {
  const [value, setValue] = useState("Quarterly");
  const data = [
    {
      name: "Jan",
      value:
        value === "Quarterly"
          ? 13
          : value === "Monthly"
          ? 10
          : value === "Yearly"
          ? 6
          : 6,
    },
    {
      name: "Feb",
      value:
        value === "Quarterly"
          ? 10
          : value === "Monthly"
          ? 13
          : value === "Yearly"
          ? 5
          : 7,
    },
    {
      name: "Mar",
      value:
        value === "Quarterly"
          ? 18
          : value === "Monthly"
          ? 16
          : value === "Yearly"
          ? 18
          : 9,
    },
    {
      name: "Apr",
      value:
        value === "Quarterly"
          ? 16
          : value === "Monthly"
          ? 18
          : value === "Yearly"
          ? 4
          : 12,
    },
    {
      name: "May",
      value:
        value === "Quarterly"
          ? 17
          : value === "Monthly"
          ? 8
          : value === "Yearly"
          ? 19
          : 16,
    },
    {
      name: "Jun",
      value:
        value === "Quarterly"
          ? 8
          : value === "Monthly"
          ? 17
          : value === "Yearly"
          ? 3
          : 2,
    },
    {
      name: "Jul",
      value:
        value === "Quarterly"
          ? 17
          : value === "Monthly"
          ? 20
          : value === "Yearly"
          ? 8
          : 10,
    },
    {
      name: "Aug",
      value:
        value === "Quarterly"
          ? 20
          : value === "Monthly"
          ? 17
          : value === "Yearly"
          ? 20
          : 9,
    },
    {
      name: "Sep",
      value:
        value === "Quarterly"
          ? 19
          : value === "Monthly"
          ? 16
          : value === "Yearly"
          ? 14
          : 11,
    },
    {
      name: "Oct",
      value:
        value === "Quarterly"
          ? 16
          : value === "Monthly"
          ? 19
          : value === "Yearly"
          ? 16
          : 18,
    },
    {
      name: "Nov",
      value:
        value === "Quarterly"
          ? 14
          : value === "Monthly"
          ? 15
          : value === "Yearly"
          ? 14
          : 11,
    },
    {
      name: "Dec",
      value:
        value === "Quarterly"
          ? 15
          : value === "Monthly"
          ? 17
          : value === "Yearly"
          ? 15
          : 6,
    },
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
  const handleClose = (itemValue) => {
    setAnchorEl(null);
    if (itemValue) {
      setValue(itemValue);
    }
  };

  return (
    <div className="mt-5 ">
      <div className="relative">
      <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          variant="contained"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickMenu}
          style={{
            position: "absolute",
            top: "0.5em",
            right: "2em",
            zIndex: 99,
            backgroundColor: "#f4ecff",
            color: "gray",
            border: "none",
            padding: "0.5em 1em",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          <div className="flex justify-between items-center">
            {value} <FaAngleDown size={20} className="ml-3" />
          </div>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleClose("Quarterly")}>
            Quarterly
          </MenuItem>
          <MenuItem onClick={() => handleClose("Monthly")}>Monthly</MenuItem>
          <MenuItem onClick={() => handleClose("Yearly")}>Yearly</MenuItem>
          <MenuItem onClick={() => handleClose("Weekly")}>Weekly</MenuItem>
        </Menu>
        <div className=" flex justify-between absolute top-2 left-6 z-[99]">
          <div className="flex-col justify-start items-center">
            <p className="text-xl text-start font-[500]">Overview</p>
            <p className="text-sm text-gray-500">Monthly Earning</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 md:overflow-visible overflow-scroll">
        <BarChart
          width={700}
          height={300}
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
          <Bar
            style={{ overflow: "hidden" }}
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
      </div>
    </div>
  );
}

export default FPBarChart;
