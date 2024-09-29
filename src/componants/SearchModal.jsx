import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { PiCaretRightBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom"; // Replacing Next.js routing with React Router
import DevInputV2 from "./DevInputV2";
import Downshift from "downshift";

const SearchModal = ({ bgDrop = true }) => {
  const [mount, setMount] = useState(false);
  const navigate = useNavigate(); // React Router's hook for navigation

  return (
    <>
      <section className="relative">
      <Downshift
          onChange={(item) => navigate(`/components/${CmpUrl(item.name)}`)} // Use React Router's navigate instead of router.push
          itemToString={(item) => item?.name ?? ""}
          onStateChange={({ isOpen }) => isOpen !== undefined && setMount(isOpen)}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div className="relative w-full">
              <label className="flex flex-col" {...getLabelProps()}>
                <DevInputV2
                  scale="md"
                  icon={<LuSearch className="text-xl" />}
                  placeholder="Search Components.."
                  {...getInputProps()}
                />
              </label>
              {isOpen && (
                <ul
                  className="w-full border border-accentNeon/30 rounded-lg  absolute space-y-2 max-h-52 overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-rtlLight dark:bg-rtlDark mt-1 overflow-hidden"
                  {...getMenuProps()}
                >
                  {ComponentDataArray.filter(
                    (item) =>
                      !inputValue ||
                      item.name
                        .toLocaleLowerCase()
                        .includes(inputValue.toLocaleLowerCase())
                  ).map((item, index) => (
                    <li
                      key={item.name}
                      {...getItemProps({
                        item,
                        index,
                        className: `${
                          highlightedIndex === index &&
                          "bg-accentNeon text-white"
                        }`,
                      })}
                    >
                      <Link
                        className="p-2 flex items-center justify-between gap-3 w-full"
                        to={`/components/${CmpUrl(item.name)}`} // React Router's Link with 'to' attribute
                      >
                        <h2 className="flex items-center gap-2">
                          <LuSearch /> {item.name}
                        </h2>{" "}
                        <PiCaretRightBold className="text-right" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Downshift>
      </section>
      {bgDrop && mount &&
        createPortal(
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50"
            onClick={() => setMount(false)}
          >
            <IoCloseCircleOutline
              onClick={() => setMount(false)}
              className="absolute top-3 right-3 text-accent text-3xl cursor-pointer hover:opacity-80"
            />
          </motion.main>,
          document.body
        )}
    </>
  );
};

export default SearchModal;
