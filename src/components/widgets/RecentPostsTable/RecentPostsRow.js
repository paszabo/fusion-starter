import React, {PropTypes} from 'react';

const RecentPostsRow = (props) => {
  const post = props.post;
  return (
    <tr>
      <td>{post.postid}</td>
      <td>{post.date}</td>
      <td>{post.time}</td>
      <td>{post.category}</td>
    </tr>
  );
};

RecentPostsRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default RecentPostsRow;
