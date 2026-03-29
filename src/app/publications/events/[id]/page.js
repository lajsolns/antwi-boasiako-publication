'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiDownload, FiPlay, FiFileText, FiMic, FiShare2, FiChevronLeft, FiEdit, FiArrowLeft } from 'react-icons/fi';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import ImageGalleryModal from '@/components/ImageGalleryModal';
import { useLanguage } from '@/context/LanguageContext';

function VideoPlayer({ video }) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video bg-gray-900 overflow-hidden border border-gray-200">
      {playing ? (
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {video.thumbnail ? (
            <Image
              src={video.thumbnail}
              alt={video.titleKey ? t(video.titleKey) : 'Video thumbnail'}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FiPlay className="w-12 h-12 text-gray-600" />
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
            <button
              onClick={() => setPlaying(true)}
              className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-amber-800 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FiPlay className="w-6 h-6 ml-1" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function EventDetailPage({ params }) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const event1 = {
    id: 1,
    titleKey: 'eventsData.event1.title',
    subtitleKey: 'eventsData.event1.subtitle',
    descriptionKey: 'eventsData.event1.description',
    longDescriptionKey: 'eventsData.event1.longDescription',
    date: "November 25, 2025",
    time: "05:00 PM",
    endDate: "2025-11-25",
    endTime: "08:00 PM",
    locationKey: 'eventsData.event1.location',
    addressKey: 'eventsData.event1.address',
    type: "past",
    category: "launch",
    image: "/image/events/book_launch_original.jpeg",
    attendees: 200,
    speakerKey: 'eventsData.event1.speaker',
    registrationLink: "#register",
    agenda: [
      { time: "05:00 PM", titleKey: 'eventsData.event1.agenda[0].title', duration: "30 min" },
      { time: "05:30 PM", titleKey: 'eventsData.event1.agenda[1].title', duration: "10 min" },
      { time: "05:40 PM", titleKey: 'eventsData.event1.agenda[2].title', duration: "15 min" },
      { time: "05:55 PM", titleKey: 'eventsData.event1.agenda[3].title', duration: "25 min" },
      { time: "06:20 PM", titleKey: 'eventsData.event1.agenda[4].title', duration: "30 min" },
      { time: "06:50 PM", titleKey: 'eventsData.event1.agenda[5].title', duration: "20 min" },
      { time: "07:10 PM", titleKey: 'eventsData.event1.agenda[6].title', duration: "40 min" },
      { time: "07:50 PM", titleKey: 'eventsData.event1.agenda[7].title', duration: "40 min" }
    ],
    speakers: [
      {
        nameKey: 'eventsData.event1.speakers[0].name',
        titleKey: 'eventsData.event1.speakers[0].title',
        bioKey: 'eventsData.event1.speakers[0].bio',
        image: "/image/CEO.png"
      },
      {
        nameKey: 'eventsData.event1.speakers[1].name',
        titleKey: 'eventsData.event1.speakers[1].title',
        bioKey: 'eventsData.event1.speakers[1].bio',
        image: "/image/aboutpics.png"
      },
      {
        nameKey: 'eventsData.event1.speakers[2].name',
        titleKey: 'eventsData.event1.speakers[2].title',
        bioKey: 'eventsData.event1.speakers[2].bio',
        image: "/image/IMG_9663 2.png"
      }
    ],
    media: {
      videos: [
        {
          id: 1,
          titleKey: 'eventsData.event1.media.videos[0].title',
          descriptionKey: 'eventsData.event1.media.videos[0].description',
          thumbnail: "/image/events/book_highlights.png",
          duration: "Video",
          url: "https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1765181489/rux3qgjvoxg6gb8kfikl.mp4",
          recordedAt: "2025-11-25T17:00:00"
        }
      ],
      documents: [],
      audio: []
    },
    gallery: [
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
      "/image/events/the_republic/general_photos_republic/MADAM NATASHA (DPC).jpg",
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
      "/image/events/the_republic/signing_republic/Residenza358.jpg",
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
  };

  const event2 = {
    id: 2,
    titleKey: 'eventsData.event2.title',
    subtitleKey: 'eventsData.event2.subtitle',
    descriptionKey: 'eventsData.event2.description',
    longDescriptionKey: 'eventsData.event2.longDescription',
    date: "29 - 30 September, 2025",
    time: "06:00 PM",
    endDate: "2025-09-30",
    endTime: "08:00 PM",
    locationKey: 'eventsData.event2.location',
    addressKey: 'eventsData.event2.address',
    type: "past",
    category: "author",
    image: "/image/events/dasa25.jpeg",
    attendees: 50,
    speakerKey: 'eventsData.event2.speaker',
    registrationLink: "#register",
    agenda: [],
    speakers: [
      {
        nameKey: 'eventsData.event2.speaker',
        titleKey: 'eventsData.event2.speakerTitle',
        bioKey: 'eventsData.event2.speakerBio',
        image: "/image/CEO.png"
      }
    ],
    media: { videos: [], documents: [], audio: [] },
    gallery: [
      "/image/events/Dasa/1I0A9667.jpg",
      "/image/events/Dasa/1I0A9679.jpg",
      "/image/events/Dasa/1I0A9683.jpg",
      "/image/events/Dasa/1I0A9707.jpg",
      "/image/events/Dasa/1I0A9710.jpg",
      "/image/events/Dasa/1I0A9715.jpg",
      "/image/events/Dasa/1I0A9718.jpg",
      "/image/events/Dasa/DASA 2.jpeg",
      "/image/events/Dasa/DASA 3.jpeg",
      "/image/events/Dasa/DASA 5.jpeg",
      "/image/events/Dasa/DASA 7.jpeg"
    ]
  };

  const event3 = {
    id: 3,
    titleKey: 'eventsData.event3.title',
    subtitleKey: 'eventsData.event3.subtitle',
    descriptionKey: 'eventsData.event3.description',
    longDescriptionKey: 'eventsData.event3.longDescription',
    date: "2024-11-28",
    time: "09:00 AM",
    endDate: "2024-11-28",
    endTime: "12:00 PM",
    locationKey: 'eventsData.event3.location',
    addressKey: 'eventsData.event3.address',
    type: "past",
    category: "launch",
    image: "/image/events/book_launch_english.jpeg",
    attendees: 75,
    speakerKey: 'eventsData.event3.speaker',
    registrationLink: null,
    agenda: [],
    speakers: [
      {
        nameKey: 'eventsData.event3.speaker',
        titleKey: 'eventsData.event3.speakerTitle',
        bioKey: 'eventsData.event3.speakerBio',
        image: "/image/CEO.png"
      }
    ],
    media: {
      videos: [
        {
          id: 1,
          titleKey: 'eventsData.event3.media.videos[0].title',
          descriptionKey: 'eventsData.event3.media.videos[0].description',
          thumbnail: "/image/documentary_book.png",
          duration: "Documentary",
          url: "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
          recordedAt: "2024-11-28T09:00:00"
        }
      ],
      documents: [],
      audio: []
    },
    gallery: [
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
      "/image/events/10_commandments/10_english_post_launch/AAB-BL280.jpg",
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
  };

  const event4 = {
    id: 4,
    titleKey: 'eventsData.event4.title',
    subtitleKey: 'eventsData.event4.subtitle',
    descriptionKey: 'eventsData.event4.description',
    longDescriptionKey: 'eventsData.event4.longDescription',
    date: "2024-02-04",
    time: "10:30 AM",
    endDate: "2024-02-04",
    endTime: "02:00 PM",
    locationKey: 'eventsData.event4.location',
    addressKey: 'eventsData.event4.address',
    type: "past",
    category: "author",
    image: "/image/book_launch_french_flyer.jpeg",
    attendees: 75,
    speakerKey: 'eventsData.event4.speaker',
    registrationLink: null,
    agenda: [],
    speakers: [
      {
        nameKey: 'eventsData.event4.speaker',
        titleKey: 'eventsData.event4.speakerTitle',
        bioKey: 'eventsData.event4.speakerBio',
        image: "/image/CEO.png"
      }
    ],
    media: {
      videos: [
        {
          id: 1,
          titleKey: 'eventsData.event4.media.videos[0].title',
          descriptionKey: 'eventsData.event4.media.videos[0].description',
          thumbnail: "/image/documentary_book.png",
          duration: "Documentary",
          url: "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
          recordedAt: "2024-02-04T10:30:00"
        }
      ],
      documents: [],
      audio: []
    },
    gallery: [
      "/image/events/10_commandments/10_commandments_french/1.jpg",
      "/image/events/10_commandments/10_commandments_french/2.jpg",
      "/image/events/10_commandments/10_commandments_french/3.jpeg"
    ]
  };

  const eventsData = [event1, event2, event3, event4];
  const eventId = resolvedParams?.id ? parseInt(resolvedParams.id, 10) : 1;
  const event = eventsData.find(e => e.id === eventId) || event1;

  // Rotating quotes
  const rotatingQuotes = [
    {
      text: t('quotes.transforming'),
      link: '#new-releases'
    },
    {
      text: t('quotes.building'),
      link: '#categories'
    },
    {
      text: t('quotes.pioneering'),
      link: '#events'
    }
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrolled(scrolled > 56);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = t('locale') === 'fr' ? 'fr-FR' : 'en-US';
    return date.toLocaleDateString(locale, options);
  };

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

      {/* Main Content */}
      <main className="flex-grow w-full pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
        {/* Light overlay to mute background image */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Navigation Bar - Styled like gallery */}
          <div className="mb-12">
            <Link
              href="/publications/events"
              className="inline-flex items-center text-gray-500 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
            >
              <FiArrowLeft className="mr-2" />
              {t('eventDetail.backToEvents')}
            </Link>
          </div>

          {/* Event Header Section - Styled like gallery */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-800 uppercase">
              {event.category} • {formatDate(event.date)}
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
              {t(event.titleKey)}
            </h1>
            <div className="w-16 h-[1px] bg-amber-800 mx-auto mt-6 mb-8"></div>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t(event.subtitleKey)}
            </p>
          </div>

          {/* Content Container (White Card) */}
          <div className="bg-white p-5 sm:p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative mb-12 overflow-hidden">
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-amber-800"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-amber-800"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center">
                    <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                    {t('eventDetail.eventDescription')}
                    <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                  </h3>
                  <p className="font-inter text-gray-700 leading-relaxed text-lg font-light">
                    {t(event.longDescriptionKey)}
                  </p>
                </div>
              </div>

              {/* Event Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50/50 border border-gray-100 rounded-sm p-5 sm:p-8">
                  <div className="relative h-48 bg-gray-200 rounded-sm mb-8 overflow-hidden border border-gray-100">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={t(event.titleKey)}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiCalendar className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FiCalendar className="w-5 h-5 text-amber-800 mr-4 mt-0.5" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">{t('eventDetail.date')}</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {formatDate(event.date)}
                        </p>
                        <p className="font-inter text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                          {event.time} — {event.endTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiMapPin className="w-5 h-5 text-amber-800 mr-4 mt-0.5" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">{t('eventDetail.venue')}</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {t(event.locationKey)}
                        </p>
                        <p className="font-inter text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                          {t(event.addressKey)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FiUsers className="w-5 h-5 text-amber-800 mr-4" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">{t('eventDetail.attendance')}</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {event.attendees} {t('eventDetail.professionals')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {event.type === 'upcoming' && (
                    <button className="w-full mt-10 px-6 py-4 bg-gray-900 text-white hover:bg-amber-900 transition-colors duration-300 font-inter text-xs tracking-[0.2em] uppercase">
                      {t('eventDetail.registerAttendance')}
                    </button>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all duration-300 font-inter text-[10px] tracking-widest uppercase">
                      <FiShare2 className="w-3 h-3 inline mr-2" />
                      {t('eventDetail.share')}
                    </button>
                    <button className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all duration-300 font-inter text-[10px] tracking-widest uppercase">
                      <FiEdit className="w-3 h-3 inline mr-2" />
                      {t('eventDetail.export')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs - Integrated into card */}
            <div className="mt-16">
              <div className="border-b border-gray-100 mb-10">
                <nav className="flex space-x-8 sm:space-x-12 overflow-x-auto no-scrollbar whitespace-nowrap pb-1">
                  {['overview', 'agenda', 'speakers', 'media', 'gallery'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-1 border-b-2 font-inter text-xs tracking-[0.2em] uppercase transition-all duration-300 ${activeTab === tab
                        ? 'border-amber-800 text-amber-800'
                        : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200'
                        } flex-shrink-0`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="prose prose-lg max-w-none">
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      {t('eventDetail.detailedHighlights')}
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                      <div className="space-y-4">
                        <p className="font-inter text-gray-700 leading-relaxed font-light">
                          {t(event.longDescriptionKey)}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8 border border-gray-100">
                        <h4 className="font-playfair text-xl mb-6 italic text-gray-800">{t('eventDetail.keyFocusAreas')}</h4>
                        <ul className="space-y-4">
                          {[
                            t('eventDetail.ghanaCybersecurityEvolution'),
                            t('eventDetail.digitalTransformationAfrica'),
                            t('eventDetail.bestPracticesNationalSecurity'),
                            t('eventDetail.collaborativeApproachesCyberDefense'),
                            t('eventDetail.futureTrendsTechnologies')
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center font-inter text-sm text-gray-600 font-light">
                              <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-4 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'agenda' && (
                  <div>
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      {t('eventDetail.scheduleOfProceedings')}
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="space-y-1">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex items-center py-6 border-b border-gray-50 last:border-0 group hover:bg-gray-50/50 transition-colors px-4">
                          <div className="flex-shrink-0 w-32">
                            <p className="font-inter text-xs tracking-widest text-amber-800 font-medium">
                              {item.time}
                            </p>
                            <p className="font-inter text-[10px] text-gray-400 uppercase mt-1">
                              {item.duration}
                            </p>
                          </div>
                          <div className="ml-8 flex-grow">
                            <p className="font-inter text-gray-800 text-sm font-light tracking-wide group-hover:translate-x-1 transition-transform">
                              {t(item.titleKey)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'speakers' && (
                  <div>
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      {t('eventDetail.distinguishedSpeakers')}
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start gap-8 group">
                          <div className="flex-shrink-0 relative w-32 h-40 bg-gray-100 border border-gray-100 overflow-hidden shadow-sm">
                            {speaker.image ? (
                              <Image
                                src={speaker.image}
                                alt={t(speaker.nameKey)}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FiUsers className="w-10 h-10 text-gray-300" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-playfair text-xl text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">
                              {t(speaker.nameKey)}
                            </h4>
                            <p className="font-inter text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4">
                              {t(speaker.titleKey)}
                            </p>
                            <p className="font-inter text-sm text-gray-600 font-light leading-relaxed italic">
                              "{t(speaker.bioKey)}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'media' && (
                  <div className="space-y-16">
                    {/* Videos Section */}
                    <div>
                      <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                        <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                        {t('eventDetail.eventFootage')}
                        <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {event.media.videos.map((video) => (
                          <div key={video.id} className="group">
                            <VideoPlayer video={video} />
                            <div className="mt-6">
                              <h4 className="font-playfair text-lg text-gray-900 mb-2">
                                {t(video.titleKey)}
                              </h4>
                              <p className="font-inter text-sm text-gray-500 font-light line-clamp-2">
                                {t(video.descriptionKey)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      {/* Documents */}
                      <div>
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                          <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                          {t('eventDetail.documentation')}
                          <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>
                        <div className="space-y-4">
                          {event.media.documents.map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between p-6 bg-gray-50/50 border border-gray-100 hover:border-amber-800 transition-colors group">
                              <div className="flex items-center">
                                <FiFileText className="w-6 h-6 text-gray-400 mr-4 group-hover:text-amber-800 transition-colors" />
                                <div>
                                  <h4 className="font-inter text-sm font-medium text-gray-900 tracking-wide">
                                    {doc.title}
                                  </h4>
                                  <p className="font-inter text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                    {doc.type} • {doc.size}
                                  </p>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-amber-800 transition-colors">
                                <FiDownload className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Audio */}
                      <div>
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                          <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                          {t('eventDetail.audioArchive')}
                          <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>
                        <div className="space-y-4">
                          {event.media.audio.map((audio) => (
                            <div key={audio.id} className="flex items-center justify-between p-6 bg-gray-50/50 border border-gray-100 hover:border-amber-800 transition-colors group">
                              <div className="flex items-center">
                                <FiMic className="w-6 h-6 text-gray-400 mr-4 group-hover:text-amber-800 transition-colors" />
                                <div>
                                  <h4 className="font-inter text-sm font-medium text-gray-900 tracking-wide">
                                    {audio.title}
                                  </h4>
                                  <p className="font-inter text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                    {audio.duration} • {audio.size}
                                  </p>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-amber-800 transition-colors">
                                <FiPlay className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      {t('eventDetail.photoCollection')}
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      {event.gallery.slice(0, 8).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer group shadow-sm border border-gray-100"
                          onClick={() => {
                            setSelectedImageIndex(index);
                            setIsGalleryOpen(true);
                          }}
                        >
                          <Image
                            src={image}
                            alt={`Event image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-4 py-2 font-inter text-[10px] tracking-widest uppercase text-gray-900 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center py-12 border-t border-gray-50 bg-gray-50/30">
                      <button
                        onClick={() => {
                          setSelectedImageIndex(0);
                          setIsGalleryOpen(true);
                        }}
                        className="inline-flex items-center px-10 py-4 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-300 font-inter text-xs tracking-[0.3em] uppercase"
                      >
                        {t('eventDetail.exploreArchive', { count: event.gallery.length })}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicationsFooter />

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={event.gallery}
        initialIndex={selectedImageIndex}
      />
    </div>
  );
}
