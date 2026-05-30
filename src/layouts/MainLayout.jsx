import { Outlet } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import WhatsAppModal from '../components/WhatsAppModal/WhatsAppModal';
import ScrollToTop from '../components/ScrollToTop';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <WhatsAppModal />
    </div>
  );
}
