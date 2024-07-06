"use client";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white border-t-2 border-t-white">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <a href="/">
              <img src="/static/camera.png" className="w-20" alt="Logo" />
            </a>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <span className="flex items-center justify-center">
              "Your favorite streaming services"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {
  Footer
}