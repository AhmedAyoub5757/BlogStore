import Link from 'next/link';
import Image from 'next/image';
import a from '../../public/a.jpeg';
import b from '../../public/b.jpg';

// Dummy data for demonstration
const posts = [
  {
    slug: 'first-post',
    title: 'First Post',
    thumbnail: a,
    excerpt: 'This is a short excerpt from the first post.',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    thumbnail: b,
    excerpt: 'This is a short excerpt from the second post.',
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page">
      <h1>Ahmed’s Blog</h1>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="thumbnail">
              <Image src={post.thumbnail} alt={post.title} fill className="image" />
            </div>
            <div className="content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Ahmed’s Blog",
  description: "Ahmed’s Blog | Articles on Next.js, React, and Web Development",
};
