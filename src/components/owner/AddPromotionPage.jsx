import React, { useState } from "react";
import { Form, Input, Button, Table, DatePicker, message } from "antd";


const { RangePicker } = DatePicker;

const AddPromotionPage = () => {
  const [promotionName, setPromotionName] = useState("");
  const [promotionDescription, setPromotionDescription] = useState("");
  const [promotionDiscount, setPromotionDiscount] = useState("");
  const [promotionDates, setPromotionDates] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [promotionId, setPromotionId] = useState(1);

  // ฟังก์ชันเพิ่มโปรโมชัน
  const handleAddPromotion = () => {
    if (!promotionName || !promotionDescription || !promotionDiscount || !promotionDates.length) {
      message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const newPromotion = {
      id: promotionId,
      name: promotionName,
      description: promotionDescription,
      discount: promotionDiscount,
      startDate: promotionDates[0],
      endDate: promotionDates[1],
    };

    setPromotions([...promotions, newPromotion]);
    setPromotionId(promotionId + 1);
    resetForm(); // รีเซ็ตฟอร์มหลังจากเพิ่ม
  };

  // ฟังก์ชันรีเซ็ตฟอร์ม
  const resetForm = () => {
    setPromotionName("");
    setPromotionDescription("");
    setPromotionDiscount("");
    setPromotionDates([]);
  };

  // คอลัมน์ของตารางโปรโมชัน
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ชื่อโปรโมชัน",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "รายละเอียด",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "ส่วนลด (%)",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "ระยะเวลา",
      key: "dates",
      render: (text, record) => (
        <span>
          {moment(record.startDate).format("DD/MM/YYYY")} - {moment(record.endDate).format("DD/MM/YYYY")}
        </span>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-11 mb-4">สร้างโปรโมชัน</h2>

      {/* ฟอร์มสร้างโปรโมชัน */}
      <Form layout="vertical">
        <Form.Item label="ชื่อโปรโมชัน">
          <Input
            value={promotionName}
            onChange={(e) => setPromotionName(e.target.value)}
            placeholder="กรุณากรอกชื่อโปรโมชัน"
          />
        </Form.Item>

        <Form.Item label="รายละเอียดโปรโมชัน">
          <Input.TextArea
            value={promotionDescription}
            onChange={(e) => setPromotionDescription(e.target.value)}
            rows={4}
            placeholder="กรุณากรอกรายละเอียด"
          />
        </Form.Item>

        <Form.Item label="ส่วนลด (%)">
          <Input
            value={promotionDiscount}
            onChange={(e) => setPromotionDiscount(e.target.value)}
            type="number"
            min={1}
            max={100}
            placeholder="กรุณากรอกส่วนลด"
          />
        </Form.Item>

        <Form.Item label="ระยะเวลาโปรโมชัน">
          <RangePicker
            value={promotionDates}
            onChange={(dates) => setPromotionDates(dates)}
            format="DD/MM/YYYY"
            placeholder={["เริ่มต้น", "สิ้นสุด"]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleAddPromotion} size="large">
            สร้างโปรโมชัน
          </Button>
        </Form.Item>
      </Form>

      {/* ตารางโปรโมชันที่มีอยู่ */}
      <h2 className="text-2xl font-bold mt-8">โปรโมชันที่มีอยู่</h2>
      <Table columns={columns} dataSource={promotions} />
    </div>
  );
};

export default AddPromotionPage;
