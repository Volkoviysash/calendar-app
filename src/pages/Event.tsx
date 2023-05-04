import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setIsModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
