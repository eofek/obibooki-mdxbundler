import Image from 'next/image'
import BlogImg from './BlogImg'
import CustomLink from './CustomLink'

const MDXComponent = {
  Image,
  a: CustomLink,
  BlogImg,
};

export default MDXComponent;
