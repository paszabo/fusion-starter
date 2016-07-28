import React from 'react';
import {Image} from 'react-bootstrap';

const ImageExample = () => {
  return (
    <div>
      <Image src="https://placehold.it/100x100" rounded/>{' '}
      <Image src="https://placehold.it/100x100" circle/>{' '}
      <Image src="https://placehold.it/100x100" thumbnail/>
    </div>
  );
};

export default ImageExample;