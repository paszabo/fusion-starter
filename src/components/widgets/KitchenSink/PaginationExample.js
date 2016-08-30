import React from 'react';
import {Pagination, Pager} from 'react-bootstrap';
import EntypoChevronThinLeft from 'react-entypo/lib/entypo/ChevronThinLeft';
import EntypoChevronThinRight from 'react-entypo/lib/entypo/ChevronThinRight';

const iconStyles = {
  fill: 'currentColor',
  verticalAlign: 'middle'
};

const PaginationExample = () => {
  return (
    <div>
      <Pagination activePage={0}
        prev={<EntypoChevronThinLeft style={iconStyles}/>}
        next={<EntypoChevronThinRight style={iconStyles}/>}
        items={4}/>{' '}

      <Pagination
        bsSize="large" activePage={0}
        prev={<EntypoChevronThinLeft style={iconStyles}/>}
        next={<EntypoChevronThinRight style={iconStyles}/>}
        items={4}/>

      <Pager>
        <Pager.Item href="#">Prev</Pager.Item>{' '}
        <Pager.Item href="#">Next</Pager.Item>
      </Pager>
    </div>
  );
};

export default PaginationExample;
