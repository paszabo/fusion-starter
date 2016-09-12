import React, {PropTypes} from 'react';
import RecentPostsRow from './RecentPostsRow';
import {Table} from 'react-bootstrap';

const RecentPostsTable = ({recentPosts}) => {
  const rows = recentPosts.map( post => {
    return <RecentPostsRow post={post} key={post.postid}/>;
  });

  return (
    <Table striped bordered hover style={{marginBottom: 7}}>
      <thead>
      <tr>
        <th>Post #</th>
        <th>Date</th>
        <th>Time</th>
        <th>Channel</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </Table>
  );
};

RecentPostsTable.propTypes = {
  recentPosts: PropTypes.array.isRequired
};

export default RecentPostsTable;
