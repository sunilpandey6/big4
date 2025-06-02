import { useState } from 'react';
import { BlogPost } from '../types/blog';
import { blogPosts as initialPosts } from '../data/blogPosts';
import { slugify } from '../utils/string';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: slugify(post.title),
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (updatedPost: BlogPost) => {
    setPosts(posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return {
    posts,
    addPost,
    updatePost,
    deletePost
  };
};