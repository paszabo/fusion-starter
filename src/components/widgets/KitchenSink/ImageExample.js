import React from 'react';
import Image from 'react-bootstrap/lib/Image';

const ImageExample = () => {
  return (
    <div>
      <Image alt="Rounded Placeholder" src="https://placehold.it/100x100" rounded/>{' '}
      <Image alt="Circle Placeholder" src="https://placehold.it/100x100" circle/>{' '}
      <Image alt="Thumbnail Placeholder" src="https://placehold.it/100x100" thumbnail/>
    </div>
  );
};

export default ImageExample;
