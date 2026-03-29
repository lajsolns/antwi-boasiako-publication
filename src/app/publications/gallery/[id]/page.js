'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryData = {
    '1': {
        title: "Author Signings: The Republic",
        category: "Book Signings",
        date: "January 2026",
        description: "A record of intimate moments from the book signing sessions for 'The Republic: A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country'. Dr. Antwi-Boasiako personally signed copies for dignitaries, government officials, and distinguished guests.",
        video: null,
        images: [
            "/image/events/the_republic/signing_republic/Residenza358.jpg",
            "/image/events/the_republic/signing_republic/5.jpg",
            "/image/events/the_republic/signing_republic/7.jpg",
            "/image/events/the_republic/signing_republic/8.jpg",
            "/image/events/the_republic/signing_republic/CAL 107.jpg",
            "/image/events/the_republic/signing_republic/CAL 11.jpg",
            "/image/events/the_republic/signing_republic/CAL 110.jpg",
            "/image/events/the_republic/signing_republic/CAL 131.jpg",
            "/image/events/the_republic/signing_republic/CAL 136.jpg",
            "/image/events/the_republic/signing_republic/CAL 145.jpg",
            "/image/events/the_republic/signing_republic/CAL 151.jpg",
            "/image/events/the_republic/signing_republic/CAL 153.jpg",
            "/image/events/the_republic/signing_republic/CAL 16.jpg",
            "/image/events/the_republic/signing_republic/CAL 166.jpg",
            "/image/events/the_republic/signing_republic/CAL 178.jpg",
            "/image/events/the_republic/signing_republic/CAL 180.jpg",
            "/image/events/the_republic/signing_republic/CAL 201.jpg",
            "/image/events/the_republic/signing_republic/CAL 21.jpg",
            "/image/events/the_republic/signing_republic/CAL 27.jpg",
            "/image/events/the_republic/signing_republic/CAL 56.jpg",
            "/image/events/the_republic/signing_republic/CAL 71.jpg",
            "/image/events/the_republic/signing_republic/CAL 83.jpg",
            "/image/events/the_republic/signing_republic/CAL 86.jpg",
            "/image/events/the_republic/signing_republic/CAL 9.jpg",
            "/image/events/the_republic/signing_republic/Madam Abena Attobrah.jpg",
            "/image/events/the_republic/signing_republic/Madam Elizabeth Ashmond.jpg",
            "/image/events/the_republic/signing_republic/Madam Felicia.jpg",
            "/image/events/the_republic/signing_republic/Madam Leticia (Training).jpg",
            "/image/events/the_republic/signing_republic/Madam Lordina 1.jpg",
            "/image/events/the_republic/signing_republic/Madam Sarah.jpg",
            "/image/events/the_republic/signing_republic/Residenza10.jpg",
            "/image/events/the_republic/signing_republic/Residenza122.jpg",
            "/image/events/the_republic/signing_republic/Residenza124.jpg",
            "/image/events/the_republic/signing_republic/Residenza130.jpg",
            "/image/events/the_republic/signing_republic/Residenza134.jpg",
            "/image/events/the_republic/signing_republic/Residenza166.jpg",
            "/image/events/the_republic/signing_republic/Residenza171.jpg",
            "/image/events/the_republic/signing_republic/Residenza176.jpg",
            "/image/events/the_republic/signing_republic/Residenza179.jpg",
            "/image/events/the_republic/signing_republic/Residenza22.jpg",
            "/image/events/the_republic/signing_republic/Residenza222.jpg",
            "/image/events/the_republic/signing_republic/Residenza228.jpg",
            "/image/events/the_republic/signing_republic/Residenza232.jpg",
            "/image/events/the_republic/signing_republic/Residenza256.jpg",
            "/image/events/the_republic/signing_republic/Residenza27.jpg",
            "/image/events/the_republic/signing_republic/Residenza285.jpg",
            "/image/events/the_republic/signing_republic/Residenza288.jpg",
            "/image/events/the_republic/signing_republic/Residenza296.jpg",
            "/image/events/the_republic/signing_republic/Residenza298.jpg",
            "/image/events/the_republic/signing_republic/Residenza301.jpg",
            "/image/events/the_republic/signing_republic/Residenza303.jpg",
            "/image/events/the_republic/signing_republic/Residenza314.jpg",
            "/image/events/the_republic/signing_republic/Residenza325.jpg",
            "/image/events/the_republic/signing_republic/Residenza327.jpg",
            "/image/events/the_republic/signing_republic/Residenza33.jpg",
            "/image/events/the_republic/signing_republic/Residenza351.jpg",
            "/image/events/the_republic/signing_republic/Residenza385.jpg",
            "/image/events/the_republic/signing_republic/Residenza63.jpg",
            "/image/events/the_republic/signing_republic/Residenza69.jpg",
            "/image/events/the_republic/signing_republic/Sir Albert.jpg",
            "/image/events/the_republic/signing_republic/Sir Benjamin.jpg",
            "/image/events/the_republic/signing_republic/Sir Emmanuel.jpg",
            "/image/events/the_republic/signing_republic/Sir Enoch 1.jpg",
            "/image/events/the_republic/signing_republic/Sir Enoch 2.jpg",
            "/image/events/the_republic/signing_republic/Sir Ernest.jpg",
            "/image/events/the_republic/signing_republic/Sir Godwin.jpg",
            "/image/events/the_republic/signing_republic/Sir Kwasi.jpg",
            "/image/events/the_republic/signing_republic/Sir Reindolf.jpg",
            "/image/events/the_republic/signing_republic/Sir Richard.jpg"
        ]
    },
    '2': {
        title: "Book Launch: The Republic",
        category: "Book Launch",
        date: "November 2025",
        description: "Scenes from the official launch event for 'The Republic: A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country' held at the British Council, Liberia Road, Accra on November 25, 2025.",
        video: null,
        images: [
            "/image/events/the_republic/general_photos_republic/615A7025.jpg",
            "/image/events/the_republic/general_photos_republic/615A7028.jpg",
            "/image/events/the_republic/general_photos_republic/615A7037.jpg",
            "/image/events/the_republic/general_photos_republic/615A7096.jpg",
            "/image/events/the_republic/general_photos_republic/615A7098.jpg",
            "/image/events/the_republic/general_photos_republic/615A7101.jpg",
            "/image/events/the_republic/general_photos_republic/615A7103.jpg",
            "/image/events/the_republic/general_photos_republic/615A7106.jpg",
            "/image/events/the_republic/general_photos_republic/615A7109.jpg",
            "/image/events/the_republic/general_photos_republic/615A7114.jpg",
            "/image/events/the_republic/general_photos_republic/615A7117.jpg",
            "/image/events/the_republic/general_photos_republic/615A7122.jpg",
            "/image/events/the_republic/general_photos_republic/615A7124.jpg",
            "/image/events/the_republic/general_photos_republic/615A7126.jpg",
            "/image/events/the_republic/general_photos_republic/615A7128.jpg",
            "/image/events/the_republic/general_photos_republic/615A7130.jpg",
            "/image/events/the_republic/general_photos_republic/615A7132.jpg",
            "/image/events/the_republic/general_photos_republic/615A7134.jpg",
            "/image/events/the_republic/general_photos_republic/615A7136.jpg",
            "/image/events/the_republic/general_photos_republic/615A7137.jpg",
            "/image/events/the_republic/general_photos_republic/615A7142.jpg",
            "/image/events/the_republic/general_photos_republic/615A7146.jpg",
            "/image/events/the_republic/general_photos_republic/615A7149.jpg",
            "/image/events/the_republic/general_photos_republic/615A7156.jpg",
            "/image/events/the_republic/general_photos_republic/615A7161.jpg",
            "/image/events/the_republic/general_photos_republic/615A7164.jpg",
            "/image/events/the_republic/general_photos_republic/615A7167.jpg",
            "/image/events/the_republic/general_photos_republic/615A7169.jpg",
            "/image/events/the_republic/general_photos_republic/615A7172.jpg",
            "/image/events/the_republic/general_photos_republic/615A7173.jpg",
            "/image/events/the_republic/general_photos_republic/615A7174.jpg",
            "/image/events/the_republic/general_photos_republic/615A7176.jpg",
            "/image/events/the_republic/general_photos_republic/615A7183.jpg",
            "/image/events/the_republic/general_photos_republic/615A7186.jpg",
            "/image/events/the_republic/general_photos_republic/615A7188.jpg",
            "/image/events/the_republic/general_photos_republic/615A7190.jpg",
            "/image/events/the_republic/general_photos_republic/615A7193.jpg",
            "/image/events/the_republic/general_photos_republic/615A7200.jpg",
            "/image/events/the_republic/general_photos_republic/615A7201.jpg",
            "/image/events/the_republic/general_photos_republic/615A7204.jpg",
            "/image/events/the_republic/general_photos_republic/615A7205.jpg",
            "/image/events/the_republic/general_photos_republic/615A7206.jpg",
            "/image/events/the_republic/general_photos_republic/615A7212.jpg",
            "/image/events/the_republic/general_photos_republic/615A7222.jpg",
            "/image/events/the_republic/general_photos_republic/615A7229.jpg",
            "/image/events/the_republic/general_photos_republic/615A7232.jpg",
            "/image/events/the_republic/general_photos_republic/615A7241.jpg",
            "/image/events/the_republic/general_photos_republic/615A7244.jpg",
            "/image/events/the_republic/general_photos_republic/615A7246.jpg",
            "/image/events/the_republic/general_photos_republic/615A7250.jpg",
            "/image/events/the_republic/general_photos_republic/615A7251.jpg",
            "/image/events/the_republic/general_photos_republic/615A7257.jpg",
            "/image/events/the_republic/general_photos_republic/615A7258.jpg",
            "/image/events/the_republic/general_photos_republic/615A7259.jpg",
            "/image/events/the_republic/general_photos_republic/615A7276.jpg",
            "/image/events/the_republic/general_photos_republic/615A7278.jpg",
            "/image/events/the_republic/general_photos_republic/615A7279.jpg",
            "/image/events/the_republic/general_photos_republic/615A7280.jpg",
            "/image/events/the_republic/general_photos_republic/615A7283.jpg",
            "/image/events/the_republic/general_photos_republic/615A7285.jpg",
            "/image/events/the_republic/general_photos_republic/615A7286.jpg",
            "/image/events/the_republic/general_photos_republic/615A7292.jpg",
            "/image/events/the_republic/general_photos_republic/615A7295.jpg",
            "/image/events/the_republic/general_photos_republic/615A7302.jpg",
            "/image/events/the_republic/general_photos_republic/615A7307.jpg",
            "/image/events/the_republic/general_photos_republic/615A7308.jpg",
            "/image/events/the_republic/general_photos_republic/615A7309.jpg",
            "/image/events/the_republic/general_photos_republic/615A7310.jpg",
            "/image/events/the_republic/general_photos_republic/615A7313.jpg",
            "/image/events/the_republic/general_photos_republic/615A7314.jpg",
            "/image/events/the_republic/general_photos_republic/615A7315.jpg",
            "/image/events/the_republic/general_photos_republic/615A7316.jpg",
            "/image/events/the_republic/general_photos_republic/615A7317.jpg",
            "/image/events/the_republic/general_photos_republic/615A7318.jpg",
            "/image/events/the_republic/general_photos_republic/615A7319.jpg",
            "/image/events/the_republic/general_photos_republic/615A7320.jpg",
            "/image/events/the_republic/general_photos_republic/615A7321.jpg",
            "/image/events/the_republic/general_photos_republic/615A7322.jpg",
            "/image/events/the_republic/general_photos_republic/615A7323.jpg",
            "/image/events/the_republic/general_photos_republic/615A7325.jpg",
            "/image/events/the_republic/general_photos_republic/615A7329.jpg",
            "/image/events/the_republic/general_photos_republic/615A7330.jpg",
            "/image/events/the_republic/general_photos_republic/615A7334.jpg",
            "/image/events/the_republic/general_photos_republic/615A7336.jpg",
            "/image/events/the_republic/general_photos_republic/615A7337.jpg",
            "/image/events/the_republic/general_photos_republic/615A7339.jpg",
            "/image/events/the_republic/general_photos_republic/615A7340.jpg",
            "/image/events/the_republic/general_photos_republic/615A7342.jpg",
            "/image/events/the_republic/general_photos_republic/615A7344.jpg",
            "/image/events/the_republic/general_photos_republic/615A7345.jpg",
            "/image/events/the_republic/general_photos_republic/615A7346.jpg",
            "/image/events/the_republic/general_photos_republic/615A7347.jpg",
            "/image/events/the_republic/general_photos_republic/615A7349.jpg",
            "/image/events/the_republic/general_photos_republic/615A7350.jpg",
            "/image/events/the_republic/general_photos_republic/615A7351.jpg",
            "/image/events/the_republic/general_photos_republic/615A7355.jpg",
            "/image/events/the_republic/general_photos_republic/615A7356.jpg",
            "/image/events/the_republic/general_photos_republic/615A7359.jpg",
            "/image/events/the_republic/general_photos_republic/615A7361.jpg",
            "/image/events/the_republic/general_photos_republic/615A7362.jpg",
            "/image/events/the_republic/general_photos_republic/615A7365.jpg",
            "/image/events/the_republic/general_photos_republic/615A7367.jpg",
            "/image/events/the_republic/general_photos_republic/Dr x H.E. Laura.jpg",
            "/image/events/the_republic/general_photos_republic/Dr x Hon Kan Dapaah.jpg",
            "/image/events/the_republic/general_photos_republic/MADAM LOUISA DPC.jpg",
            "/image/events/the_republic/general_photos_republic/MADAM NATASHA (DPC).jpg"
        ]
    },
    '3': {
        title: "Digital Assets Summit Africa (DASA '25)",
        category: "Conference",
        date: "September 2025",
        description: "Dr. Albert Antwi-Boasiako speaking at the Digital Assets Summit Africa (DASA '25) — a premier event bringing together policymakers, industry leaders, and innovators to explore the future of digital assets and blockchain technology in Africa, held at the Ghana-India Kofi Annan Centre of Excellence in ICT (GI-KACE), Accra.",
        video: null,
        images: [
            "/image/events/Dasa/DASA 2.jpeg",
            "/image/events/Dasa/1I0A9667.jpg",
            "/image/events/Dasa/1I0A9679.jpg",
            "/image/events/Dasa/1I0A9683.jpg",
            "/image/events/Dasa/1I0A9707.jpg",
            "/image/events/Dasa/1I0A9710.jpg",
            "/image/events/Dasa/1I0A9715.jpg",
            "/image/events/Dasa/1I0A9718.jpg",
            "/image/events/Dasa/DASA 3.jpeg",
            "/image/events/Dasa/DASA 5.jpeg",
            "/image/events/Dasa/DASA 7.jpeg"
        ]
    },
    '4': {
        title: "Author Signings: The 10 Commandments for Sustainable National Cybersecurity Development",
        category: "Book Signings",
        date: "November 2024",
        description: "Dr. Antwi-Boasiako personally signing copies of 'The 10 Commandments for Sustainable National Cybersecurity Development' for ambassadors and distinguished guests following the book launch at the British Council, Liberia Road, Accra.",
        video: null,
        images: [
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133940670_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_122206210_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_122744540_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133121660_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133233240_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133254000_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133406310_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133519190_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133536000_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133556790_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133610150_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133709640_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133721720_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133938290_iOS.jpg",
            "/image/events/10_commandments/10_english_signed_copy_ambassadors/20241129_133940670_iOS.jpg"
        ]
    },
    '5': {
        title: "Book Launch: The 10 Commandments for Sustainable National Cybersecurity Development",
        category: "Book Launch",
        date: "November 2024",
        description: "Scenes from the official launch of 'The 10 Commandments for Sustainable National Cybersecurity Development — Africa in Context: Practical Lessons & Good Practices' at the British Council, Liberia Road, Accra on November 28, 2024.",
        video: null,
        images: [
            "/image/events/10_commandments/10_english_Launch/AAB-BL171.jpg",
            "/image/events/10_commandments/10_english_Launch/1V5A0330.jpg",
            "/image/events/10_commandments/10_english_Launch/1V5A0331.jpg",
            "/image/events/10_commandments/10_english_Launch/1V5A0405.jpg",
            "/image/events/10_commandments/10_english_Launch/1V5A0420.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL133.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL134.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL135.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL137.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL138.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL139.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL140.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL143.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL144.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL145.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL146.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL147.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL148.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL151.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL152.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL153.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL154.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL155.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL156.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL159.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL162.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL165.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL167.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL168.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL171.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL173.jpg",
            "/image/events/10_commandments/10_english_Launch/AAB-BL179.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL251.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL252.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL253.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL254.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL255.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL256.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL257.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL258.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL259.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL260.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL261.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL262.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL264.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL265.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL267.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL268.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL269.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL270.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL274.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL275.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL278.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL279.jpg",
            "/image/events/10_commandments/10_english_post_launch/AAB-BL280.jpg"
        ]
    },
    '6': {
        title: "Les 10 Commandements Pour Un Développement Nationale Durable De La Cybersécurité",
        category: "Book Launch",
        date: "February 2025",
        description: "Lancement de l'édition française de '10 Commandements pour un Développement National Durable de la Cybersécurité — L'Afrique en Contexte : Leçons Pratiques et Bonnes Pratiques' à Marrakech, Maroc.",
        video: null,
        images: [
            "/image/events/10_commandments/10_commandments_french/1.jpg",
            "/image/events/10_commandments/10_commandments_french/2.jpg",
            "/image/events/10_commandments/10_commandments_french/3.jpeg"
        ]
    }
};

export default function GalleryDetailPage({ params }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ensure params is available (Next.js 15+ app router dynamic routing requires unwrapping the params promise)
    const resolvedParams = React.use(params);
    const eventId = resolvedParams?.id;
    const eventDetails = galleryData[eventId];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [lightboxOpen]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % eventDetails.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + eventDetails.images.length) % eventDetails.images.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, eventDetails]);

    if (!eventDetails) {
        return notFound();
    }

    const rotatingQuotes = [
        { text: t('gallery.quote1'), link: '/publications' },
        { text: t('gallery.quote2'), link: '/publications' },
        { text: t('gallery.quote3'), link: '/publications' }
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

            {/* Back Navigation Bar */}
            <div className="w-full bg-gray-50 border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link
                        href="/publications/gallery"
                        className="inline-flex items-center text-gray-500 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
                    >
                        <FiArrowLeft className="mr-2" />
                        {t('gallery.backToGallery')}
                    </Link>
                </div>
            </div>

            <main className="flex-grow w-full pt-16 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
                {/* Light overlay to mute background image exactly like Contact page */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

                <div className="max-w-5xl mx-auto relative z-10">

                    {/* Event Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-800 uppercase">
                            {t(`galleryTranslations.${eventId}.category`)} • {t(`galleryTranslations.${eventId}.date`)}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t(`galleryTranslations.${eventId}.title`)}
                        </h1>
                        <div className="w-16 h-[1px] bg-amber-800 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            {t(`galleryTranslations.${eventId}.description`)}
                        </p>
                    </div>

                    {/* Media Container (White Card) */}
                    <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative">
                        {/* Elegant corner accents matching the Contact page */}
                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-amber-800"></div>

                        {/* Video Section (If Available) */}
                        {eventDetails.video && (
                            <div className="mb-16">
                                <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center">
                                    <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                                    {t('gallery.eventFootage')}
                                    <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                                </h3>
                                <div className="relative w-full aspect-video border border-gray-200 shadow-sm bg-gray-900">
                                    <video
                                        controls
                                        className="w-full h-full object-contain"
                                        poster={eventDetails.images[0]}
                                    >
                                        <source src={eventDetails.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}

                        {/* Image Grid Section */}
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                            <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                            {t('gallery.photoGallery')}
                            <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>

                        <div className="space-y-8">
                            {/* Featured (First) Image taking full width */}
                            {eventDetails.images.slice(0, 1).map((src, index) => (
                                <div
                                    key={`feat-${index}`}
                                    className="relative w-full h-[400px] md:h-[600px] overflow-hidden group border border-gray-100/50 cursor-pointer"
                                    onClick={() => openLightbox(0)}
                                >
                                    <Image
                                        src={src}
                                        alt={`${t(`galleryTranslations.${eventId}.title`)} featured image`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 1000px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="bg-white/90 backdrop-blur-sm px-6 py-3 font-inter text-xs tracking-widest uppercase text-gray-900 border border-gray-100">
                                            {t('gallery.viewFullScreen')}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Remaining images in a grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {eventDetails.images.slice(1).map((src, index) => (
                                    <div
                                        key={`grid-${index}`}
                                        className="relative w-full h-[300px] md:h-[400px] overflow-hidden group border border-gray-100/50 cursor-pointer"
                                        onClick={() => openLightbox(index + 1)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`${t(`galleryTranslations.${eventId}.title`)} image ${index + 2}`}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-inter text-[10px] tracking-widest uppercase text-gray-900 border border-gray-100">
                                                {t('gallery.zoom')}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <PublicationsFooter />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black backdrop-blur-md transition-all duration-500"
                    >


                        {/* Navigation - Prev (with side transition area) */}
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-[110] flex items-center justify-start md:pl-12 group transition-all duration-500 bg-gradient-to-r from-black/30 to-transparent opacity-0 hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <FiChevronLeft size={64} className="text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
                        </button>

                        <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                            <FiChevronLeft size={48} className="text-white/20" />
                        </div>

                        {/* Navigation - Next (with side transition area) */}
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-[110] flex items-center justify-end md:pr-12 group transition-all duration-500 bg-gradient-to-l from-black/30 to-transparent opacity-0 hover:opacity-100"
                            aria-label="Next image"
                        >
                            <FiChevronRight size={64} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </button>

                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                            <FiChevronRight size={48} className="text-white/20" />
                        </div>

                        {/* Image Frame Container */}
                        <div className="relative max-w-full max-h-full flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="relative p-3 md:p-6 bg-white shadow-2xl border border-gray-200"
                                >
                                    {/* Inner Matte / Bezel effect */}
                                    <div className="relative bg-gray-50 border border-gray-100 p-1">
                                        <div className="relative w-auto h-auto max-w-[85vw] max-h-[70vh]">
                                            <img
                                                src={eventDetails.images[currentImageIndex]}
                                                alt={`${t(`galleryTranslations.${eventId}.title`)} slideshow image ${currentImageIndex + 1}`}
                                                className="block w-auto h-auto max-w-full max-h-[70vh] object-contain shadow-inner"
                                                loading="eager"
                                            />
                                        </div>
                                    </div>

                                    {/* Minimalist Frame Label */}
                                    <div className="absolute -bottom-10 left-0 right-0 text-center">
                                        <p className="font-playfair text-white text-sm tracking-wide opacity-80 italic">
                                            {t(`galleryTranslations.${eventId}.title`)} — {t('gallery.plate')} {currentImageIndex + 1}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-8 right-8 text-right pointer-events-none">
                            <p className="font-inter text-[10px] tracking-[0.4em] text-white/30 uppercase">
                                {t('gallery.collectionArchive')}: {currentImageIndex + 1} of {eventDetails.images.length}
                            </p>
                            <div className="flex justify-end space-x-1.5 mt-2 opacity-20">
                                {eventDetails.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-3 bg-amber-800 opacity-100' : 'bg-white'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Close Button - Moved here and bumped z-index to fix overlap */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[120] p-2"
                            aria-label="Close slideshow"
                        >
                            <FiX size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
