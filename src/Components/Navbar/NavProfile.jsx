import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  UsersIcon,
  LogoutIcon
} from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { navigation } from "./NavLinks";

// const profile = ["Your Profile", "Settings", "Sign out"];

const profileLinkDefaultClassName = "h-4 w-4 mr-3";

const profile = [
  {
    key: "profile",
    label: "Profile",
    icon: (props) => {
      return (
        <UsersIcon
          {...props}
          className={`${profileLinkDefaultClassName} ${props?.className}`}
        />
      );
    },
  },
  {
    key: "signOut",
    label: "Sign Out",
    icon: (props) => {
      return (
        <LogoutIcon
          {...props}
          className={`${profileLinkDefaultClassName} ${props?.className}`}
        />
      );
    },
  },
];

const NavProfileDesktop = () => {
  return (
    <div>
      <Menu as="div" className="ml-3 relative">
        {({ open: menuOpen }) => (
          <>
            <Menu.Button className="max-w-xs bg-white-800 rounded-full flex items-center text-sm hover:bg-green-600 transition ease-in-out focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full ring-1 right-opacity-5"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex items-center text-green-400 justify-between hover:text-white">
                <div className="px-2">Tom Max</div>
                <ChevronDownIcon className="h-3 w-3  mr-2" />
              </div>
            </Menu.Button>{" "}
            <Transition
              show={menuOpen}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {profile.map((item, index) => (
                  <Menu.Item key={item.label}>
                    {({ active }) => (
                      <div className="cursor-pointer text-gray-700 hover:bg-gray-200 transition ease-in-out duration-75 block flex items-center px-4 py-2">
                        {item.icon ? item.icon() : <></>}
                        <div className="  text-sm ">{item.label}</div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

const NavProfileMobile = (props) => {
  const { disclosureOpen = false } = props;
  return (
    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {disclosureOpen ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

const NavProfileDisclosurePanel = (props) => {
  const { disclosureOpen = false } = props;

  return (
    <Transition
      show={disclosureOpen}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Disclosure.Panel static className="shadow-lg rounded-lg">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item, index) => (
            <Fragment key={index}>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <div className="bg-transparent text-white block px-3 py-2 rounded-md ">
                {item.label}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className=" leading-none text-green-300">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            {profile.map((item, index) => (
              <div
                key={`${item.label}${index}`}
                className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Disclosure.Panel>
    </Transition>
  );
};

export { NavProfileDesktop, NavProfileMobile, NavProfileDisclosurePanel };
