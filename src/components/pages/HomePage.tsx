"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  rating: number;
  createdAt: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Ambil data post dari API saat komponen di-mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
          const response = await axios.get('/api/books');
          setPosts(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Jika sedang loading, tampilkan pesan loading
  if (loading) return <p>Loading...</p>;

  // Jika ada error, tampilkan pesan error
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts List</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>Category: {post.category}</p>
              <img src={post.imageUrl} alt={post.title} style={{ width: '200px', height: 'auto' }} />
              <p>{post.description}</p>
              <p>Rating: {post.rating}</p>
              <p>Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
