import React from 'react';
import FloatingDockDemo from './contact-us';
import Privacy from './privacy';

const Footer = () => {
  return (
    <div className="text-sm grid grid-cols-3 gap-10 p-4">
      <FloatingDockDemo/>
      <footer className="bg-gray-800 rounded-md text-white py-6">
        <div className="container mx-auto px-2">
          <h3 className="text-2xl font-bold mb-2 text-center">Stay Updated</h3>
          <p className="mb-4 text-center">Subscribe to our newsletter to receive the latest news, updates, and special offers straight to your inbox.</p>
          <form action="[Your Newsletter Signup URL]" method="post" className="space-y-4 flex flex-col items-center">
            <div className="w-full">
              <label htmlFor="newsletter-email" className="block mb-1">Email Address:</label>
              <input type="email" id="newsletter-email" name="newsletter-email" required className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white" />
            </div>
            <button type="submit" className="text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">Subscribe</button>
          </form>
        </div>
      </footer>
      <Privacy/>
    </div>
  );
};

export default Footer;
