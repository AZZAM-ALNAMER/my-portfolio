"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight, HiOutlinePhotograph } from "react-icons/hi";

interface ProjectGalleryProps {
    images: { src: string; label: string }[];
    video?: string;
    projectName: string;
}

export default function ProjectGallery({
    images,
    video,
    projectName,
}: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const openFullscreen = (index: number) => setCurrentIndex(index);
    const closeFullscreen = () => setCurrentIndex(null);

    const nextImage = useCallback(() => {
        if (currentIndex === null) return;
        setCurrentIndex((prev) =>
            prev !== null && prev < images.length - 1 ? prev + 1 : 0
        );
    }, [currentIndex, images.length]);

    const prevImage = useCallback(() => {
        if (currentIndex === null) return;
        setCurrentIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : images.length - 1
        );
    }, [currentIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;
            if (e.key === "Escape") closeFullscreen();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, nextImage, prevImage]);

    // Handle body scroll locking
    useEffect(() => {
        if (currentIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [currentIndex]);

    if (!images || images.length === 0) return null;

    return (
        <div className="space-y-12">
            {/* Featured Section */}
            <section>
                <div className="relative w-full h-auto aspect-video mb-8 overflow-hidden rounded-xl border dark:border-zinc-800 border-zinc-200 shadow-sm cursor-pointer group">
                    {video ? (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div
                            className="relative w-full h-full"
                            onClick={() => openFullscreen(0)}
                        >
                            <Image
                                src={images[0].src}
                                alt={projectName}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                quality={100}
                                priority
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <HiOutlinePhotograph className="text-xl" />
                                    View Gallery
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Gallery Grid */}
            {images.length > 0 && (
                <section>
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                        <h2 className="text-xl font-bold font-incognito px-4">Gallery</h2>
                        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className="space-y-4 cursor-pointer group"
                                    onClick={() => openFullscreen(idx)}
                                >
                                    <div className="relative h-56 w-full overflow-hidden rounded-2xl border dark:border-zinc-800 border-zinc-100 shadow-sm">
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {img.label}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-center text-zinc-500 dark:text-zinc-500 group-hover:text-tertiary-color transition-colors">
                                        {img.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {currentIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 md:p-12 lg:p-24 backdrop-blur-md"
                            onClick={closeFullscreen}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-8 right-8 text-white/50 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all z-[110] border border-white/10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeFullscreen();
                                }}
                            >
                                <HiX className="text-2xl" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all z-[110] hidden md:block border border-white/10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                <HiChevronLeft className="text-3xl" />
                            </button>

                            <button
                                className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all z-[110] hidden md:block border border-white/10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                <HiChevronRight className="text-3xl" />
                            </button>

                            {/* Content Container */}
                            <div
                                className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 gap-8"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                >
                                    <div className="relative w-screen max-w-5xl h-[60vh] lg:h-[75vh] px-4">
                                        <Image
                                            src={images[currentIndex].src}
                                            alt={images[currentIndex].label}
                                            fill
                                            className="object-contain"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                </motion.div>

                                <div className="text-center space-y-2">
                                    <motion.h3
                                        key={`title-${currentIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <h3 className="text-white text-2xl font-bold font-incognito tracking-tight">
                                            {images[currentIndex].label}
                                        </h3>
                                    </motion.h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">
                                        {currentIndex + 1} <span className="mx-2 text-white/20">/</span> {images.length}
                                    </p>
                                </div>

                                {/* Mobile controls */}
                                <div className="flex md:hidden gap-6 mt-4">
                                    <button
                                        onClick={prevImage}
                                        className="p-4 bg-white/5 rounded-full text-white border border-white/10"
                                    >
                                        <HiChevronLeft className="text-2xl" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="p-4 bg-white/5 rounded-full text-white border border-white/10"
                                    >
                                        <HiChevronRight className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
