import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const Query = `*[_type == "blogs"] | order(createdAt desc) {
  title,
  smallDescription,
  "currentSlug": slug.current,
  titleImage
}
`;

  const data = await client.fetch(Query);
  return data;
}

export default async function Home() {
  const data: BlogCard[] = await getData();

  //console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={400}
            height={400}
            className="rounded-t-lg h-[200px] w-full object-cover"
          />
          <CardContent className="mt-5">
            <h1 className="text-lg line-clamp-2 font-bold">{post.title}</h1>
            <p className=" mt-3 line-clamp-6 text-sm text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
          </CardContent>

          <Button asChild className="w-full mt-7 font-bold">
            <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
