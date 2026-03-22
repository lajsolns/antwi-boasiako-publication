'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AuthorPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { t } = useLanguage();

  const author = {
    name: "Dr. Albert Antwi-Boasiako",
    title: "EXECUTIVE CHAIRMAN, E-CRIME BUREAU | CYBERSECURITY EXPERT & AUTHOR | FORMER DIRECTOR-GENERAL, GHANA’S CYBER SECURITY AUTHORITY (CSA)",
    bio: [
      "For about 15 years, Dr. Albert Antwi-Boasiako has led cybersecurity development across Africa in both private and public sectors. In 2011, he founded the e-Crime Bureau in Ghana, the first cybersecurity and digital forensics firm in West Africa with a dedicated lab, aiding law enforcement in investigating and prosecuting cybercrimes. His work through the Bureau led to engagements across Africa, including Kenya, Uganda, South Africa, Morocco, Senegal, Nigeria, and Ghana. His private sector efforts also involved international organisations such as UNODC, UNCTAD, the EU, the Commonwealth Secretariat, GCIG/Chatham House, and GIABA. He served as an Expert on the Council of Europe’s GLACY+ Project before becoming Ghana's National Coordinator for the same programme.",
      "From July 2017 to September 2021, Dr. Antwi-Boasiako served as Ghana's National Cybersecurity Advisor and head of the National Cyber Security Centre (established 2018), leading cybersecurity development from 32.6% in 2017 to 99.27% in 2024, ranked as a tier-1 role model by the ITU’s Global Cybersecurity Index. In October 2021, Dr. Antwi-Boasiako became the first Director-General of the Cyber Security Authority (CSA), serving until March 2025. He led the passage of Ghana’s Cybersecurity Act, 2020 (Act 1038), and the adoption of a new National Cybersecurity Policy & Strategy in 2024.",
      "Dr. Antwi-Boasiako led Ghana’s technical efforts for the ratification of the Budapest Convention and the Malabo Convention on Cyber Security. He also directed negotiations for the UN Convention against Cybercrime, adopted in August 2024. He has spearheaded many cybersecurity initiatives, including Critical Information Infrastructure (CII) protection, licensing of cybersecurity providers, and awareness campaigns for children, the public, businesses, and government. These efforts have established Ghana as a regional leader in cybersecurity, recognised by independent studies and development partners.",
      "Dr. Antwi-Boasiako completed his PhD studies at the University of Pretoria in South Africa, introducing the Harmonised Model for Digital Evidence Admissibility Assessment (HM-DEAA) as a ground-breaking contribution to digital forensics standardisation. Dr. Antwi-Boasiako graduated from the University of Trento in Italy for his undergraduate programme and the University of Portsmouth in the United Kingdom for his postgraduate programme, receiving cum laude and distinction respectively.",
      "Dr. Antwi-Boasiako has spoken at over 100 international and domestic conferences, workshops, and forums. He has conducted training and capacity-building programmes across Africa, Asia, Europe, Latin America, and the Pacific. He has collaborated with organisations like the World Bank, World Economic Forum, ITU, GFCE, UN, UNICEF, SGI, and the Freedom Online Coalition on cybersecurity issues. His past roles include serving on the IAC of GIFCT, as a Bureau Member of the Cybercrime Convention Committee (T-CY) of the Council of Europe, and as a member of the WEF’s Global Coalition for Digital Safety.",
      "Dr Antwi-Boasiako is an accomplished institutional builder – having founded the e-Crime Bureau (private sector), established Ghana’s Cyber Security Authority (public sector) and serving as the Founding President of African Network of Cybersecurity Authorities (ANCA). He currently serves as the Executive Chairman of the e-Crime Bureau, driving the firm’s Africa market activities. He lectures at a number of institutions including the KAIPTC, Accra Metropolitan University, KNUST, GIMPA and UNICRI. He has publications on IT, cybersecurity, cybercrimes, data protection, and digital forensics.",
      "Dr. Albert is the author of \"The 10 Commandments for Sustainable National Cybersecurity Development – Africa in Context: Practical Lessons and Good Practices”, which explores key principles for sustainable national cybersecurity development in Africa, drawing on Ghana’s cybersecurity initiatives from 2016 to 2024, alongside comparative practices from other jurisdictions and \"The Republic; a Professional Journey. Ghana's Cybersecurity and The Making of a Role Model Country\", which chronicles nearly 15 years of Ghana’s cybersecurity evolution and institutional reforms. It combines personal reflections with policy insights and strategic analysis.",
      "Dr. Antwi-Boasiako has also founded the Education for Development (E4D) Foundation, a non-profit and non-governmental organisation established to support education of the underprivileged in Ghana. The establishment of the E4D Foundation is premised on what Plato; an ancient Greek philosopher rightly indicated in his Republic ‘‘the direction in which education starts a man will determine his future in life”. The Foundation has been established purposely to support this journey of the underprivileged to change their life narratives."
    ],
    image: "/image/CEO.png",
    backgroundImage: "/image/homepage_bg.jpg",
    email: "director@csa.gov.gh",
    social: { twitter: "#", linkedin: "#", website: "#" }
  };

  const rotatingQuotes = [
    { text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"', link: '#publications' },
    { text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"', link: '#events' },
    { text: '"Pioneering digital security solutions for a safer, more connected world"', link: '#contact' }
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

      <section className="relative min-h-[90vh] bg-[#111111] py-32 flex items-center">
        <div className="absolute inset-0">
          {author.backgroundImage && (
            <Image
              src={author.backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-20 filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Author Info */}
              <div className="flex-1 order-2 lg:order-1 w-full">
                <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-700 uppercase mb-4">
                  {author.title}
                </span>
                <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-tight">
                  {author.name}
                </h1>
                <div className="w-16 h-[1px] bg-amber-800 mb-8"></div>
                
                <div className="font-inter text-base text-gray-300 leading-relaxed font-light space-y-6">
                  {author.bio.map((paragraph, index) => (
                    <p key={index} className="text-justify">{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 items-center mt-12">
                  <a
                    href="/"
                    className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border border-white font-inter text-sm tracking-widest uppercase hover:bg-transparent hover:text-white transition-all duration-300"
                  >
                    {t('author.home')}
                  </a>
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-white border border-white/40 font-inter text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                  >
                    {t('author.contact')}
                  </a>
                  <div className="flex gap-4 ml-2">
                    {author.social.twitter && (
                      <a href={author.social.twitter} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300" aria-label="Twitter">
                        <FiTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a href={author.social.linkedin} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300" aria-label="LinkedIn">
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Author Image */}
              <div className="flex-shrink-0 w-full lg:w-96 order-1 lg:order-2 sticky lg:top-32">
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] group">
                  <div className="absolute -inset-4 border border-white/10 z-0 hidden lg:block transition-all duration-700 group-hover:-inset-2 group-hover:border-amber-800/50"></div>
                  {author.image && (
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicationsFooter />
    </div>
  );
}
