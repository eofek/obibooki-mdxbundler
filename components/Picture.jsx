import Image from 'next/image'

const Picture = ({src, alt, width="1024", height="768"}) => {
    return (
      <div className="my-3">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={width} 
          height={height} 
          loading="lazy" 
          sizes="75vw" 
          className="rounded-xl"
        />
      </div>
    );
  };

  export default Picture