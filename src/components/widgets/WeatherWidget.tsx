import { useEffect, useState } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  condition: string;
  location: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 22,
    humidity: 65,
    condition: 'partly-cloudy',
    location: 'San Francisco'
  });

  useEffect(() => {
    // Simulate weather data updates
    const interval = setInterval(() => {
      setWeather(prev => ({
        ...prev,
        temperature: 20 + Math.floor(Math.random() * 10),
        humidity: 60 + Math.floor(Math.random() * 20)
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-8 h-8 text-automotive-orange" />;
      case 'rainy': return <CloudRain className="w-8 h-8 text-automotive-blue" />;
      default: return <Cloud className="w-8 h-8 text-accent" />;
    }
  };

  return (
    <div className="widget-card p-6 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Weather</h3>
        <div className="pulse-dot"></div>
      </div>

      <div className="flex items-center justify-between">
        {/* Weather Icon and Temperature */}
        <div className="flex items-center space-x-4">
          {getWeatherIcon(weather.condition)}
          <div>
            <div className="text-3xl font-bold text-foreground">
              {weather.temperature}°C
            </div>
            <div className="text-sm text-muted-foreground">
              {weather.location}
            </div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="text-right space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Thermometer className="w-4 h-4 text-automotive-red" />
            <span className="text-muted-foreground">Feels like {weather.temperature + 2}°</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Droplets className="w-4 h-4 text-automotive-blue" />
            <span className="text-muted-foreground">{weather.humidity}% humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;