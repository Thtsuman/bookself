import React from "react";
import { Disclosure } from "@headlessui/react";
import NavLinks from "./NavLinks";
import {
  NavProfileDesktop,
  NavProfileMobile,
  NavProfileDisclosurePanel,
} from "./NavProfile";

const Navbar = () => {
  return (
    <Disclosure as="div" className="bg-gray-800 sticky top-0">
      {({ open: disclosureOpen }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="h-16 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-white font-bold tracking-wide uppercase">
                    BookShelf
                  </div>
                </div>
                <div className="hidden md:block">
                  <NavLinks />
                </div>
              </div>
              <div className="hidden md:block">
                <NavProfileDesktop />
              </div>
              <div className="flex md:hidden">
                <NavProfileMobile disclosureOpen={disclosureOpen} />
              </div>
            </div>
          </div>
          {disclosureOpen ? (
            <NavProfileDisclosurePanel disclosureOpen={disclosureOpen} />
          ) : (
            <></>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
