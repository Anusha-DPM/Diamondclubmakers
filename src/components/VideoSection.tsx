"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [thumbnailErrors, setThumbnailErrors] = useState<{[key: string]: boolean}>({});

  const videos = [
    {
      id: "GO2EjyeMh6M",
      title: "G.O.A.T. awarded at GRC 2023",
      heading: "G.O.A.T. awarded at GRC 2023"
    },
    {
      id: "QPQbdQBs9Vc",
      title: "Making More Profits by Becoming An Invisalign Diamond Provider",
      heading: "Making More Profits by Becoming An Invisalign Diamond Provider"
    },
    {
      id: "xHro1iuW1yc",
      title: "Rewards and Recognition",
      heading: "Rewards and Recognition"
    },
    {
      id: "BNhqL-VjWoE",
      title: "DCM Group",
      heading: "DCM Group"
    }
  ];

  useEffect(() => {
    // Initialize thumbnail error states
    const initialErrors: {[key: string]: boolean} = {};
    videos.forEach(video => {
      initialErrors[video.id] = false;
    });
    setThumbnailErrors(initialErrors);

    // Test thumbnail URLs
    testThumbnailUrls();
  }, []);

  const testThumbnailUrls = () => {
    videos.forEach(video => {
      const testUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      console.log(`🔍 Testing thumbnail URL: ${testUrl}`);
      
      // Create a test image to check if URL is accessible
      const testImg = new Image();
      testImg.onload = () => {
        console.log(`✅ Thumbnail accessible: ${video.id}`);
      };
      testImg.onerror = () => {
        console.log(`❌ Thumbnail not accessible: ${video.id}`);
        setThumbnailErrors(prev => ({ ...prev, [video.id]: true }));
      };
      testImg.src = testUrl;
    });
  };

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const getThumbnailUrl = (videoId: string, attempt: number = 0): string => {
    const formats = [
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/0.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
    ];
    
    return formats[attempt] || formats[formats.length - 1];
  };

  const handleImageError = (videoId: string, attempt: number = 0) => {
    console.log(`❌ Thumbnail attempt ${attempt + 1} failed for video: ${videoId}`);
    
    if (attempt < 5) {
      // Try next thumbnail format
      const nextUrl = getThumbnailUrl(videoId, attempt + 1);
      const imgElement = document.querySelector(`[data-video-id="${videoId}"]`) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = nextUrl;
      }
    } else {
      // All attempts failed, mark as error
      setThumbnailErrors(prev => ({ ...prev, [videoId]: true }));
    }
  };

  const renderThumbnail = (video: { id: string; title: string; heading: string }) => {
    if (thumbnailErrors[video.id]) {
      // Show fallback placeholder
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-white text-sm">Video Thumbnail</p>
          </div>
        </div>
      );
    }

    return (
      <Image
        data-video-id={video.id}
        src={getThumbnailUrl(video.id)}
        alt={video.title}
        width={640}
        height={360}
        className="w-full h-full object-cover"
        onError={() => handleImageError(video.id, 0)}
        onLoad={() => console.log(`✅ Thumbnail loaded for: ${video.id}`)}
        crossOrigin="anonymous"
        loading="eager"
      />
    );
  };

  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {videos.map((video) => (
              <div key={video.id} className="space-y-4">
                <h2 className="font-sansation-regular text-[#004681] text-center" style={{ fontSize: '27px' }}>
                  {video.heading}
                </h2>
                <div 
                  className="relative bg-black rounded-lg overflow-hidden aspect-video cursor-pointer group"
                  onClick={() => openVideo(video.id)}
                >
                  {/* YouTube Thumbnail with Multiple Fallbacks */}
                  {renderThumbnail(video)}
                  
                  {/* Hover Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to watch
                    </p>
                  </div>
                  
                  {/* Debug Info */}
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs p-1 rounded">
                    {video.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200 z-10"
            >
              ✕ Close
            </button>
            
            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
