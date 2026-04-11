import { useEffect, useState } from "react";
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, User, Quote } from "lucide-react"; // Added Quote icon
import { ImageWithFallback } from "./figma/ImageWithFallback";

import qrCode from "../../images/RegistrationQR.svg";
import img1 from "../../images/C2About.jpg";
import img2 from "../../images/C3About.jpg";
import img3 from "../../images/C4About.jpg";
import img4 from "../../images/C5About.jpg";
import img5 from "../../images/C6About.jpg";
import JocelynPartosa from "../../images/JocelynPartosa.svg";

export function About() {
  const images = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">

      {/* HERO SLIDESHOW */}
      <div className="relative rounded-3xl overflow-hidden mb-16 h-[450px] shadow-xl group">

        {/* Images */}
        {images.map((img, index) => (
          <ImageWithFallback
            key={index}
            src={img}
            alt="Research Colloquium"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-[#e8682a]/75 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
              2nd CSITE Research Colloquium 2026
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow">
              "Innovating Science and Technology: Connecting Ideas, Empowering Communities"
            </p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Calendar size={28} />
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">Date & Time</h3>
          </div>
          <div className="space-y-1 pl-1">
            <p className="font-bold text-foreground text-xl">April 16, 2026</p>
            <p className="text-foreground/70 font-medium">8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">Venue</h3>
          </div>
          <div className="space-y-1 pl-1">
            <p className="font-bold text-foreground text-xl">Celebrity Hall, Grand Astoria Hotel</p>
            <p className="text-foreground/70 font-medium">Zamboanga City, Philippines</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Users size={28} />
            </div>
            <h3 className="text-lg font-semibold text-muted-foreground">Open To</h3>
          </div>
          <div className="space-y-1 pl-1">
            <p className="font-bold text-foreground text-xl">All Researchers</p>
            <p className="text-foreground/70 font-medium">Faculty & Students</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        
        {/* Left Column: About Content & Focus Areas */}
        <div className="lg:col-span-7">
          
          {/* About Section */}
          <h2 className="text-3xl font-bold mb-6 text-foreground">About the Colloquium</h2>
          {/* Add text-justify here */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg mb-12 text-justify">
            <p>
              The 2nd CSITE Research Colloquium, guided by the theme{" "}
              <span className="font-semibold text-primary">
                “Innovating Science and Technology: Connecting Ideas, Empowering Communities,”
              </span>{" "}
              is designed first and foremost as a premier academic stage for undergraduate and graduate students. Its primary mission is to provide these emerging scholars with a dedicated platform to present their original research findings and showcase their capstone projects.
            </p>

            <p>
              By placing student researchers at the center of the event, the colloquium highlights vital interdisciplinary work across key pillars:
            </p>

            <ul className="list-disc pl-6 md:pl-8 space-y-2 my-4 text-muted-foreground">
              <li>Mathematics Education</li>
              <li>Artificial Intelligence and Data Science</li>
              <li>Engineering and IoT</li>
              <li>Multimedia and Software Development</li>
              <li>Natural Sciences (supported by computational models)</li>
            </ul>

            <p>
              <span className="font-semibold text-foreground">Our Goal:</span> To empower the next generation of innovators. By providing a professional environment for students to share their data-driven and technological solutions, we bridge the gap between classroom learning and real-world impact.
            </p>

            <p>
              Through plenary sessions and collaborative discussions, the event fosters a culture of innovation, allowing undergraduate and graduate presenters to connect with the broader community and contribute meaningful advancements to the fields of science and technology.
            </p>
          </div>

          {/* Focus Areas Section (Moved Below About) */}
          <h2 className="text-3xl font-bold mb-6 text-foreground">Focus Areas</h2>
          <div className="space-y-4">
            <div className="bg-secondary/40 border-l-4 border-primary rounded-r-xl p-5 hover:bg-secondary/60 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-primary text-lg leading-snug">
                  Mathematics Education, Learning Analytics & Data-Driven Pedagogies
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Explore innovative teaching strategies, assessment methods, and the use of data analytics to enhance learning outcomes in mathematics education.
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG4 Quality Education
                </span>
              </div>
            </div>

            <div className="bg-secondary/40 border-l-4 border-primary rounded-r-xl p-5 hover:bg-secondary/60 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-primary text-lg leading-snug">
                  Artificial Intelligence, Machine Learning, and Data Science
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Showcase advancements in AI, machine learning models, and data-driven solutions addressing real-world problems across various domains.
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG9 Industry & Innovation
                </span>
              </div>
            </div>

            <div className="bg-secondary/40 border-l-4 border-primary rounded-r-xl p-5 hover:bg-secondary/60 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-primary text-lg leading-snug">
                  Engineering, IoT, and Smart Infrastructure
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Present innovations in smart systems, IoT-enabled solutions, and engineering technologies applied to infrastructure development and healthcare.
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG9 Industry & Innovation
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG11 Sustainable Cities
                </span>
              </div>
            </div>

            <div className="bg-secondary/40 border-l-4 border-primary rounded-r-xl p-5 hover:bg-secondary/60 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-primary text-lg leading-snug">
                  Animation, Software & Multimedia Production
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Highlight creative and technical projects in software engineering, digital media, animation, and interactive multimedia development.
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG9 Industry & Innovation
                </span>
              </div>
            </div>

            <div className="bg-secondary/40 border-l-4 border-primary rounded-r-xl p-5 hover:bg-secondary/60 transition-colors flex flex-col justify-between">
              <div>
                <h4 className="mb-2 font-bold text-primary text-lg leading-snug">
                  Natural Sciences and Computational Models
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Discuss research in natural sciences supported by computational modeling, simulations, and data analysis techniques.
                </p>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  #SDG13 Climate Action
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Message from the Dean */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Message from the Dean</h2>
          
          <div className="relative bg-card border border-border shadow-lg rounded-3xl p-8 md:p-10 overflow-hidden group">
            
            {/* Background Decorative Quote Icon */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 text-primary/5 rotate-12 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
              <Quote size={200} fill="currentColor" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Highlighted Introductory Paragraph */}
              <p className="text-xl md:text-2xl font-medium text-primary/90 leading-relaxed italic text-left">
                “Greetings from the College of Science, Information Technology, and Engineering! It is my pleasure to welcome you to this year’s Research Colloquium with the theme,{" "}
                <span className="font-bold text-primary bg-primary/15 px-2 py-1 rounded-md box-decoration-clone">
                  “Innovating Science and Technology: Connecting Ideas, Empowering Communities.”
                </span>
              </p>
              
              {/* Main Body Text - Removed italics, increased line spacing for readability */}
              <div className="space-y-5 text-foreground/80 leading-relaxed text-[15px] text-justify">
                <p>
                  The pursuit of knowledge flourishes through collaboration, shared purpose, and mutual support. In this spirit, our research becomes more purposeful when we walk alongside one another—researchers, educators, students, and community partners—working together toward solutions that truly matter.
                </p>
                
                <p>
                  Today’s colloquium showcases a rich spectrum of research grounded in our key strands: Theories and Algorithms, which deepen our understanding of fundamental principles; Innovation and Technology, which translate ideas into practical solutions; Applied Science (Experimental/Computational), which advances knowledge through rigorous inquiry; and Urban Infrastructure and Construction Management, which responds to the evolving needs of our man-made surroundings. Together, these strands reflect a unified commitment to developing knowledge and innovations that meaningfully address real-world challenges and serve our communities.
                </p>
                
                <p>
                  In this light, we are especially honored to be joined by our Keynote Speaker, Dr. Ryan Ebardo, Assistant Dean for Research and Advanced Studies at the College of Computer Studies, De La Salle University, whose research portfolio spans healthcare, the digital environment, and education—areas that significantly shape human experience in today’s world.
                </p>
                
                <p>
                  We also recognize a meaningful synergy between this work and the sociological background of our Vice President for Higher Education (VPHE), highlighting the vital intersection of human behavior and technology. This convergence reminds us that innovation is most impactful when it is both technically sound and deeply attuned to the needs, experiences, and dignity of the people it serves.
                </p>

                <p>
                  We also extend our heartfelt thanks to our Vice President for Higher Education, Fr. Rene C. Tacastacas, SJ, for joining us today and for his continued support of the College through the years. Through his welcome message, informed by his background in sociology, he reminds us that at the heart of innovation is a deep understanding of people—reinforcing the spirit of companionship that guides our shared pursuit of knowledge and service.
                </p>

                <p>
                  Finally, my sincere appreciation to Engr. Janet G. Tan and Ms. Fe Grace T. Cañedo, our Colloquium Chair and Co-Chair, for their dedicated leadership in bringing this event to fruition. My gratitude also goes to all committee heads and members for their steadfast support and dedication throughout the preparation of this colloquium. Your efforts embody true companionship in action.
                </p>

                <p className="font-medium text-foreground">
                  May this colloquium inspire meaningful conversations, deepen our sense of companionship, and strengthen our shared mission of using science and technology in the service of society.
                </p>
              </div>

              {/* Dean's Profile/Signature Block */}
              <div className="mt-4 border-t-2 border-primary/10 pt-8 flex flex-col md:flex-row gap-6 items-center md:items-center">
                
               {/* Cool Circular Image Template */}
              <div className="relative group/avatar flex-shrink-0 w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                
                {/* Background gradient (visible if your SVG has transparency) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 blur-sm group-hover/avatar:blur-none transition-all duration-300 z-0"></div>
                
                {/* Your Imported Image */}
              <img 
                  src={JocelynPartosa} 
                  alt="Jocelyn Partosa" 
                  className="w-full h-full object-cover object-top relative z-10"
                />
              </div>

                {/* Dean's Details */}
                <div className="flex-grow text-center md:text-left space-y-1.5">
                  <p className="font-bold text-foreground text-xl tracking-tight">Jocelyn D. Partosa, PhD</p>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Dean</p>
                  <div className="text-sm text-muted-foreground leading-snug">
                    <p>College of Science, Information Technology, and Engineering</p>
                    <p>Ateneo de Zamboanga University</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-[#e8682a] to-[#d65519] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Celebrating Research Excellence
          </h2>
          <p className="mb-8 text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
            Be part of an inspiring academic gathering that pushes the boundaries of knowledge.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZuRkB-2GCvERuleAaAf-_szftyj_1x018cxKqjE1gjhi21A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#e8682a] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all inline-block shadow-md"
          >
            Register Now
          </a>
        </div>
        
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <img 
              src={qrCode} 
              alt="QR Code for Registration"
              className="w-40 h-40 md:w-48 md:h-48 object-contain"
            />
          </div>
          <p className="text-sm mt-4 opacity-90 font-medium tracking-wide uppercase">
            Scan to Register
          </p>
        </div>
      </div>
    </div>
  );
}