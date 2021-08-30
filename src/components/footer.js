import React from 'react';

const Footer = () => {
  return (
    <footer className="items-center mt-28">
      <p className="text-center">
        <span className="text-gray-600 dark:text-white">
          Made by{' '}
          <a
            className="text-indigo-600 dark:text-gray-300 dark:hover:text-gray-600"
            href="https://edisonabdiel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edison Abdiel
          </a>
          <span className="ml-4">&copy;2020 - now</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
