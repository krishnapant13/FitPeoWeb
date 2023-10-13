import React from "react";
import FPSideBar from "./FPSideBar.jsx";
import FPHeader from "./FPHeader.jsx";
import FPDataCard from "./FPDataCard.jsx";
import { Grid } from "@mui/material";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import {
  AiOutlineProfile,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { IoWalletSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import FPBarChart from "./FPBarChart.jsx";
import FPPieChart from "./FPPieChart.jsx";
import FPTable from "./FPTable.jsx";

const FitPeoWebPage = () => {
  return (
    <div className="w-full flex  justify-center items-center">
      <FPSideBar />
      <div className="md:w-[82%] w-full md:h-screen bg-[#f5f6f8] px-6 overflow-scroll">
        <FPHeader />
        <Grid container spacing={4} className="pt-[1em]">
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <FPDataCard
              color={"#00bb46"}
              heading="Earning"
              price={198}
              data="37.8"
              mainIcon={
                <PiCurrencyCircleDollarBold size={40} color="#00bb46" />
              }
              dataIcon={<AiOutlineArrowUp size={10} color="#00bb46" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <FPDataCard
              color={"#790ca2"}
              heading="Orders"
              price={2.4}
              data="2"
              mainIcon={<AiOutlineProfile size={40} color="#790ca2" />}
              dataIcon={<AiOutlineArrowDown size={10} color="#790ca2" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <FPDataCard
              color={"#0f7794"}
              heading="Balance"
              price={2.4}
              data="2"
              mainIcon={<IoWalletSharp size={40} color="#0f7794" />}
              dataIcon={<AiOutlineArrowDown size={10} color="#0f7794" />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <FPDataCard
              color={"#e553ab"}
              heading="Total Sales"
              price={89}
              data="11"
              mainIcon={<BsHandbag size={40} color="#e553ab" />}
              dataIcon={<AiOutlineArrowUp size={10} color="#e553ab" />}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} xl={8}>
            <FPBarChart />
          </Grid>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <FPPieChart />
          </Grid>
        </Grid>
        <div className="mt-3">
          <FPTable />
        </div>
      </div>
    </div>
  );
};

export default FitPeoWebPage;
