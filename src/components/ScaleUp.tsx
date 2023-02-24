import { motion } from "framer-motion";

export default function ScaleUp({ children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex gap-x-4 items-center justify-center bg-zinc-200 dark:bg-zinc-600 mx-4 py-2 px-4 h-16 rounded-md text-zinc-600 dark:text-white overflow-hidden"
    >
        { children }
    </motion.div>
  );
}