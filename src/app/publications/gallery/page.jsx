'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function GalleryPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotatingQuotes = [
        { text: t('gallery.quote1'), link: "/about" },
        { text: t('gallery.quote2'), link: "/books" },
        { text: t('gallery.quote3'), link: "/publications" },
        { text: t('gallery.quote4'), link: "/events" },
        { text: t('gallery.quote5'), link: "/contact" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
        }, 4000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rotatingQuotes.length]);

    const galleryItems = [
        {
            id: 1,
            src: "/image/events/the_republic/signing_republic/Residenza358.jpg"
        },
        {
            id: 2,
            src: "/image/events/the_republic/general_photos_republic/615A7025.jpg"
        },
        {
            id: 3,
            src: "/image/events/Dasa/DASA 2.jpeg"
        },
        {
            id: 4,
            src: "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133940670_iOS.jpg"
        },
        {
            id: 5,
            src: "/image/events/10_commandments/10_english_Launch/AAB-BL171.jpg"
        },
        {
            id: 6,
            src: "/image/events/10_commandments/10_commandments_french/1.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PublicationsHeader
                scrolled={scrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                currentQuoteIndex={currentQuoteIndex}
                setCurrentQuoteIndex={setCurrentQuoteIndex}
                rotatingQuotes={rotatingQuotes}
            />

            <main className="flex-grow w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
                            {t('gallery.superheading')}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t('gallery.title')}
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('gallery.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {galleryItems.map((item) => (
                            <Link
                                href={`/publications/gallery/${item.id}`}
                                key={item.id}
                                className="group cursor-pointer flex flex-col space-y-4"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-100/50 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                                    <Image
                                        src={item.src}
                                        alt={t(`galleryTranslations.${item.id}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider text-gray-900 uppercase">
                                            {t(`galleryTranslations.${item.id}.category`)}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="font-playfair text-xl text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                                        {t(`galleryTranslations.${item.id}.title`)}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-500 uppercase tracking-wide">{t(`galleryTranslations.${item.id}.date`)}</p>
                                    <span className="inline-block mt-4 border-b border-transparent group-hover:border-amber-800 font-inter text-[10px] tracking-[0.2em] uppercase text-amber-800 transition-colors duration-300">
                                        {t('gallery.viewDetails')}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="inline-block border border-gray-900 px-8 py-3 text-sm font-medium tracking-widest text-gray-900 uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
                            {t('gallery.viewMore')}
                        </button>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
