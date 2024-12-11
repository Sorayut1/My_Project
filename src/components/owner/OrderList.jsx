import React from "react";
import { Table } from "antd";

const OrderList = () => {
  const columns = [
    { title: "หมายเลขคำสั่งซื้อ", dataIndex: "orderId", key: "orderId" },
    { title: "เมนู", dataIndex: "menu", key: "menu" },
    { title: "สถานะ", dataIndex: "status", key: "status" },
  ];

  const data = [
    { orderId: "001", menu: "ก๋วยเตี๋ยวหมู", status: "กำลังเตรียม" },
    { orderId: "002", menu: "ข้าวมันไก่", status: "พร้อมเสิร์ฟ" },
  ];

  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">คำสั่งซื้อ</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default OrderList;
