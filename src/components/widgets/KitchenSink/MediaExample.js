import React from 'react';
import {Media} from 'react-bootstrap';

const MediaExample = () => {
  return (
    <Media>
      <Media.Left>
        <img width={64} height={64} src="https://placehold.it/64x64" alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>This is the content for your media.</p>
      </Media.Body>
    </Media>
  );
};

export default MediaExample;