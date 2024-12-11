import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "ก๋วยเตี๋ยวหมู", sales: 400 },
  { name: "ข้าวมันไก่", sales: 300 },
  { name: "ผัดไทย", sales: 200 },
  { name: "ส้มตำ", sales: 100 },
  { name: "ข้าวขาหมู", sales: 20 },
  { name: "ผัดมาม่า", sales: 20 },
  { name: "ตำไทย", sales: 200 },
];

const MenuSalesBarChart = () => {
  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">กราฟยอดขายเมนูอาหาร (Bar Chart)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#ff9933" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MenuSalesBarChart;
