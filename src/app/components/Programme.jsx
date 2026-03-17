import { Clock, Coffee, Presentation, Utensils, Award } from "lucide-react";

export function Programme() {
  const schedule = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Registration & Welcome Coffee",
      icon: Coffee,
      description: "Check-in, collect your badges, and morning networking",
    },
    {
      time: "9:00 AM - 9:30 AM",
      title: "Opening Ceremony",
      icon: Presentation,
      description: "Welcome address and event kickoff",
      speaker: "Dean Dr. Maria Santos, CSITE",
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
      icon: Utensils,
      description: "Catered networking lunch",
    },
    {
      time: "2:00 PM - 3:30 PM",
      title: "Oral Presentations - Session B",
      icon: Presentation,
      description: "Engineering & Applied Sciences Track",
    },
    {
      time: "3:30 PM - 4:30 PM",
      title: "Poster Presentation Session",
      icon: Presentation,
      description: "Interactive poster viewing and academic discussions",
    },
    {
      time: "4:30 PM - 5:00 PM",
      title: "Closing Ceremony & Awards",
      icon: Award,
      description: "Distribution of certificates and closing remarks",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ff9856]">
            Programme Schedule
          </h1>
          <p className="text-lg text-muted-foreground">
            A full day of inspiring presentations, discussions, and networking
          </p>
        </div>

        {/* Date Banner */}
        <div className="bg-gradient-to-r from-primary to-[#ff9856] text-white rounded-2xl p-8 mb-12 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-1">April 16, 2026</h2>
              <p className="text-white/90 font-medium text-lg">Main Conference Day</p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="font-semibold">{schedule.length} Sessions</span>
            </div>
          </div>
        </div>

        {/* Timeline Schedule */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 via-[#ff9856]/30 to-primary/30"></div>

          <div className="space-y-8 relative">
            {schedule.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                
                {/* Timeline Node */}
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-background border-4 border-background relative z-10">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-[#ff9856] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                    <item.icon size={24} className="md:w-6 md:h-6 w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 ml-6 mt-1 md:mt-3">
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <div className="flex items-center gap-2 text-primary font-semibold bg-primary/5 px-3 py-1 rounded-full w-fit">
                        <Clock size={16} />
                        <span className="text-sm">{item.time}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    {item.speaker && (
                      <div className="inline-flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg border border-secondary">
                        <span className="text-sm font-medium text-foreground">
                          🎤 Speaker: <span className="text-primary">{item.speaker}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-secondary/30 border border-secondary rounded-2xl p-8 mt-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-[#ff9856]"></div>
          <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
            Important Notes
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>All participants must register before the opening ceremony.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Coffee breaks include light refreshments and networking opportunities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Lunch will be provided for all registered participants.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Poster presenters should set up their displays by 1:30 PM.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Certificates of participation will be distributed during the closing ceremony.</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}