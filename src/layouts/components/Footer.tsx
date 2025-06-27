export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm text-center py-6">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="#" className="hover:text-yellow-300">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-300">
          Contact
        </a>
        <a href="#" className="hover:text-yellow-300">
          Careers
        </a>
        <a href="#" className="hover:text-yellow-300">
          Company
        </a>
      </div>
      <p>© {new Date().getFullYear()} Expense Manager. All rights reserved.</p>
    </footer>
  );
}
