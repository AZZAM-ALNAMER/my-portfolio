"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Interactive({ children }: PropsWithChildren) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
}
