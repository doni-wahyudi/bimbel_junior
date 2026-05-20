import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../../components/SEO';
import { blogPosts } from '../../data/blog';
import './BlogPostPage.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <SEO 
        title={`${post.title} | Blog Bimbel Junior`}
        description={post.excerpt}
      />

      {/* Header */}
      <section className="blog-post-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span className="breadcrumb-current">{post.category}</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-meta">
            <div className="blog-post-meta-item">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="blog-post-meta-divider" />
            <div className="blog-post-meta-item">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="blog-post-meta-divider" />
            <div className="blog-post-meta-item">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="blog-post-content-section section">
        <div className="container">
          <div className="blog-post-wrapper">
            <div className="blog-post-featured-image">
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <div className="blog-post-image-fallback" />
              )}
            </div>

            <article className="blog-post-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

            <div className="blog-post-actions">
              <Link to="/blog" className="btn btn-outline">
                <ArrowLeft size={20} />
                Kembali ke Daftar Artikel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
