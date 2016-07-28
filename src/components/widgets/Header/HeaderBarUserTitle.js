import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';

const HeaderBarUserTitle = (props) => {
  return (
    <span>
      <FontAwesome
        name='user'
        fixedWith={true}
      />
      {' '}
      {/* Using inline style instead of a class... */}
      <span style={{marginLeft:4}}>{props.userName}</span>
    </span>
  );
};

HeaderBarUserTitle.propTypes = {
  userName: PropTypes.string.isRequired
};

export default HeaderBarUserTitle;