import { fullBlog } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import React from 'react'
import Image from 'next/image';
import { PortableText } from '@portabletext/react';


async function getData( slug:string){
 const Query = `*[_type == "blogs" && slug.current == "${slug}"] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]`;

const data = await client.fetch(Query);
return data;
}

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);
  //console.log(data);
  return (
    <div className="mt-10">
      <h1>
        <span className="block text-base text-center text-primary font-semibold -tracking-wide uppercase">
          Hira Khalid - Blogs
        </span>
        <span className="mt-2 block text-3xl font-bold text-center leading-8 tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="title image"
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-xl">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
