import { Clock, Coffee, Presentation } from "lucide-react";

export function Programme() {
  const day1Schedule = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Registration & Welcome Coffee",
      icon: Coffee,
      description: "Check-in and networking",
    },
    {
      time: "9:00 AM - 9:30 AM",
      title: "Opening Ceremony",
      icon: Presentation,
      description: "Welcome address by Dean of CSITE",
      speaker: "Dean Dr. Maria Santos",
    },
    {
      time: "9:30 AM - 11:00 AM",
      title: "Plenary Session I",
      icon: Presentation,
      description: "Advances in Artificial Intelligence and Machine Learning",
      speaker: "Dr. John Anderson, Stanford University",
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: "Coffee Break",
      icon: Coffee,
      description: "Networking and refreshments",
    },
    {
      time: "11:30 AM - 1:00 PM",
      title: "Oral Presentations - Session A",
      icon: Presentation,
      description: "Computer Science & Information Technology Track",
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch Break",
      icon: Coffee,
      description: "Catered lunch",
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Oral Presentations - Session B",
      icon: Presentation,
      description: "Engineering & Applied Sciences Track",
    },
    {
      time: "3:30 PM - 5:00 PM",
      title: "Poster Presentation Session",
      icon: Presentation,
      description: "Interactive poster viewing and discussions",
    },
  ];

  const day2Schedule = [
    {
      time: "8:30 AM - 9:00 AM",
      title: "Registration",
      icon: Coffee,
      description: "Morning coffee and registration",
    },
    {
      time: "9:00 AM - 10:30 AM",
      title: "Plenary Session II",
      icon: Presentation,
      description: "Sustainable Engineering Solutions for Climate Change",
      speaker: "Prof. Sarah Williams, MIT",
    },
    {
      time: "10:30 AM - 11:00 AM",
      title: "Coffee Break",
      icon: Coffee,
      description: "Networking opportunity",
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Oral Presentations - Session C",
      icon: Presentation,
      description: "Natural Sciences & Mathematics Track",
    },
    {
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break",
      icon: Coffee,
      description: "Catered lunch",
    },
    {
      time: "1:30 PM - 3:00 PM",
      title: "Panel Discussion",
      icon: Presentation,
      description: "Future Directions in STEM Research",
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "Awards Ceremony & Closing Remarks",
      icon: Presentation,
      description: "Best paper awards and closing ceremony",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-4 text-primary text-center">Programme Schedule</h1>
        <p className="text-center text-muted-foreground mb-12">
          Two days of inspiring presentations, discussions, and networking
        </p>

        {/* Day 1 */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary to-[#ff9856] text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl">Day 1 - March 15, 2026</h2>
            <p className="opacity-90">Opening Day & Plenary Sessions</p>
          </div>

          <div className="space-y-4">
            {day1Schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-muted-foreground" size={16} />
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                    </div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    {item.speaker && (
                      <p className="text-primary text-sm">Speaker: {item.speaker}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div>
          <div className="bg-gradient-to-r from-primary to-[#ff9856] text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl">Day 2 - March 16, 2026</h2>
            <p className="opacity-90">Research Presentations & Awards</p>
          </div>

          <div className="space-y-4">
            {day2Schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-muted-foreground" size={16} />
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                    </div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    {item.speaker && (
                      <p className="text-primary text-sm">Speaker: {item.speaker}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-secondary rounded-lg p-6 mt-12">
          <h3 className="mb-3 text-primary">Important Notes</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• All participants must register before the opening ceremony</li>
            <li>• Coffee breaks include light refreshments and networking opportunities</li>
            <li>• Lunch will be provided for all registered participants</li>
            <li>• Poster presenters should set up their displays by 1:30 PM on Day 1</li>
            <li>• Certificates of participation will be distributed during the closing ceremony</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
