import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

const DateTimePicker = () => {
  return (
    <div className='datetimepicker__container datetimepicker__container--datetime'>
      <DateTimeField
        defaultText='Please select a date and time'
      />
    </div>
  );
};

export default DateTimePicker;