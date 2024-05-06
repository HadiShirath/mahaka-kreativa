/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function ModalProject({
  modalIsOpen,
  dataModal,
  setModalIsOpen,
}) {
  return (
    <div
      className="fixed w-full h-full flex top-0  bottom-0 items-center justify-center z-[30]"
      onClick={() => setModalIsOpen(!modalIsOpen)}
    >
      <div className="w-full h-full bg-black opacity-70" />
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="border-opacity-40 w-[80%] rounded-3xl absolute"
      >
        <div className="w-full flex items-center justify-center">
          <img src={dataModal} alt="" className="" />
        </div>
      </motion.div>
    </div>
  );
}
