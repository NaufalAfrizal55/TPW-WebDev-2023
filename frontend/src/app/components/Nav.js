import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo/logo.svg";
import cart from "../../../public/cart.svg";
import chat from "../../../public/chat.svg";

const Nav = () => {
  return (
    <nav className=" bg-nav fixed w-screen z-20 top-0 start-0 ">
      <div className="flex flex-wrap items-center justify-between gap-[8px] pr-[80px] pl-[66px]">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <Image
            src={Logo}
            className="w-[160px] 2xl:w-[240px]"
            alt="BeanMasters Logo"
          />
          {/* <span className="text-text-800 text-self-center text-2xl font-semibold whitespace-nowrap text-brown-500">
            BeanMasters
          </span> */}
        </a>

        <div className="flex items-center gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://wa.me/+6288232863355">
            <Image src={chat} width={36} alt="chat-icon" className="hover:bg-brown-100 rounded-full"></Image>
          </Link>
          <Link href="#">
            <Image href="#" src={cart} width={36} alt="cart-icon"></Image>
          </Link>
          <Link
            href="/login"
            type="button"
            className="text-white hover:bg-orange-800 font-semibold font-inter rounded-[53px] text-sm px-4 py-2 text-center bg-button-100 "
          >
            Sign In
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-3 md:p-3 mt-4 font-PoetsenOne border rounded-lg  md:space-x-[88px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#product"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0  "
              >
                Our Product
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  //<header classNameName="fixed top-10 left-[">Header</header>;
};

export default Nav;
