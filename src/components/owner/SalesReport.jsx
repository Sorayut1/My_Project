import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { date: "2024-12-01", total: 1500 },
  { date: "2024-12-02", total: 2000 },
  { date: "2024-12-03", total: 1200 },
  { date: "2024-12-04", total: 2500 },
  { date: "2024-12-05", total: 3000 },
  { date: "2024-11-01", total: 1700 },
  { date: "2024-11-02", total: 2100 },
  { date: "2024-11-03", total: 1600 },

  // ... ข้อมูลอื่น ๆ
];

const SalesReport = () => {
  const [filterType, setFilterType] = useState("monthly");

  const filterSalesData = (data, type) => {
    const currentDate = new Date();

    if (type === "monthly") {
      return data.filter(
        (item) => new Date(item.date).getMonth() === currentDate.getMonth() &&
                  new Date(item.date).getFullYear() === currentDate.getFullYear()
      );
    }

    if (type === "yearly") {
      return data.filter((item) => new Date(item.date).getFullYear() === currentDate.getFullYear());
    }

    return data;
  };

  const filteredData = filterSalesData(salesData, filterType);

  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">รายงานยอดขาย</h2>
      <div className="flex justify-between mb-4">
        <select
          className="p-2 border rounded"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="monthly">รายเดือน</option>
          <option value="yearly">รายปี</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#ff9933" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesReport;
