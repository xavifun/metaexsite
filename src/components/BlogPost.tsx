import React from 'react';
import { Calendar, User } from 'lucide-react';

export function BlogPost() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Header */}
        <header className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary font-josefin">
              Enter blog title here
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <a href="mailto:author@metaextec.com" className="hover:text-accent transition-colors duration-200">
                  Author Name
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <time>March 14, 2024</time>
              </div>
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <p className="text-gray-600">
              Enter your blog content here. This is a placeholder for the main content of your blog post.
              You can include multiple paragraphs, headings, lists, and other content elements.
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">Comments</h2>
          
          <div className="space-y-8">
            {/* Comment Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-secondary mb-4">Leave a comment</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    placeholder="Write your comment here..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
                >
                  Post Comment
                </button>
              </form>
            </div>

            {/* Placeholder for comments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}