import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomePage';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-950">
      <div className="relative z-10">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
