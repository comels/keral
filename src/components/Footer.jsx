import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "150-0 B ter", href: "/150" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.17c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.17h-3v-4.97c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.93 1.3-1.93 2.63v5.06h-3v-10h2.88v1.36h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.62v5.58z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-10 lg:px-8">
        {/* Navigation Menu */}
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* LinkedIn Social Icon */}
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-center text-sm text-gray-600">
          &copy; 2024 Keral Capital, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
