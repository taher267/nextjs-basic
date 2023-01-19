import { useRouter } from 'next/router';
import React from 'react';

const One = () => {
  const {
    query: { videoId, reviewId },
  } = useRouter();
  return (
    <div>
      Video :{videoId}: review {reviewId}
    </div>
  );
};

export default One;
