import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { blogPosts } from '../../data/blog';
import './BlogPage.css';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return blogPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="blog-page">
      <SEO 
        title="Blog & Tips Belajar"
        description="Kumpulan artikel edukasi, tips belajar, dan informasi SNBT terbaru dari tim akademik Bimbel Junior."
      />

      {/* Hero Section */}
      <section className="blog-hero gradient-hero">
        <div className="container">
          <AnimateOnScroll className="blog-hero__content">
            <h1 className="blog-hero__title">Blog & Artikel Edukasi</h1>
            <p className="blog-hero__subtitle">
              Temukan berbagai tips belajar efektif, info SNBT, dan inspirasi meraih prestasi dari pakar pendidikan kami.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {currentPosts.map((post, index) => (
              <AnimateOnScroll key={post.id} delay={index * 0.1}>
                <article className="blog-card">
                  <Link to={`/blog/${post.slug}`} className="blog-card__image-link">
                    <div className="blog-card__image-wrapper">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="blog-card__image" />
                      ) : (
                        <div className="blog-card__image-fallback" />
                      )}
                      <span className="blog-card__category">{post.category}</span>
                    </div>
                  </Link>
                  
                  <div className="blog-card__content">
                    <div className="blog-card__meta">
                      <div className="blog-card__meta-item">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-card__meta-item">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="blog-card__title-link">
                      <h2 className="blog-card__title">{post.title}</h2>
                    </Link>
                    
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card__footer">
                      <div className="blog-card__author">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                        Baca <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i + 1}
                  className={`pagination-btn ${currentPage === i + 1 ? 'pagination-btn--active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                className="pagination-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
