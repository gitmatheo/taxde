import { useState } from 'react';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const handlePostClick = (postId: string) => {
    setSelectedPost(postId);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return <BlogPost postId={selectedPost} onBackClick={handleBackClick} />;
  }

  return <BlogList onPostClick={handlePostClick} />;
};

export default Blog;