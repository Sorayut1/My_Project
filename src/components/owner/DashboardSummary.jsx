import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom"; // ใช้สำหรับการนำทางใน React Router
import { ShoppingCartOutlined, FileSearchOutlined, StarOutlined, TableOutlined } from '@ant-design/icons'; // นำเข้าไอคอนจาก Ant Design

const DashboardSummary = () => {
  const summaryData = [
    { title: "ยอดขายวันนี้", value: "฿12,000", link: "/sales-today", icon: <ShoppingCartOutlined /> },
    { title: "คำสั่งซื้อ", value: "25 รายการ", link: "/orders", icon: <FileSearchOutlined /> },
    { title: "เมนูขายดี", value: "ก๋วยเตี๋ยวหมู", link: "/best-sellers", icon: <StarOutlined /> },
    { title: "โต๊ะที่ใช้งาน", value: "10/20 โต๊ะ", link: "/tables", icon: <TableOutlined /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {summaryData.map((item, index) => (
        <a key={index} to={item.link} className="w-full"> {/* ใช้ Link สำหรับ React Router */}
          <Card className="bg-white shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="text-2xl mr-4">{item.icon}</div> {/* แสดงไอคอน */}
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default DashboardSummary;
