import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FPSearchBar from "./FPSearchBar";
import { Button, Menu, MenuItem } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

export default function FPTable() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      <div className="w-full flex justify-start items-center">
        <img
          className="w-[5em] h-[3em] rounded-md mr-3"
          src="https://i.pinimg.com/236x/bd/93/37/bd933794d43dbd03f421af24cf36d612.jpg"
          alt="first"
        />
        <div className=" flex-col justify-start items-center">
          <p className="text-start font-[600] text-[0.95em]">Abstract 3D</p>
          <p className="text-start text-gray-500 text-[0.7em]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>,
      "32 In stock",
      "$ 45.99",
      "20"
    ),
    createData(
      <div className="w-full flex justify-start items-center">
        <img
          className="w-[5em] h-[3em] rounded-md mr-3"
          src="https://i.pinimg.com/236x/bd/93/37/bd933794d43dbd03f421af24cf36d612.jpg"
          alt="first"
        />
        <div className=" flex-col justify-start items-center">
          <p className="text-start font-[600] text-[0.95em]">Abstract 3D</p>
          <p className="text-start text-gray-500 text-[0.7em]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>,
      "32 In stock",
      "$ 45.99",
      "20"
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "none" }} align="left">
              <p className="font-[600] text-lg"> Product Sell</p>
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }} align="right" colSpan={3}>
              <div className="flex justify-end items-center">
                <FPSearchBar color={"#f4ecff"} />
                <div className="ml-3">
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickMenu}
                    style={{
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
                      Last 30 days <FaAngleDown size={20} className="ml-3" />
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
                    <MenuItem onClick={() => handleClose("Monthly")}>
                      Monthly
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("Yearly")}>
                      Yearly
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("Weekly")}>
                      Weekly
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
