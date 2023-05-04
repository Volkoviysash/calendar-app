import { Badge, Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { Dayjs } from "dayjs"; // import Dayjs instead of Moment
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Dayjs) {
    // change Moment to Dayjs
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
      // <ul className="events">
      //   {currentDayEvents.map((ev, index) => (
      //     <li key={index}>
      //       <Badge text={ev.description} />
      //     </li>
      //   ))}
      // </ul>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
