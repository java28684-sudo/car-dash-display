import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import SplashScreen from '@/components/SplashScreen';

const MainPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <Dashboard />
    </div>
  );
};

export default MainPage;