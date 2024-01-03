import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, useScroll } from "framer-motion"

const Card = ({ data, reference }) => {
    const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      drag dragConstraints={reference} whileDrag={{ scale: 1.2 }}
   className="w-52 h-64 relative shrink-0 rounded-4xl bg-zinc-900 space-y-2 opacity-90 p-8 overflow-hidden text-white">
        <FaRegFileAlt />
        <p className="text-sm">{data.discription}</p>
        <div className="absolute bottom-0 inset-x-0 text-sm ">
          <div className="flex items-center justify-between px-8 py-2">
            <span>{data.filesize}</span>
            <span className="p-2 bg-zinc-600 rounded-full">
              {data.close ? <IoClose size={14} /> : <LuDownload size={14} />}
            </span>
          </div>
          {data.isOpen && (
            <button
              type="button"
              className={`${
                data.close === true && data.isOpen === true
                  ? "bg-green-700"
                  : "bg-blue-600"
              } w-full h-10`}
            >
              {data.close === true && data.isOpen === true
                ? "Pause"
                : "Download Now"}
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
