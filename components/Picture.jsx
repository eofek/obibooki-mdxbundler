import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Picture (props) {
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