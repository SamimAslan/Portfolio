import React, { useState } from 'react';
import '../styles/video.css';
import maui from '../images/maui.jpg';
import svelte from '../images/svelte.png';
import Modal from '../components/Modal';

const VideosPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const openModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setModalOpen(true);
  };

  const renderVideoContent = (videoSrc: string) => {
    if (videoSrc.includes('youtu.be') || videoSrc.includes('youtube.com')) {
      const videoId = videoSrc.split('/').pop();
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      return (
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else {
      return <video controls src={videoSrc} width="100%" />;
    }
  };

  return (
    <div className="videos-page-container">
      <h1 className="videos-title">All Videos</h1>
      <div className="video-grid">
        <div className="video-item" onClick={() => openModal('https://youtu.be/YXigt9A5ZT4')}>
          <img src={maui} alt=".NET MAUI Video" className="video-thumbnail" />
          <div className="video-info">
            <h2>.NET MAUI</h2>
            <p>08.12.2023</p>
          </div>
        </div>
        <div className="video-item" onClick={() => openModal('https://youtu.be/N-2XpwT22uE')}>
          <img src={svelte} alt="Svelte Video" className="video-thumbnail" />
          <div className="video-info">
            <h2>Svelte</h2>
            <p>20.08.2023</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {renderVideoContent(selectedVideo)}
        </Modal>
      )}
    </div>
  );
};

export default VideosPage;
