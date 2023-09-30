"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replaceAll(" ", "").includes(query.toLowerCase().replaceAll(" ", ""))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manufacturer}
        onChange={setManufacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              alt='car-logo'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transion ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterEnter={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{item}</span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
