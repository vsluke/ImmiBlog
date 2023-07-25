import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export const BlogCover = ({ title, description, coverImage }) => (
  <>
    <Typography component={'h3'} variant={'h3'}>
      {title}
    </Typography>
    <Typography component={'h4'} variant={'h4'}>
      {description}
    </Typography>
    <src
      alt={coverImage.fields.description}
      src={`https:${coverImage.fields.file.url}&q=80&h=590&w=433`}
    />
  </>
);
