import Image from 'next/image'
import Picture from './Picture'
import CustomLink from './CustomLink'
import Button from './Button'
import Insta from './Insta'
import YouTube from './Youtube'

const MDXComponent = {
  Image,
  a: CustomLink,
  Picture,
  Button, 
  YouTube,
  Insta
};

export default MDXComponent;
