'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AllBooksPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { t } = useLanguage();

  const books = [
    {
      id: 1,
      title: t('allBooks.books.book1.title'),
      subtitle: t('allBooks.books.book1.subtitle'),
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "35.00",
      ghanaPrice: "350",
      description: t('allBooks.books.book1.description'),
      category: 'cybersecurity',
      coverImage: '/image/books/the_republic.png',
      isbn10: "9988406827",
      isbn13: "978-9988406820",
      pages: 342,
      published: "2024"
    },
    {
      id: 2,
      title: t('allBooks.books.book2.title'),
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "55.00",
      ghanaPrice: "500",
      description: t('allBooks.books.book2.description'),
      category: 'cybersecurity',
      coverImage: '/image/book_mockup_english.png',
      isbn10: "9988392818",
      isbn13: "978-9988392819",
      pages: 428,
      published: "2024"
    },
    {
      id: 3,
      title: t('allBooks.books.book3.title'),
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "55.00",
      ghanaPrice: "500",
      description: t('allBooks.books.book3.description'),
      category: 'digital-transformation',
      coverImage: '/image/book_mockup_french.png',
      isbn10: "9988399316",
      isbn13: "978-99888399313",
      pages: 380,
      published: "2024"
    }
  ];

  const rotatingQuotes = [
    { text: t('allBooks.rotatingQuotes[0].text'), link: t('allBooks.rotatingQuotes[0].link') },
    { text: t('allBooks.rotatingQuotes[1].text'), link: t('allBooks.rotatingQuotes[1].link') },
    { text: t('allBooks.rotatingQuotes[2].text'), link: t('allBooks.rotatingQuotes[2].link') }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 56);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PublicationsHeader
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentQuoteIndex={currentQuoteIndex}
        setCurrentQuoteIndex={setCurrentQuoteIndex}
        rotatingQuotes={rotatingQuotes}
      />

      <main className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="font-inter text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">{t('allBooks.superheading')}</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              {t('allBooks.title')}
            </h1>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
            <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              {t('allBooks.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {books.map((book) => (
              <Link href={`/publications/${book.id}`} key={book.id} className="book-card group cursor-pointer flex flex-col h-full bg-transparent">
                <div className="relative mb-6 overflow-hidden">
                  <div className="absolute inset-4 bg-gray-200 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative w-full aspect-[3/4] bg-gray-50 book-card-image transition-transform duration-500 group-hover:shadow-md z-10">
                    {book.coverImage && book.coverImage.trim() !== '' && (
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                </div>
                <div className="text-center flex-grow flex flex-col pt-2">
                  <h3 className="font-playfair text-xl md:text-2xl font-normal text-gray-900 mb-2 group-hover:text-amber-800 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="font-inter text-xs tracking-widest text-gray-500 uppercase mb-4">
                    {book.author}
                  </p>
                  <p className="font-inter text-sm text-gray-500 font-light mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {book.description}
                  </p>
                  <div className="mt-auto space-y-4 border-t border-gray-100 pt-6">
                    <div className="text-sm font-inter text-gray-600">
                      {t('allBooks.intlPrice')}: ${book.internationalPrice} <span className="mx-2 text-gray-300">|</span> {t('allBooks.ghPrice')}: GHS {book.ghanaPrice}
                    </div>
                    <div className="font-inter text-xs tracking-widest uppercase text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                      {t('allBooks.viewDetails')}
                      <span className="block w-0 h-[1px] bg-amber-800 mx-auto mt-2 transition-all duration-300 group-hover:w-16"></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <PublicationsFooter />
    </div>
  );
}
