'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag, FiShare2, FiExternalLink, FiChevronLeft, FiStar, FiChevronUp } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';

// Publications-specific cart button
const PublicationsCartButton = () => {
  const { setIsCartOpen, getCartCount } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
      aria-label="Open cart"
    >
      <FiShoppingBag className="w-5 h-5" />
      {getCartCount() > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-medium  flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </button>
  );
};

export default function BookDetailPage({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState('paperback');
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { addToCart } = useCart();
  const { t } = useLanguage();

  // Unwrap params since it's a Promise in Next.js 15+
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  // Handle scroll to top button and header behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setShowBackToTop(scrolled > 300);
      setScrolled(scrolled > 56);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating quotes
  const rotatingQuotes = [
    { text: t('allBooks.rotatingQuotes[0].text'), link: t('allBooks.rotatingQuotes[0].link') },
    { text: t('allBooks.rotatingQuotes[1].text'), link: t('allBooks.rotatingQuotes[1].link') },
    { text: t('allBooks.rotatingQuotes[2].text'), link: t('allBooks.rotatingQuotes[2].link') }
  ];

  // Sample book data - in a real app, this would come from an API or database
  const books = {
    1: {
      id: 1,
      title: t('allBooks.books.book1.title'),
      subtitle: t('allBooks.books.book1.subtitle'),
      author: "Dr. Albert Antwi-Boasiako",
      internationalPrice: "35.00",
      ghanaPrice: "350",
      description: t('allBooks.books.book1.description'),
      longDescription: t('allBooks.books.book1.longDescription'),
      category: 'cybersecurity',
      coverImage: '/image/books/the_republic.png',
      authorBio: t('allBooks.books.book1.authorBio'),
      isbn10: "9988406827",
      isbn13: "978-9988406820",
      pages: 358,
      language: t('bookDetail.english'),
      published: "24 Nov 2025",
      format: t('bookDetail.paperback'),
      trimSize: "24 x 17 x 24 cm",
      weight: "700g",
      publisher: "Antwi-Boasiako Publications"
    },
    2: {
      id: 2,
      title: t('allBooks.books.book2.title'),
      subtitle: t('allBooks.books.book2.subtitle'),
      author: "Dr. Albert Antwi-Boasiako",
      internationalPrice: "55.00",
      ghanaPrice: "500",
      description: t('allBooks.books.book2.description'),
      longDescription: t('allBooks.books.book2.longDescription'),
      category: 'cybersecurity',
      coverImage: '/image/book_mockup_english.png',
      authorBio: t('allBooks.books.book2.authorBio'),
      isbn10: "9988392818",
      isbn13: "978-9988392819",
      pages: 428,
      language: t('bookDetail.english'),
      published: "2024",
      format: t('bookDetail.paperback'),
      trimSize: "24.5 x 18 x 24.5 cm",
      weight: "628g",
      publisher: "Antwi-Boasiako Publications"
    },
    3: {
      id: 3,
      title: t('allBooks.books.book3.title'),
      subtitle: t('allBooks.books.book3.subtitle'),
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "55.00",
      ghanaPrice: "500",
      description: t('allBooks.books.book3.description'),
      longDescription: t('allBooks.books.book3.longDescription'),
      category: 'digital-transformation',
      coverImage: '/image/book_mockup_french.png',
      authorBio: t('allBooks.books.book3.authorBio'),
      isbn10: "9988399316",
      isbn13: "978-99888399313",
      pages: 386,
      language: t('bookDetail.french'),
      published: "2024",
      format: t('bookDetail.paperback'),
      trimSize: "24.5 x 18 x 24.5 cm",
      weight: "628g",
      publisher: "Antwi-Boasiako Publications"
    }
  };

  const book = books[slug];

  // Handle scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!book) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">{t('bookDetail.notFoundTitle')}</h1>
          <p className="font-inter text-gray-600 mb-8">{t('bookDetail.notFoundMessage')}</p>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiChevronLeft className="w-4 h-4" />
            {t('bookDetail.backToPublications')}
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      image: book.coverImage,
      internationalPrice: parseFloat(book.internationalPrice),
      africaPrice: parseFloat(book.internationalPrice),
      ghanaPrice: parseFloat(book.ghanaPrice),
      quantity: quantity,
      format: selectedFormat
    });
  };

  return (
    <div className="min-h-screen bg-white" style={{ borderRadius: '0' }}>
      <PublicationsHeader
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentQuoteIndex={currentQuoteIndex}
        setCurrentQuoteIndex={setCurrentQuoteIndex}
        rotatingQuotes={rotatingQuotes}
      />

      {/* Main Content - New Release Page Style */}
      <main className="flex flex-col lg:flex-row" >
        {/* Left Side - Static Book Image */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-16 lg:self-start flex items-start justify-center lg:justify-end pt-2 lg:pt-2 px-8 lg:pr-8" style={{ zIndex: 10 }}>
          <div className="w-full max-w-md lg:max-w-md">
            <div className="relative w-full aspect-[3/4] mb-6 group">
              <div className="absolute inset-4 bg-gray-200 blur-xl opacity-70 transition-opacity duration-500"></div>
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover relative z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-full lg:w-1/2 lg:self-start">
          <div className="px-8 py-8 lg:py-16">
            <div className="max-w-xl">
              <div className="mb-6">
                <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-700 uppercase">
                  {book.author}
                </span>
              </div>
              <h1 className="font-playfair text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4 tracking-tight">
                {book.title}
              </h1>
              <div className="w-16 h-[1px] bg-amber-800 mb-6"></div>
              <div className="font-merriweather text-lg text-gray-600 italic mb-8">
                {book.subtitle}
              </div>
              <div className="flex flex-col space-y-2 mb-10 border-b border-gray-200 pb-8">
                <div className="font-inter text-xl font-medium text-gray-900">
                  <span className="text-sm font-normal text-gray-500 mr-2 uppercase tracking-wider">Intl</span>
                  ${book.internationalPrice}
                </div>
                <div className="font-inter text-xl font-medium text-gray-900">
                  <span className="text-sm font-normal text-gray-500 mr-2 uppercase tracking-wider">GH</span>
                  GHS {book.ghanaPrice}
                  {/* <span className="ml-3 font-inter text-xs font-normal text-gray-400 tracking-wide uppercase">VAT included</span> */}
                </div>
              </div>

              <div className="mb-8">
                <div className="font-inter text-xs tracking-[0.15em] font-medium text-gray-400 uppercase mb-4">{t('bookDetail.selectFormat')}</div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedFormat('paperback')}
                    className={`px-6 py-3 border font-inter text-sm tracking-wider uppercase transition-all duration-300 ${selectedFormat === 'paperback'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-transparent text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900'
                      }`}
                  >
                    {t('bookDetail.paperback')}
                  </button>
                  <button
                    onClick={() => setSelectedFormat('ebook')}
                    className={`px-6 py-3 border font-inter text-sm tracking-wider uppercase transition-all duration-300 ${selectedFormat === 'ebook'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-transparent text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900'
                      }`}
                  >
                    {t('bookDetail.ebook')}
                  </button>
                </div>
              </div>

              <div className="mb-10">
                <div className="font-inter text-xs tracking-[0.15em] font-medium text-gray-400 uppercase mb-4">{t('bookDetail.quantity')}</div>
                <div className="flex items-center border border-gray-300 w-32 transition-colors duration-300 hover:border-gray-500">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center font-inter text-base text-gray-900 py-3">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full px-8 py-5 bg-gray-900 text-white border border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-300 font-inter text-sm tracking-[0.2em] shadow-lg shadow-gray-900/10 uppercase"
              >
                {t('bookDetail.addToCart')}
              </button>
            </div>

            {/* Synopsis */}
            {/* <section className="mb-12">
              <h2 className="font-playfair text-2xl font-normal text-gray-900 mb-6">Synopsis</h2>
              <div className="prose prose-lg max-w-none">
                <p className="font-inter text-gray-600 font-light leading-relaxed">
                  {book.description}
                </p>
              </div>
            </section> */}

            {/* About This Book */}
            <section className="mb-6 mt-12">
              <h2 className="font-playfair text-2xl font-normal text-gray-900 mb-3">{t('bookDetail.synopsis')}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="font-inter text-gray-600 font-light leading-relaxed">
                  {book.longDescription}
                </p>
              </div>
            </section>

            {/* Praise for this Book */}
            <section className="mb-16">
              <h2 className="font-playfair text-2xl font-normal text-gray-900 mb-8">{t('bookDetail.recommendations')}</h2>
              <div className="space-y-8">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="border-l-[1px] border-amber-800 pl-6">
                    <p className="font-merriweather text-gray-600 italic leading-relaxed">
                      {t(`recommendations[${index}].quote`)}
                    </p>
                    <p className="font-inter text-xs tracking-widest uppercase text-gray-400 mt-4">— {t(`recommendations[${index}].source`)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Details */}
            <section className="mb-16">
              <h2 className="font-playfair text-2xl font-normal text-gray-900 mb-8">{t('bookDetail.productDetails')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                <div className="space-y-0">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.isbn10')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.isbn10}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.isbn13')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.isbn13}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.pages')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.pages}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.language')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.language}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.published')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.published}</span>
                  </div>
                </div>
                <div className="space-y-0">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.formatLabel')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.format}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.trimSize')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.trimSize}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.weight')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.weight}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-inter text-sm font-light text-gray-500">{t('bookDetail.publisher')}:</span>
                    <span className="font-inter text-sm text-gray-900">{book.publisher}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* You May Also Like Section */}
      <YouMayAlsoLike currentBookId={book.id} books={Object.values(books)} />

      {/* Footer */}
      <PublicationsFooter />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 shadow-xl hover:bg-amber-800 transition-colors duration-300 z-40 group"
          aria-label="Back to top"
        >
          <FiChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
}
