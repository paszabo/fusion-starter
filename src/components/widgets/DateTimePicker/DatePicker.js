import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

const DatePicker = () => {
  return (
    <div className='datetimepicker__container datetimepicker__container--date'>
      <DateTimeField
        mode='date'
        viewMode='days'
      />
    </div>
  );
};

export default DatePicker;