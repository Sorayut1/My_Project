import React, { useState } from "react";
import { Form, Input, Button, Table, Select, message } from "antd";
import { QRCodeSVG } from "qrcode.react";

const { Option } = Select;

const AddTablePage = () => {
  // สเตทสำหรับข้อมูลโต๊ะ
  const [tableName, setTableName] = useState("");
  const [tableStatus, setTableStatus] = useState(""); // ว่างหรือไม่ว่าง
  const [tables, setTables] = useState([]);
  const [tableId, setTableId] = useState(1); // ID โต๊ะเริ่มต้นจาก 1

  // ฟังก์ชันเพิ่มโต๊ะ
  const handleAddTable = () => {
    if (!tableName || !tableStatus) {
      message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const newTable = {
      id: tableId,
      name: tableName,
      status: tableStatus,
      qrCodeUrl: `${window.location.origin}/table/${tableId}`, // URL สำหรับ QR Code
    };

    setTables([...tables, newTable]);
    setTableId(tableId + 1); // เพิ่ม ID สำหรับโต๊ะถัดไป
    resetForm(); // รีเซ็ตฟอร์มหลังจากเพิ่ม
  };

  // ฟังก์ชันรีเซ็ตฟอร์ม
  const resetForm = () => {
    setTableName("");
    setTableStatus(""); // รีเซ็ตสถานะโต๊ะ
  };

  // คอลัมน์ของตารางโต๊ะ
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ชื่อโต๊ะ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "QR Code",
      dataIndex: "qrCodeUrl",
      key: "qrCodeUrl",
      render: (text) => <QRCodeSVG value={text} size={100} />,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-11 mb-4">เพิ่มโต๊ะอาหาร</h2>

      {/* ฟอร์มเพิ่มโต๊ะ */}
      <Form layout="vertical">
        <Form.Item label="ชื่อโต๊ะ">
          <Input
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            placeholder="กรุณากรอกชื่อโต๊ะ"
          />
        </Form.Item>

        <Form.Item label="สถานะโต๊ะ">
          <Select
            value={tableStatus}
            onChange={(value) => setTableStatus(value)}
            placeholder="เลือกสถานะโต๊ะ"
          >
            <Option value="ว่าง">ว่าง</Option>
            <Option value="ไม่ว่าง">ไม่ว่าง</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleAddTable} size="large">
            เพิ่มโต๊ะ
          </Button>
        </Form.Item>
      </Form>

      {/* ตารางโต๊ะที่มีอยู่ */}
      <h2 className="text-2xl font-bold mt-8">โต๊ะที่มีอยู่</h2>
      <Table
        columns={columns}
        dataSource={tables}
        rowKey="id" // ใช้ id เป็น key
      />
    </div>
  );
};

export default AddTablePage;
