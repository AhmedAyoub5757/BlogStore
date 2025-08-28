import React from 'react';
import Link from 'next/link';

export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Later you could fetch the actual post data here
  // For now, we'll just use placeholder content
  const post = {
    title: `Blog Post: ${slug}`,
    content: `This is a placeholder blog post for "${slug}". In a real app, you'd fetch the content from a database or markdown file.`,
    date: "August 28, 2025",
    author: "Ahmed Ayoub",
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta info */}
      <div className="text-gray-500 text-sm mb-8">
        <span>By {post.author}</span> · <span>{post.date}</span>
      </div>

      {/* Content */}
      <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p>{post.content}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          elementum augue. Integer ac bibendum nisl, ut commodo elit. Vivamus
          sagittis lorem et nunc laoreet, ac facilisis ligula porta.
        </p>
      </article>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
