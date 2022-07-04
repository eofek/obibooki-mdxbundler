import Link
 from "next/link"
import Image from 'next/image'
import slugify from 'react-slugify';


export default function PostTile(post){
    return(
      <div className="p-4 w-full mx-4 md:mx-0 md:w-1/2 lg:w-1/3">
          <div className="md:flex md:flex-col h-full border-[1px] border-cerise-600 border-opacity-60 rounded-lg overflow-hidden bg-[#fff] p-3">
            <div className="rounded-t-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.heroImg} width={720} height={400} alt="blog" layout="responsive" sizes="33vw" />
            </div>
            <div className="p-6 grow">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                <Link href={post.slug}>
                  <a>{post.title}</a>
                </Link>
              </h1>       
             
            </div>
            <div className="flex flex-wrap place-content-center">
              {post.tags
                  .map((tag) => {
                    const url = slugify(tag)
                    return (
                      <span key={url} className="tracking-widest text-xs title-font text-cerise-600 mb-1 mr-5 p-2 whitespace-nowrap">
                        <Link href={`/tag/${url}`}><a>{tag}</a></Link>
                      </span>     
                    )
                  })
              }
            </div>
        </div>
      </div>
    )
  }