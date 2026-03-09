import { Award, FileText, Presentation, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Presenters() {
  const plenarySpakers = [
    {
      name: "Dr. John Anderson",
      title: "Professor of Computer Science",
      affiliation: "Stanford University",
      topic: "Advances in Artificial Intelligence and Machine Learning",
      bio: "Dr. Anderson is a leading researcher in AI with over 20 years of experience. He has published 150+ papers and led groundbreaking projects in deep learning and neural networks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Prof. Sarah Williams",
      title: "Director of Climate Research Lab",
      affiliation: "Massachusetts Institute of Technology",
      topic: "Sustainable Engineering Solutions for Climate Change",
      bio: "Prof. Williams specializes in sustainable engineering and has received numerous awards for her work on renewable energy systems and climate adaptation strategies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-4 text-primary text-center">List of Presenters</h1>
        <p className="text-center text-muted-foreground mb-12">
          Distinguished speakers and researchers presenting at the colloquium
        </p>

        {/* Plenary Speakers */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Award className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl text-primary">Plenary Speakers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plenarySpakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl mb-1">{speaker.name}</h3>
                    <p className="text-sm text-primary mb-1">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 mb-3">
                  <p className="text-sm mb-1 text-muted-foreground">Topic:</p>
                  <p className="text-primary">{speaker.topic}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Oral Presenters */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Presentation className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl text-primary">Oral Presenters</h2>
          </div>

          <div className="bg-secondary rounded-lg p-6 mb-6">
            <p className="text-muted-foreground text-sm">
              <strong>Session A:</strong> Computer Science & IT (Day 1, 11:30 AM - 1:00 PM) |{" "}
              <strong>Session B:</strong> Engineering (Day 1, 2:00 PM - 3:30 PM) |{" "}
              <strong>Session C:</strong> Natural Sciences (Day 2, 11:00 AM - 12:30 PM)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {oralPresenters.map((presenter, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <User className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-2">{presenter.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{presenter.topic}</p>
                    <span className="inline-block text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {presenter.session}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Poster Presenters */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <FileText className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl text-primary">Poster Presenters</h2>
          </div>

          <div className="bg-secondary rounded-lg p-6 mb-6">
            <p className="text-muted-foreground text-sm">
              Poster presentations will be held on <strong>Day 1, 3:30 PM - 5:00 PM</strong>. All posters
              will be displayed in the main exhibition hall for interactive discussions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {posterPresenters.map((presenter, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded font-medium">
                    {presenter.code}
                  </span>
                  <User className="text-primary" size={16} />
                </div>
                <h4 className="text-sm mb-2">{presenter.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{presenter.topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-primary to-[#ff9856] rounded-xl p-8 text-white mt-12">
          <h3 className="text-2xl mb-3">Want to Present Your Research?</h3>
          <p className="mb-4 opacity-95">
            Stay tuned for announcements about the 3rd CSITE Research Colloquium. Follow our updates
            to learn about call for papers and submission deadlines.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </div>
  );
}
