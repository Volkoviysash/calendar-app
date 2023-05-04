import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { Option } from "antd/es/mentions";
import { IUser } from "../models/IUser";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required("description is required")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required("date is required")]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="Choose guests" name="guests">
        <Select style={{ width: 120 }}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
