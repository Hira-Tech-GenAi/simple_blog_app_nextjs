import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 py-6 mt-5 rounded">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-4">Follow us on Social Media</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="mt-6">
          <Link
            href="/comments"
            className="px-4 py-2 bg-pink-400 text-white text-sm font-medium rounded-md hover:bg-pink-600 transition-all duration-300 inline-block"
          >
            Comments
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Blog App. All rights reserved By
          Hira Khalid.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
