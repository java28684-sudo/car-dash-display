import { useState } from 'react';
import { Phone, PhoneCall, Users, Clock } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';

const PhonePage = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const recentCalls = [
    { id: '1', name: 'Sarah Johnson', number: '+1 234 567 8901', type: 'incoming', time: '2:30 PM', date: 'Today' },
    { id: '2', name: 'Mike Chen', number: '+1 234 567 8902', type: 'outgoing', time: '1:45 PM', date: 'Today' },
    { id: '3', name: 'Unknown', number: '+1 234 567 8903', type: 'missed', time: '12:20 PM', date: 'Today' },
    { id: '4', name: 'Emma Wilson', number: '+1 234 567 8904', type: 'outgoing', time: '11:30 AM', date: 'Today' },
    { id: '5', name: 'Dad', number: '+1 234 567 8905', type: 'incoming', time: '9:15 AM', date: 'Today' },
  ];

  const contacts = [
    { id: '1', name: 'Sarah Johnson', number: '+1 234 567 8901', favorite: true },
    { id: '2', name: 'Mike Chen', number: '+1 234 567 8902', favorite: true },
    { id: '3', name: 'Emma Wilson', number: '+1 234 567 8904', favorite: false },
    { id: '4', name: 'Dad', number: '+1 234 567 8905', favorite: true },
    { id: '5', name: 'Mom', number: '+1 234 567 8906', favorite: true },
  ];

  const tabs = [
    { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'dial', label: 'Dial', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      
      <main className="pt-16 pl-20 p-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-8 glow-text">Phone</h1>
          
          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-accent text-accent-foreground shadow-glow'
                      : 'bg-secondary hover:bg-accent/20 text-muted-foreground hover:text-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="glass-card p-6 rounded-xl">
            {activeTab === 'recent' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground mb-4">Recent Calls</h2>
                {recentCalls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        call.type === 'incoming' ? 'bg-automotive-green/20 text-automotive-green' :
                        call.type === 'outgoing' ? 'bg-automotive-blue/20 text-automotive-blue' :
                        'bg-automotive-red/20 text-automotive-red'
                      }`}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{call.name}</p>
                        <p className="text-sm text-muted-foreground">{call.number}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground">{call.time}</p>
                      <p className="text-xs text-muted-foreground">{call.date}</p>
                    </div>
                    <button className="btn-automotive">
                      <PhoneCall className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contacts</h2>
                {contacts.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-semibold">{contact.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.number}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {contact.favorite && (
                        <div className="w-2 h-2 bg-automotive-orange rounded-full"></div>
                      )}
                      <button className="btn-automotive">
                        <PhoneCall className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'dial' && (
              <div className="max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Dial Pad</h2>
                <div className="bg-card/50 p-4 rounded-lg mb-6">
                  <input
                    type="text"
                    placeholder="Enter number..."
                    className="w-full bg-transparent text-2xl text-center text-foreground border-none outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key) => (
                    <button
                      key={key}
                      className="w-16 h-16 bg-secondary hover:bg-accent/20 rounded-full flex items-center justify-center text-xl font-semibold text-foreground transition-all hover:scale-105"
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <button className="w-full btn-automotive text-lg py-4">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhonePage;