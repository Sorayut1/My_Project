import React from "react";
import DashboardSummary from "./DashboardSummary";
import OrderList from "./OrderList";
import MenuManagement from "./MenuManagement";
import SalesChart from "./SalesChart";
// import MenuSalesPieChart from "./MenuSalesPieChart";
import MenuSalesBarChart from "./MenuSalesBarChart";
import SalesReport from "./SalesReport";

const Dashboard = () => {
  return (
    <div className="p-6 mt-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">แดชบอร์ดร้านอาหาร</h1>
      <DashboardSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* <OrderList />
        <MenuManagement /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {/* <MenuSalesPieChart/> */}
      <MenuSalesBarChart/>
        <SalesChart />
        
      </div>
      <div className="mt-6">
            <SalesReport />
        </div>
    </div>
  );
};

export default Dashboard;
