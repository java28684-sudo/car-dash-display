import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react';

interface Call {
  id: string;
  name: string;
  number: string;
  type: 'incoming' | 'outgoing' | 'missed';
  timeAgo: string;
}

const RecentCallsWidget = () => {
  const calls: Call[] = [
    { id: '1', name: 'Sarah Johnson', number: '+1 234 567 8901', type: 'incoming', timeAgo: '2m ago' },
    { id: '2', name: 'Mike Chen', number: '+1 234 567 8902', type: 'outgoing', timeAgo: '15m ago' },
    { id: '3', name: 'Unknown', number: '+1 234 567 8903', type: 'missed', timeAgo: '1h ago' },
    { id: '4', name: 'Emma Wilson', number: '+1 234 567 8904', type: 'outgoing', timeAgo: '2h ago' },
  ];

  const getCallIcon = (type: string) => {
    switch (type) {
      case 'incoming':
        return <PhoneIncoming className="w-4 h-4 text-automotive-green" />;
      case 'outgoing':
        return <PhoneOutgoing className="w-4 h-4 text-automotive-blue" />;
      case 'missed':
        return <PhoneMissed className="w-4 h-4 text-automotive-red" />;
      default:
        return <Phone className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="widget-card p-6 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Calls</h3>
        <Phone className="w-5 h-5 text-accent" />
      </div>

      <div className="space-y-3">
        {calls.slice(0, 3).map((call) => (
          <div key={call.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              {getCallIcon(call.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {call.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {call.number}
              </p>
            </div>
            
            <div className="text-xs text-muted-foreground">
              {call.timeAgo}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-accent hover:text-accent/80 transition-colors">
        View All Calls
      </button>
    </div>
  );
};

export default RecentCallsWidget;