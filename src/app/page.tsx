export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center">Welcome to BookPedia</h1>
          <p className="text-xl text-center mt-2">
            Your ultimate platform to explore, read, and manage books.
          </p>
          <div className="text-center mt-4">
            <a
              href="/login"
              className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Choose BookPedia?</h2>
          <p className="mt-4 text-lg text-gray-600">
            BookPedia offers a simple, efficient, and enjoyable way to discover, organize, and manage your reading journey.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4">
                <i className="fas fa-book-reader text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Explore Books</h3>
              <p className="mt-2 text-gray-600">
                Discover a wide range of books from different genres and categories. Find your next great read!
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4">
                <i className="fas fa-book-open text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Read & Review</h3>
              <p className="mt-2 text-gray-600">
                Read your favorite books and leave reviews to help others discover great titles.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-900 text-white p-6 rounded-full mb-4">
                <i className="fas fa-user-cog text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Manage Your Library</h3>
              <p className="mt-2 text-gray-600">
                Organize your collection, keep track of your reading progress, and set reading goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Join BookPedia Today</h2>
          <p className="mt-4 text-lg">
            Sign up today and start your journey with BookPedia, your go-to platform for managing and enjoying books.
          </p>
          <div className="mt-8">
            <a
              href="/register"
              className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-200"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} BookPedia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
