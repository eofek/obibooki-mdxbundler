import Image from "next/image";

import BlogCard from "../components/BlogCard";
import { getAllFilesFrontMatter } from "../lib/mdx";

const Home = ({ posts }) => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <section className="grid grid-cols-1 gap-5 px-5 mt-32 lg:grid-cols-2">
        <div className="flex flex-col order-2 w-full space-y-7 lg:order-1">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-purple-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-700">Frivago.</p>
          </div>
          <h5 className="text-6xl font-black leading-none tracking-tight text-gray-800">
            Blog while you&apos;re on the go
          </h5>
          <p className="text-lg font-medium text-gray-600">
            Quisque efficitur ipsum in cursus auctor. Sed fringilla lacus ac
            turpis vehicula, et facilisis neque consectetur. Proin quis posuere
            nibh. Maecenas a lacinia erat.
          </p>
          <div className="flex items-center space-x-7">
            <button className="px-6 py-3 text-white bg-purple-500 rounded-lg">
              Checkout
            </button>
            <button className="px-6 py-3 text-gray-700 border-2 border-gray-700 rounded-lg">
              Locations
            </button>
          </div>
        </div>
        <div className="order-1 w-full lg:order-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/blog_img_4.jpg"
              width={800}
              height={533}
              layout="responsive"
              alt="cover image"
              priority
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col px-5 my-10 mt-24 space-y-7">
        {/* blog section */}
        <div className="px-3 text-5xl font-black text-gray-800 border-l-4 border-purple-500 rounded">
          <h5 className="leading-none tracking-tight">Recent Posts</h5>
        </div>
        <div className="grid grid-cols-1 gap-4 p-3 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 rounded-xl">
          {posts.map((item, _idx) => (
            <BlogCard {...posts[_idx]} key={item.slug} />
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}

export default Home;
