import { Award, FileText, Presentation, User, ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import plenarySpeaker from "../../images/BernardoSVG.svg";
export function Presenters() {
  const plenarySpeakers = [
    {
      name: "Dr. Ryan Ebardo",
      title: "Associate Professor, Research Fellow",
      affiliation: "College of Computer Studies, De La Salle University",
      bio: "Assistant Dean of Research & Advanced Studies, specializing in human-computer interaction, artificial intelligence, and educational technologies.",
      image: plenarySpeaker,
    },
  ];

  const oralPresenters = [
    { name: "Dr. Emily Chen", topic: "Deep Learning for Medical Image Analysis", session: "Session A" },
    { name: "Prof. Michael Thompson", topic: "Blockchain in Supply Chain Management", session: "Session A" },
    { name: "Dr. Robert Martinez", topic: "Sustainable Materials for Construction", session: "Session B" },
    { name: "Dr. Patricia Brown", topic: "Biodiversity Assessment Using DNA Sequencing", session: "Session C" },
    { name: "Dr. Maria Gonzales", topic: "AI Optimization of Renewable Energy Systems", session: "Session B" },
    { name: "Dr. James Wilson", topic: "Urban Water Quality Monitoring", session: "Session C" },
    { name: "Prof. Linda Zhang", topic: "5G Network Security Protocols", session: "Session A" },
    { name: "Dr. Carlos Reyes", topic: "Nanotechnology in Drug Delivery", session: "Session C" },
    { name: "Dr. Amanda Foster", topic: "Smart Grid Technologies", session: "Session B" },
    { name: "Prof. David Kim", topic: "Cloud Computing Architectures", session: "Session A" },
  ];

  const posterPresenters = [
    { name: "Jessica Wang", topic: "NLP for Sentiment Analysis", code: "P-01" },
    { name: "Kevin Zhang", topic: "IoT Security Framework", code: "P-02" },
    { name: "Emma Davis", topic: "Quantum Computing Algorithms", code: "P-03" },
    { name: "Tom Harris", topic: "3D Printing in Manufacturing", code: "P-04" },
    { name: "Lisa Anderson", topic: "Machine Learning for Predictive Maintenance", code: "P-05" },
    { name: "James Miller", topic: "Augmented Reality in Education", code: "P-06" },
    { name: "Rachel Green", topic: "Bioinformatics for Genomic Analysis", code: "P-07" },
    { name: "Daniel White", topic: "Edge Computing Applications", code: "P-08" },
    { name: "Sophia Martinez", topic: "Green Chemistry Innovations", code: "P-09" },
    { name: "Oliver Brown", topic: "Robotics Process Automation", code: "P-10" },
    { name: "Maya Patel", topic: "Data Mining Techniques", code: "P-11" },
    { name: "Alex Turner", topic: "Computer Vision Systems", code: "P-12" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ff9856]">
            Featured Presenters
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the brilliant minds, distinguished researchers, and innovative thinkers sharing their work at this year's colloquium.
          </p>
        </div>

        {/* Plenary Speakers Section */}
        <section className="mb-20 relative">
          <div className="flex items-center gap-4 mb-8">
  
            <h2 className="text-3xl font-bold text-foreground">Plenary Speaker</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {plenarySpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-1 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#ff9856]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-card rounded-xl p-6 md:p-8 h-full flex flex-col md:flex-row items-center md:items-start gap-8 border border-border">
                  
                  {/* Avatar with Gradient Ring */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#ff9856] rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="relative p-1 bg-gradient-to-tr from-primary to-[#ff9856] rounded-full">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-card"
                      />
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      Keynote Presenter
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-lg font-medium text-foreground mb-1">{speaker.title}</p>
                    <p className="text-muted-foreground mb-4">{speaker.affiliation}</p>
                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4 md:border-l-4">
                      "{speaker.bio}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oral Presenters Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Presentation size={24} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Oral Presenters</h2>
          </div>

          <div className="bg-secondary/30 border-l-4 border-primary rounded-r-xl p-5 mb-8 flex items-start gap-3">
            <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Schedule (April 16):</span>{" "}
              <span className="inline-block mr-3"><strong>Session A:</strong> 11:30 AM - 1:00 PM |</span>
              <span className="inline-block mr-3"><strong>Session B:</strong> 2:00 PM - 3:30 PM |</span>
              <span className="inline-block"><strong>Session C:</strong> 3:30 PM - 5:00 PM</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {oralPresenters.map((presenter, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-5 shadow-sm border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="bg-secondary p-3 rounded-full flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <User className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {presenter.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {presenter.topic}
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {presenter.session}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Poster Presenters Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#ff9856]/10 flex items-center justify-center text-[#ff9856]">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Poster Presenters</h2>
          </div>

          <div className="bg-secondary/30 border-l-4 border-[#ff9856] rounded-r-xl p-5 mb-8">
            <p className="text-sm text-muted-foreground">
              Poster presentations will be held on <strong>April 16, 3:30 PM - 4:30 PM</strong>. 
              All posters will be displayed in the main exhibition hall for interactive discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posterPresenters.map((presenter, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md hover:border-[#ff9856]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold bg-gradient-to-r from-primary to-[#ff9856] text-white px-3 py-1 rounded-full shadow-sm">
                    {presenter.code}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <User className="text-muted-foreground group-hover:text-[#ff9856] transition-colors" size={14} />
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-1">{presenter.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {presenter.topic}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="relative overflow-hidden bg-card rounded-2xl shadow-xl border border-border mt-16">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#ff9856] to-primary opacity-90"></div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white z-10">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Stay Connected with CSITE!</h3>
              <p className="text-white/90 text-lg">
                Want to present your research next year? Follow our official Facebook page for real-time announcements, call for papers, and updates on the 3rd CSITE Research Colloquium.
              </p>
            </div>
            <a 
              href="https://www.facebook.com/adzucsite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Follow us on Facebook
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}