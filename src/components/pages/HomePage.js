import React, {PropTypes} from 'react';
import {PageHeader, Breadcrumb, Alert, Row, Col, Clearfix, Panel, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PostsPanel from '../widgets/PostsPanel/PostsPanel';
import RecentPostsTable from '../widgets/RecentPostsTable/RecentPostsTable';

const RecentPostsTitle = (
  <span><FontAwesome name='comment' fixedWidth={true} />{' '}Recent Posts</span>
);

const RecentPostsFooter = (
  <div className='text-right'>
    <a href='#'>
      <span className='pull-left'>View More</span>
      <span className='pull-right'><FontAwesome name='arrow-circle-right' /></span>
      <Clearfix />
    </a>
  </div>
);

const ActivityPanelTitle = (
  <span><FontAwesome name='clock-o' fixedWidth={true} />{' '}Activity Panel</span>
);

const HomePage = () => {
  return (
    <div>

      <PageHeader>Dashboard <small>Example Overview</small></PageHeader>

      <Breadcrumb>
        <Breadcrumb.Item active>
          <FontAwesome name='dashboard' />{' '}Dashboard
        </Breadcrumb.Item>
      </Breadcrumb>

      <Alert bsStyle='info'>
        <strong>Fusion!</strong>{' '}Explore the
        {' '}<strong>Fusion Starter Kit</strong>{' '} for examples and documenation available with
        {' '}<strong>Fusion.</strong>
      </Alert>

      {/* Posts Panels */}
      <Row>
        <Col xs={6} md={6} lg={3}>
          {/* Cars */}
          <PostsPanel iconName='car' postCount={26} panelLabel='Cars' panelType='cars' panelColor='blue' />
        </Col>
        <Col xs={6} md={6} lg={3}>
          {/* Auto */}
          <PostsPanel iconName='cog' postCount={12} panelLabel='Auto' panelType='auto' panelColor='green' />
        </Col>
        <Col xs={6} md={6} lg={3}>
          {/* Trucks */}
          <PostsPanel iconName='truck' postCount={124} panelLabel='Trucks' panelType='trucks' panelColor='yellow' />
        </Col>
        <Col xs={6} md={6} lg={3}>
          {/* Advice */}
          <PostsPanel iconName='comments' postCount={13} panelLabel='Advice' panelType='advice' panelColor='red' />
        </Col>
      </Row>

      {/* Data Tables */}
      <Row>
        {/* Recent Posts */}
        <Col lg={8}>
          <Panel header={RecentPostsTitle} footer={RecentPostsFooter}>
            <RecentPostsTable />
          </Panel>
        </Col>
        {/* Activity Panel */}
        <Col lg={4}>
          <Panel header={ActivityPanelTitle}>
            <ListGroup>
              <ListGroupItem href='#'>
                <FontAwesome name='comment' fixedWidth={true} />{' '}New Comment{' '}
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='picture-o' fixedWidth={true} />{' '}3 New Photos{' '}
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='commenting' fixedWidth={true} />{' '}Post Submitted{' '}
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='facebook-f' fixedWidth={true} />{' '}Post Shared{' '}
                <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='youtube' fixedWidth={true} />{' '}Video Shared{' '}
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='reply' fixedWidth={true} />{' '}Replied to Post{' '}
                <span className="pull-right text-muted small"><em>11:13 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='commenting' fixedWidth={true} />{' '}Post Submitted{' '}
                <span className="pull-right text-muted small"><em>10:57 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='remove' fixedWidth={true} />{' '}Post Removed{' '}
                <span className="pull-right text-muted small"><em>9:49 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href='#'>
                <FontAwesome name='upload' fixedWidth={true} />{' '}Photo Uploaded{' '}
                <span className="pull-right text-muted small"><em>Yesterday</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View More</Button>
          </Panel>
        </Col>
      </Row>

    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object.isRequired
};

export default HomePage;
