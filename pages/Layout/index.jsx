import Link from 'next/link';

const Header = () => {
  return (
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/video">Video</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Header;
