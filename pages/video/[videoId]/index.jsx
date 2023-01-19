import { useRouter } from 'next/router';
import React from 'react';

const One = () => {
  const {
    query: { videoId },
  } = useRouter();
  return <div>Video :{videoId}</div>;
};

export default One;
