import Image from "next/image";
import p from "@/public/p.jpg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      {/* Name / Heading */}
      <h1 className="hero-title">Ahmed Ayoub</h1>

      {/* Profile Image */}
      <div className="hero-image">
        <Image src={p} alt="Ahmed Ayoub" width={160} height={160} />
      </div>

      {/* Intro text */}
      <p className="hero-subtitle">Welcome to my blog & portfolio! 🚀</p>

      {/* Call-to-action links */}
      <div className="hero-actions">
        <Link href="/blog" className="btn btn-primary">
          Read my Blog
        </Link>
        <Link href="/store" className="btn btn-secondary">
          Visit my Store
        </Link>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Ahmed Ayoub | Portfolio",
  description: "Welcome to my portfolio. Explore my blog and product showcase.",
};
