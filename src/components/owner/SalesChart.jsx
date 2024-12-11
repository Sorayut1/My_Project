
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "วันจันทร์", sales: 1200 },
  { name: "วันอังคาร", sales: 2200 },
  { name: "วันพุธ", sales: 1500 },
  { name: "วันพฤหัส", sales: 1700 },
  { name: "วันศุกร์", sales: 2000 },
  { name: "วันเสาร์", sales: 2800 },
  { name: "วันอาทิตย์", sales: 3000 },
];

const COLORS = ["#ff9933", "#ffcc33", "#ff6600", "#ff3300", "#cc6600", "#ff9966", "#ffcc99"];

const SalesChart = () => {
  return (
    <div className="bg-white shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">กราฟยอดขายรายวัน</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
