import React from "react";
import { Button, Table } from "antd";

const MenuManagement = () => {
  const columns = [
    { title: "ชื่อเมนู", dataIndex: "name", key: "name" },
    { title: "ราคา", dataIndex: "price", key: "price" },
    {
      title: "การจัดการ",
      render: () => <Button type="primary">แก้ไข</Button>,
    },
  ];

  const data = [
    { name: "ก๋วยเตี๋ยวหมู", price: "฿50" },
    { name: "ข้าวมันไก่", price: "฿60" },
  ];

  return (
    <div className="bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">จัดการเมนูอาหาร</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Button type="primary" className="mt-4">
        เพิ่มเมนูใหม่
      </Button>
    </div>
  );
};

export default MenuManagement;
