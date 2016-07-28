import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

const TimePicker = () => {
  const inputAttributes = {readOnly: 'readonly', 'data-attr': 'readonly-dtpicker', autoComplete: 'off'};
  
  return (
    <div className='datetimepicker__container datetimepicker__container--time'>
      <DateTimeField
        mode='time'
        inputProps={inputAttributes}
      />
    </div>
  );
};

export default TimePicker;