import React, { useState } from "react";
import { 
  BookOpen, 
  ExternalLink, 
  Users, 
  MapPin, 
  Clock,
  ChevronRight
} from "lucide-react";

export function BookOfAbstract() {
  const [activeSession, setActiveSession] = useState("session1");

  // TEMPLATE STRUCTURE: Fill your abstracts in the respective arrays below
  const conferenceData = {
    session1: {
      id: "session1",
      title: "Parallel Session 1",
      time: "09:00 AM - 12:00 PM",
      subjects: [
        {
          category: "Computer Science",
          room: "Room A101",
          abstracts: [
            {
              id: "CS-001",
              title: "[Template] Deep Learning Approaches for Medical Image Analysis",
              authors: "Dr. Emily Chen, John Rodriguez",
              type: "Oral Presentation",
              abstract: "Paste your abstract text here. This is a template card for Computer Science in Session 1.",
            },
            // Add more CS abstracts for Session 1 here...
          ],
        },
        {
          category: "Engineering",
          room: "Room B204",
          abstracts: [
            {
              id: "ENG-001",
              title: "[Template] Sustainable Materials for Green Building Construction",
              authors: "Dr. Robert Martinez, Ana Garcia",
              type: "Oral Presentation",
              abstract: "Paste your abstract text here. This is a template card for Engineering in Session 1.",
            },
            // Add more Engineering abstracts for Session 1 here...
          ],
        },
      ],
    },
    session2: {
      id: "session2",
      title: "Parallel Session 2",
      time: "01:00 PM - 04:00 PM",
      subjects: [
        {
          category: "Information Technology",
          room: "Room A102",
          abstracts: [
            {
              id: "IT-001",
              title: "[Template] Blockchain Technology for Supply Chain Management",
              authors: "Prof. Michael Thompson, Sarah Lee",
              type: "Oral Presentation",
              abstract: "Paste your abstract text here. This is a template card for IT in Session 2.",
            },
            // Add more IT abstracts for Session 2 here...
          ],
        },
        {
          category: "Natural Sciences",
          room: "Room C305",
          abstracts: [
            {
              id: "SCI-001",
              title: "[Template] Biodiversity Assessment Using Environmental DNA Sequencing",
              authors: "Dr. Patricia Brown, James Wilson",
              type: "Poster Presentation",
              abstract: "Paste your abstract text here. This is a template card for Natural Sciences in Session 2.",
            },
            // Add more Natural Science abstracts for Session 2 here...
          ],
        },
      ],
    },
  };

  const currentSessionData = conferenceData[activeSession];

  return (
    <div className="min-h-screen bg-background text-foreground pb-12">
      {/* Hero Section */}
      <div className="bg-secondary/50 border-b border-border pt-16 pb-12 px-4 mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <BookOpen className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Book of Abstracts
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Explore the cutting-edge research and presentations from the 2nd CSITE Research Colloquium.
          </p>
          
          {/* Google Drive Link Button */}
          <a 
            href="https://drive.google.com/your-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-medium shadow-lg shadow-primary/25"
          >
            Access Full Abstracts Repository
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Abstracts", value: "42", highlight: true },
            { label: "Oral Presentations", value: "28" },
            { label: "Poster Presentations", value: "14" },
            { label: "Participating Depts", value: "5" }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-6 text-center border transition-transform hover:-translate-y-1 ${
                stat.highlight 
                  ? "bg-gradient-to-br from-primary to-[#ff9856] text-white border-transparent shadow-lg" 
                  : "bg-card border-border shadow-sm"
              }`}
            >
              <div className={`text-4xl font-bold mb-2 ${!stat.highlight && "text-primary"}`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${stat.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Session Toggle Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {Object.values(conferenceData).map((session) => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session.id)}
              className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                activeSession === session.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Clock size={20} className={activeSession === session.id ? "text-white/80" : "text-muted-foreground"} />
              <div>
                <div className="leading-tight">{session.title}</div>
                <div className={`text-xs font-normal mt-1 ${activeSession === session.id ? "text-white/80" : "text-muted-foreground"}`}>
                  {session.time}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area grouped by Subject */}
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentSessionData.subjects.map((subject, sIdx) => (
            <div key={sIdx} className="space-y-6">
              {/* Subject Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    {subject.category}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-lg">
                  <MapPin size={16} className="text-primary" />
                  {subject.room}
                </div>
              </div>

              {/* Abstracts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {subject.abstracts.map((abstract) => (
                  <div
                    key={abstract.id}
                    className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {abstract.id}
                        </span>
                        <span className="text-xs font-medium bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full">
                          {abstract.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 leading-snug group-hover:text-primary transition-colors">
                      {abstract.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                      <Users size={16} className="text-primary shrink-0" />
                      <span className="line-clamp-1">{abstract.authors}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {abstract.abstract}
                    </p>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-end">
                      <div className="text-xs font-medium text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                        Read more <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="bg-primary/5 rounded-2xl p-6 mt-16 border border-primary/20 text-center">
          <h3 className="mb-2 font-semibold text-primary">Need more information?</h3>
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            The abstracts displayed above are organized by parallel sessions. To view the complete documentation, 
            methodologies, and comprehensive data, please access the full repository via the Google Drive link at the top of the page.
          </p>
        </div>
      </div>
    </div>
  );
}