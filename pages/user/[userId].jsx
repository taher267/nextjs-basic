import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '@/components/Layout';
import User from '@/components/user';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

export default function ({ user }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <CircularProgress />;
  }
  const { id, ...rest } = user;
  return (
    <>
      <Header />
      <Box>
        <Typography>Singe User</Typography>
        <User user={rest} />
      </Box>
    </>
  );
}
export async function getStaticPaths({ params }) {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  // const data = await response.json();
  // const paths = data?.map?.(({ id }) => ({ params: { userId: `${id}` } }));
  // console.log(paths);
  return {
    // paths,
    paths: [
      {
        params: { userId: '1' },
      },
      {
        params: { userId: '2' },
      },
      {
        params: { userId: '3' },
      },
      {
        params: { userId: '4' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.userId}`
  );
  const user = await response.json();
  if (!user?.id)
    return {
      notFound: true,
    };
  return {
    props: { user },
  };
}
