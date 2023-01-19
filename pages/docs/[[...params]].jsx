import { useRouter } from 'next/router';
import React from 'react';

const Doc = () => {
  const {
    query: { params },
  } = useRouter();
  return <div>{JSON.stringify('Y')}</div>;
};

export default Doc;
