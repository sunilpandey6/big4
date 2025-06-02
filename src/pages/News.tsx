import NewsHero from '../components/news/NewsHero';
import BlogCard from '../components/news/BlogCard';
import Footer from '../components/Footer';
import { useBlog } from '../contexts/BlogContext';

const News = () => {
  const { posts } = useBlog();

  return (
    <div className="min-h-screen">
      <NewsHero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                image={post.image}
                excerpt={post.excerpt}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;