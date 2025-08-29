import React from 'react';
import Link from 'next/link';

export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Placeholder blog post data
  const post = {
    title: `Blog Post: ${slug}`,
    content: `This is a placeholder blog post for "${slug}". In a real app, you'd fetch the content from a database or markdown file.`,
    date: "August 28, 2025",
    author: "Ahmed Ayoub",
  };

  return (
    <main className="blog-post-page">
      {/* Title */}
      <h1 className="post-title">{post.title}</h1>

      {/* Meta info */}
      <div className="post-meta">
        <span>By {post.author}</span> · <span>{post.date}</span>
      </div>

      {/* Content */}
      <article className="post-content">
        <p>{post.content}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          elementum augue. Integer ac bibendum nisl, ut commodo elit. Vivamus
          sagittis lorem et nunc laoreet, ac facilisis ligula porta.
        </p>
      </article>

      {/* Back link */}
      <div className="back-link">
        <Link href="/blog">← Back to Blog</Link>
      </div>
    </main>
  );
}
