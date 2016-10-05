import React, {PropTypes} from 'react';
import RecentPostsRow from './RecentPostsRow';
import Table from 'react-bootstrap/lib/Table';
import {connect} from 'react-redux';

const RecentPostsTable = ({recentPosts}) => {
  const rows = recentPosts.map(function (post) {
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

function mapStateToProps(state) {
  return {
    recentPosts: state.recentPosts
  };
}

export default connect(mapStateToProps)(RecentPostsTable);
