import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogDetail from '../components/news/BlogDetail';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      <BlogDetail post={post} />
      <Footer />
    </div>
  );
};

export default BlogPost;