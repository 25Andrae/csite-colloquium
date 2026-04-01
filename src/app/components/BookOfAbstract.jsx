import { BookOpen, Download, FileText } from "lucide-react";

export function BookOfAbstract() {
  const abstracts = [
    {
      id: "CS-001",
      title: "Deep Learning Approaches for Medical Image Analysis",
      authors: "Dr. Emily Chen, John Rodriguez",
      department: "Computer Science",
      type: "Oral Presentation",
      abstract: "This research explores the application of convolutional neural networks (CNNs) and transformer architectures in the automated diagnosis of medical conditions from radiological images. Our proposed model achieves 95% accuracy in detecting early-stage lung cancer from CT scans.",
    },
    {
      id: "IT-002",
      title: "Blockchain Technology for Supply Chain Management",
      authors: "Prof. Michael Thompson, Sarah Lee",
      department: "Information Technology",
      type: "Oral Presentation",
      abstract: "We present a decentralized blockchain-based system for enhancing transparency and traceability in supply chain operations. The system demonstrates significant improvements in reducing counterfeiting and improving product authenticity verification.",
    },
    {
      id: "ENG-003",
      title: "Sustainable Materials for Green Building Construction",
      authors: "Dr. Robert Martinez, Ana Garcia",
      department: "Engineering",
      type: "Oral Presentation",
      abstract: "This study investigates the mechanical properties and environmental impact of bio-based composite materials for construction. Results show that bamboo-reinforced concrete reduces carbon footprint by 40% while maintaining structural integrity.",
    },
    {
      id: "CS-004",
      title: "Natural Language Processing for Sentiment Analysis in Social Media",
      authors: "Jessica Wang, David Kim",
      department: "Computer Science",
      type: "Poster Presentation",
      abstract: "We develop a transformer-based model for real-time sentiment analysis of multilingual social media posts. The model achieves state-of-the-art performance across 15 languages with an F1-score of 0.92.",
    },
    {
      id: "SCI-005",
      title: "Biodiversity Assessment Using Environmental DNA Sequencing",
      authors: "Dr. Patricia Brown, James Wilson",
      department: "Natural Sciences",
      type: "Oral Presentation",
      abstract: "Our research employs metabarcoding techniques to assess aquatic biodiversity in urban water systems. The study identifies 127 species including 12 previously undocumented in the region.",
    },
    {
      id: "IT-006",
      title: "Cybersecurity Framework for IoT Devices in Smart Homes",
      authors: "Prof. Kevin Zhang, Lisa Anderson",
      department: "Information Technology",
      type: "Poster Presentation",
      abstract: "This work proposes a lightweight authentication protocol for IoT devices that reduces computational overhead by 60% while maintaining robust security against common attack vectors.",
    },
    {
      id: "ENG-007",
      title: "Optimization of Renewable Energy Systems Using AI",
      authors: "Dr. Maria Gonzales, Tom Harris",
      department: "Engineering",
      type: "Oral Presentation",
      abstract: "We present an AI-driven optimization framework for hybrid renewable energy systems that maximizes efficiency and minimizes cost. Field tests show 35% improvement in energy utilization.",
    },
    {
      id: "CS-008",
      title: "Quantum Computing Algorithms for Cryptography",
      authors: "Prof. Richard Taylor, Emma Davis",
      department: "Computer Science",
      type: "Poster Presentation",
      abstract: "This research explores post-quantum cryptographic algorithms resistant to attacks from quantum computers. Our proposed scheme demonstrates security against Shor's and Grover's algorithms.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-primary">Book of Abstracts</h1>
          <p className="text-muted-foreground mb-8">
            Research abstracts from the 2nd CSITE Research Colloquium
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            <Download size={20} />
            Download Complete Book of Abstracts (PDF)
          </button>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-primary to-[#ff9856] text-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">42</div>
            <div className="text-sm opacity-90">Total Abstracts</div>
          </div>
          <div className="bg-secondary rounded-lg p-6 text-center border border-border">
            <div className="text-3xl mb-2 text-primary">28</div>
            <div className="text-sm text-muted-foreground">Oral Presentations</div>
          </div>
          <div className="bg-secondary rounded-lg p-6 text-center border border-border">
            <div className="text-3xl mb-2 text-primary">14</div>
            <div className="text-sm text-muted-foreground">Poster Presentations</div>
          </div>
          <div className="bg-secondary rounded-lg p-6 text-center border border-border">
            <div className="text-3xl mb-2 text-primary">5</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-primary text-white rounded-lg">All Abstracts</button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
            Computer Science
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
            Information Technology
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
            Engineering
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors">
            Natural Sciences
          </button>
        </div>

        {/* Abstracts List */}
        <div className="space-y-6">
          {abstracts.map((abstract) => (
            <div
              key={abstract.id}
              className="bg-white rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {abstract.id}
                      </span>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {abstract.type}
                      </span>
                    </div>
                    <h3 className="text-lg">{abstract.title}</h3>
                  </div>
                </div>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <FileText size={20} />
                </button>
              </div>
              
              <div className="mb-3">
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium">Authors:</span> {abstract.authors}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Department:</span> {abstract.department}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {abstract.abstract}
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <button className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                  <Download size={16} />
                  Download Full Paper
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-secondary rounded-lg p-6 mt-12">
          <h3 className="mb-3 text-primary">Note</h3>
          <p className="text-muted-foreground text-sm">
            The abstracts displayed here are a sample selection. The complete Book of Abstracts
            containing all 42 submissions is available for download. For inquiries about specific
            research papers, please contact the respective authors or the organizing committee.
          </p>
        </div>
      </div>
    </div>
  );
}
