import User from '@/components/user';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router';
import Header from '../../components/Layout';

export default function ({ users }) {
  //   const router = useRouter();
  //   console.log(router);
  return (
    <Box>
      <Header />
      <Typography>User List</Typography>
      <Box>
        {users?.map?.((user) => (
          <User key={user.id} user={user} />
        ))}
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const users = await response.json();
  return {
    props: { users: users },
  };
}
