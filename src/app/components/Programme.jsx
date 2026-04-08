import { 
  Clock, 
  Presentation, 
  Utensils, 
  Award, 
  UserCheck, 
  Play, 
  Mic, 
  Info, 
  MessageCircle, 
  Video, 
  Scissors, 
  Users, 
  Medal, 
  Camera,
  Sun,
  Sunset
} from "lucide-react";

export function Programme() {
  const schedule = [
    // Morning Session
    {
      time: "8:00 AM - 9:00 AM",
      title: "Registration and Arrival",
      icon: UserCheck,
      description: "Check-in and collect your colloquium materials.",
      isMorningBreak: true,
    },
    {
      time: "9:00 AM - 9:10 AM",
      title: "Opening Program",
      icon: Play,
      description: "Invocation, National Anthem, and Zamboanga Hermosa Hymn.",
    },
    {
      time: "9:10 AM - 9:20 AM",
      title: "Welcome Remarks",
      icon: Mic,
      speaker: "Fr. Rene C. Tacastacas, SJ",
      role: "Vice President for Higher Education",
    },
    {
      time: "9:20 AM - 9:25 AM",
      title: "Introduction to the Guest Speaker",
      icon: Info,
      speaker: "Dr. Maureen Olive Gallardo",
      role: "Faculty, Computer Science Department",
    },
    {
      time: "9:25 AM - 11:00 AM",
      title: "Plenary Session",
      icon: Presentation,
      speaker: "Dr. Ryan Ebardo",
      role: "Associate Professor, Research Fellow | Assistant Dean, Research & Advanced Studies | CCS, De La Salle University - Manila",
    },
    {
      time: "11:00 AM - 11:15 AM",
      title: "Open Forum / Q&A",
      icon: MessageCircle,
      description: "Interactive Q&A session with the plenary speaker.",
    },
    {
      time: "11:15 AM - 11:20 AM",
      title: "Presentation of Certification",
      icon: Award,
      description: "Awarding of certification to the speaker.",
    },
    {
      time: "11:20 AM - 11:30 AM",
      title: "Video Presentations of National Competitions",
      icon: Video,
      description: "Featuring 'OA Knee Mo' and 'Anyam'.",
    },
    {
      time: "11:30 AM - 11:50 AM",
      title: "Ribbon Cutting Ceremony",
      icon: Scissors,
      description: "Opening of the Poster Exhibit Area. Announcement of Oral and Poster presentation guidelines.",
    },
    {
      time: "11:50 AM - 1:00 PM",
      title: "Lunch Break",
      icon: Utensils,
      description: "Networking lunch and announcement of judging criteria.",
    },

    // Afternoon Session
    {
      time: "1:00 PM - 4:15 PM",
      title: "Research Presentations & Evaluations",
      icon: Users,
      description: "Simultaneous oral paper presentations across multiple tracks and interactive poster evaluations at the exhibit area.",
      tags: ["Parallel Session 1", "Parallel Session 2", "Poster Exhibit Area"],
      isAfternoonBreak: true,
    },
    {
      time: "4:15 PM - 4:30 PM",
      title: "Awarding of Certificates and Recognitions",
      icon: Medal,
      description: "Honoring outstanding presentations and researchers.",
    },
    {
      time: "4:30 PM - 5:00 PM",
      title: "Closing Remarks & Photo Opportunity",
      icon: Camera,
      speaker: "Engr. Janet G. Tan",
      role: "Chair, Engineering Department",
    }
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#ff9856]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm">
            <Clock size={16} />
            <span>Event Itinerary</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Programme <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9856]">Flow</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A full day dedicated to inspiring presentations, academic discussions, and technological innovations.
          </p>
        </div>

        {/* Date Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-[#ff9856] to-primary bg-[length:200%_auto] animate-gradient-x text-white rounded-[2rem] p-8 md:p-10 mb-16 shadow-2xl shadow-primary/20 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white/80 font-bold text-sm tracking-widest uppercase mb-1">Main Conference Day</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight drop-shadow-md">April 16, 2026</h2>
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <span className="font-bold text-xl tracking-wide">{schedule.length} Events Scheduled</span>
            </div>
          </div>
        </div>

        {/* Timeline Schedule */}
        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-[31px] md:left-[47px] top-4 bottom-10 w-1 bg-gradient-to-b from-primary via-[#ff9856] to-primary/30 rounded-full opacity-30"></div>

          <div className="space-y-10 relative">
            {schedule.map((item, index) => (
              <div key={index}>
                
            {/* Morning Header */}
            {item.isMorningBreak && (
              <div className="flex items-center gap-4 mb-10 ml-16 md:ml-28">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-5 py-2 rounded-xl font-bold text-sm tracking-widest flex items-center gap-2.5 shadow-lg shadow-orange-500/25 border border-white/20">
                  <Sun size={18} className="text-white/90" /> 
                  <span>MORNING SESSION</span>
                </div>
                {/* Divider line tinted slightly with morning colors */}
                <div className="h-px flex-1 bg-gradient-to-r from-orange-300 via-border/50 to-transparent dark:from-orange-900/50"></div>
              </div>
            )}

            {/* Afternoon Header */}
            {item.isAfternoonBreak && (
              <div className="flex items-center gap-4 mb-10 mt-16 ml-16 md:ml-28">
                <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-5 py-2 rounded-xl font-bold text-sm tracking-widest flex items-center gap-2.5 shadow-lg shadow-rose-500/25 border border-white/20">
                  <Sunset size={18} className="text-white/90" /> 
                  <span>AFTERNOON SESSION</span>
                </div>
                {/* Divider line tinted slightly with afternoon colors */}
                <div className="h-px flex-1 bg-gradient-to-r from-rose-300 via-border/50 to-transparent dark:from-rose-900/50"></div>
              </div>
            )}

                {/* Timeline Item */}
                <div className="relative flex items-start group">
                  
                  {/* Glowing Node */}
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 relative z-10">
                    <div className="absolute inset-2 bg-gradient-to-tr from-primary to-[#ff9856] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center text-primary group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-[#ff9856] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-primary/40 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                      <item.icon size={28} strokeWidth={2.5} className="md:w-8 md:h-8 w-6 h-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 ml-4 md:ml-6 pt-1 md:pt-3">
                    <div className="bg-card/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-border group-hover:shadow-xl group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-lg w-fit border border-primary/20">
                          <Clock size={16} />
                          <span className="text-sm tracking-wide">{item.time}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black mb-2 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#ff9856] transition-all">
                        {item.title}
                      </h3>
                      
                      {item.description && (
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                          {item.description}
                        </p>
                      )}
                      
                      {/* Highlighted Tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
                              tag.includes('Parallel') 
                                ? 'bg-gradient-to-r from-primary to-primary/80 text-white border-transparent'
                                : tag.includes('Poster')
                                ? 'bg-gradient-to-r from-[#ff9856] to-orange-400 text-white border-transparent'
                                : 'bg-secondary text-foreground border border-border/50'
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Speaker Info */}
                      {item.speaker && (
                        <div className="mt-4 inline-flex flex-col md:flex-row md:items-center gap-3 bg-secondary/40 p-4 rounded-xl border border-secondary w-full md:w-auto">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#ff9856] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                            <Mic size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">
                              {item.speaker}
                            </p>
                            {item.role && (
                              <p className="text-xs text-muted-foreground mt-0.5 max-w-sm">
                                {item.role}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}