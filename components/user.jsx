import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ({ user }) {
  const { title, body, name, username, email, phone, id } = user;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography>{title}</Typography>
      <Typography>{body}</Typography>
      {/* <Typography>{name}</Typography>
      <Typography>{username}</Typography>
      <Typography>{email}</Typography>
      <Typography>{phone}</Typography> */}
      {(id && (
        <Typography>
          <Link href={`user/${id}`} passHref>
            Sinlge
          </Link>
        </Typography>
      )) ||
        ''}
    </Box>
  );
}
