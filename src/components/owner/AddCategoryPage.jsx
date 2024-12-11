import React, { useState } from "react";
import { Form, Input, Button, Table, message } from "antd";

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState(""); // สเตทสำหรับชื่อหมวดหมู่
  const [categories, setCategories] = useState([]); // สเตทสำหรับรายการหมวดหมู่
  const [categoryId, setCategoryId] = useState(1); // เริ่มต้น ID จาก 1

  // ฟังก์ชันเพิ่มหมวดหมู่
  const handleAddCategory = () => {
    if (!categoryName) {
      message.error("กรุณากรอกชื่อหมวดหมู่");
      return;
    }

    const newCategory = {
      id: categoryId, // ใช้ ID ที่ตั้งค่า
      name: categoryName,
    };

    setCategories([...categories, newCategory]); // เพิ่มหมวดหมู่ลงในตาราง
    setCategoryId(categoryId + 1); // เพิ่ม ID สำหรับหมวดหมู่ถัดไป
    setCategoryName(""); // รีเซ็ตชื่อหมวดหมู่หลังจากเพิ่ม
  };

  // คอลัมน์ของตารางหมวดหมู่
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ชื่อหมวดหมู่",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-11 mb-4">เพิ่มหมวดหมู่</h2>

      {/* ฟอร์มเพิ่มหมวดหมู่ */}
      <Form layout="vertical">
        <Form.Item label="ชื่อหมวดหมู่">
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="กรุณากรอกชื่อหมวดหมู่"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleAddCategory} size="large">
            เพิ่มหมวดหมู่
          </Button>
        </Form.Item>
      </Form>

      {/* ตารางหมวดหมู่ที่มีอยู่ */}
      <h2 className="text-2xl font-bold mt-8">หมวดหมู่ที่มีอยู่</h2>
      <Table
        columns={columns}
        dataSource={categories}
        scroll={{ x: 800 }} // เลื่อนแนวนอน
        responsive={true} // ทำให้ตาราง responsive
      />
    </div>
  );
};

export default AddCategoryPage;
