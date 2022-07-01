import Image from 'next/image'
Ū

const BlogImg = (props) => {
    return (
      <div className="my-3">
        <Image
          src={props.src}
          alt={props.alt}
          layout="responsive"
          {...props}
          className="rounded-xl"
        />
      </div>
    );
  };

  export default BlogImg