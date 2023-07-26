import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Typography, Button } from '@mui/material';
import Link from 'next/link';
import { BlogCover } from '../components/BlogCover.js';
import { getBlogPages } from '@/src/contentful';

const inter = Inter({ subsets: ['latin'] });

function Home({ blogs }) {
  return (
    <main>
      <Typography variant="h1" component={'h1'}>
        Hello World
      </Typography>

      {blogs &&
        blogs.map((blog) => {
          <BlogCover {...blog.fields} />;
        })}
    </main>
  );
}

export default Home;

export async function getServerSideProps() {
  const blogPages = await getBlogPages();
  return {
    props: { blogs: blogPages },
  };
}
