import React, { useState } from "react";
import { Form, Input, Button, Upload, Table, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddMenuPage = () => {
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [menuCategory, setMenuCategory] = useState("");
  const [menus, setMenus] = useState([]);
  const [menuId, setMenuId] = useState(1);

  const handleAddMenu = () => {
    if (!menuName || !menuDescription || !menuPrice || !imageUrl || !menuCategory) {
      message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const newMenu = {
      id: menuId,
      name: menuName,
      description: menuDescription,
      price: menuPrice,
      category: menuCategory,
      imageUrl: imageUrl,
    };

    setMenus([...menus, newMenu]);
    setMenuId(menuId + 1);
    resetForm();
  };

  const resetForm = () => {
    setMenuName("");
    setMenuDescription("");
    setMenuPrice("");
    setImageUrl(null);
    setMenuCategory("");
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const [searchParams, setSearchParams] = useState({
    name: "",
    category: "",
  });

  const handleSearchChange = (value, field) => {
    setSearchParams({
      ...searchParams,
      [field]: value,
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ชื่อเมนู",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "รายละเอียด",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "ราคา",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "หมวดหมู่",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "รูปภาพ",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => <img src={text} alt="Menu" style={{ width: 50, height: 50 }} />,
    },
  ];

  const filteredMenus = menus.filter((menu) => {
    return (
      menu.name.toLowerCase().includes(searchParams.name.toLowerCase()) &&
      menu.category.toLowerCase().includes(searchParams.category.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mt-11 mb-4">เพิ่มเมนู</h2>
      <Form layout="vertical">
        <Form.Item label="ชื่อเมนู">
          <Input value={menuName} onChange={(e) => setMenuName(e.target.value)} />
        </Form.Item>

        <Form.Item label="รายละเอียด">
          <Input.TextArea
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            rows={4}
          />
        </Form.Item>

        <Form.Item label="ราคา">
          <Input
            value={menuPrice}
            onChange={(e) => setMenuPrice(e.target.value)}
            type="number"
          />
        </Form.Item>

        <Form.Item label="หมวดหมู่">
          <Select
            value={menuCategory}
            onChange={(value) => setMenuCategory(value)}
            placeholder="เลือกหมวดหมู่"
          >
            <Option value="อาหารทานเล่น">อาหารทานเล่น</Option>
            <Option value="อาหารจานหลัก">อาหารจานหลัก</Option>
            <Option value="ของหวาน">ของหวาน</Option>
            <Option value="เครื่องดื่ม">เครื่องดื่ม</Option>
          </Select>
        </Form.Item>

        <Form.Item label="รูปภาพ">
          <Upload
            beforeUpload={handleImageUpload}
            showUploadList={false}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />} size="large">อัปโหลดรูปภาพ</Button>
          </Upload>
          {imageUrl && <img src={imageUrl} alt="Menu" style={{ width: 100, marginTop: 10 }} />}
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleAddMenu} size="large">
            เพิ่มเมนู
          </Button>
        </Form.Item>
      </Form>

      <div className="my-4">
        <h2 className="text-2xl font-bold mb-4">ค้นหาเมนู</h2>
        <Form layout="inline">
          <Form.Item label="ชื่อเมนู">
            <Input
              value={searchParams.name}
              onChange={(e) => handleSearchChange(e.target.value, "name")}
              placeholder="ค้นหาชื่อเมนู"
            />
          </Form.Item>
          <Form.Item label="หมวดหมู่">
            <Select
              value={searchParams.category}
              onChange={(value) => handleSearchChange(value, "category")}
              placeholder="เลือกหมวดหมู่"
              style={{ width: 150 }}
            >
              <Option value="">ทั้งหมด</Option>
              <Option value="อาหารทานเล่น">อาหารทานเล่น</Option>
              <Option value="อาหารจานหลัก">อาหารจานหลัก</Option>
              <Option value="ของหวาน">ของหวาน</Option>
              <Option value="เครื่องดื่ม">เครื่องดื่ม</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>

      <h2 className="text-2xl font-bold mt-8">เมนูที่มีอยู่</h2>
      <Table
        columns={columns}
        dataSource={filteredMenus}
        scroll={{ x: 800 }} // เลื่อนแนวนอน
        responsive={true} // ทำให้ตาราง responsive
      />
    </div>
  );
};

export default AddMenuPage;
