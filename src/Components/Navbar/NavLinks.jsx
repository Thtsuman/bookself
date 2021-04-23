import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

export const navigation = [
  {
    key: "category",
    label: "Category",
  },
  {
    key: "genre",
    label: "Genre1",
  },
];

const NavLinks = () => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {navigation.slice(0, 3).map((item, index) => (
        <div
          key={`${item.label}${index}`}
          className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-gray-400 hover:text-white cursor-pointer transition ease-in-out"
        >
          {item.label}
        </div>
      ))}
      {navigation.length > 3 ? (
        <div className="w-56">
          <Menu as="div" className="relative inline-block text-left">
            {({ open: menuOpen }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-400 ring-1 ring-black ring-opacity-5 rounded-lg hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    More
                    <ChevronDownIcon
                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <Transition
                    show={menuOpen || false}
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
                      {navigation.slice(3).map((item, index) => (
                        <Menu.Item key={`${item.label}`}>
                          {({ active }) => (
                            <div
                              key={index}
                              className="bg-gray-100 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition ease-in-out duration-75"
                            >
                              {item.label}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </div>
              </>
            )}
          </Menu>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavLinks;
