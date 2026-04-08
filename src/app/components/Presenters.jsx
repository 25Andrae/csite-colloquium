import { Award, FileText, Presentation, User, ArrowRight, Sparkles, Mic, LayoutDashboard } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import plenarySpeaker from "../../images/DR_RYANEBARDO.png";

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
    // Parallel Session 1
    { name: "Giovanni G. Galvez, Jilmark Jade M. Buhian", topic: "Development of a Fusion-Sensor System for Real-Time Muscle Fatigue Detection in the Biceps Brachii During Dynamic Curls Using Surface Electromyography and Accelerometry", session: "Parallel Session 1" },
    { name: "Francis Jerus B. Rabaca, Jubal U. Usman", topic: "Design and Development of a ZigBee-Enabled IoT Smart Aquaponics System with Solar-Grid Split Power for Real-Time Water Quality Monitoring, Automated Control, and Growth Performance of Red Tilapia and Lettuce", session: "Parallel Session 1" },
    { name: "Abdulaziz I. Abdukahil, Abdullah Dave S. Adjuran", topic: "Noise-Augmented Training of a 1D CNN for Single-Lead ECG Classification on a Wearable-Class Microcomputer", session: "Parallel Session 1" },
    { name: "Leff-Jazon T. Johnson, James Patrick I. Prianes", topic: "Power-Efficient Water Quality Monitoring System: System Design, Integration, and Comparative Efficiency Analysis", session: "Parallel Session 1" },
    { name: "Leinon Krish M. Lauron, Johnmari Josef S. Lu", topic: "Raspberry Pi-Based Offline Smart Diagnostic Tool for Nitrogen, Phosphorus, and Potassium Deficiency Detection in Corn Leaves Using Visual Symptom Analysis", session: "Parallel Session 1" },
    { name: "Khrisna Alexandra C. Alih, Fairouz P. Hussin", topic: "Myosug: Development of an sEMG-Based Muscle Activity and Fatigue Monitoring Device for the Lower Back in Stooping Tasks Associated with Rice Farming", session: "Parallel Session 1" },
    { name: "Jhones B. Maang, Jaciz Humpbrei G. Pasatiempo", topic: "Evaluating the Influence of Knocking Force on the Accuracy of a Raspberry Pi–Powered Coconut Maturity Assessment System", session: "Parallel Session 1" },
    
    // Parallel Session 2
    { name: "Ylman Nayr A. Galvez, Andrae G. Manguilimotan", topic: "Dengue Forecasting Using Arima and Random Forest Model on Weekly Cases in Zamboanga City Barangay", session: "Parallel Session 2" },
    { name: "Muhaimin N. Estino, Chester Paul D. Palacao, Victor B. Suarez Jr., Irish Ellaine B. Tubil", topic: "Development of Delay Analysis and Control System (DACS) for FILPRO Construction Projects", session: "Parallel Session 2" },
    { name: "Carlo Jose G. Faustino, Aljanna L. Larubis, Joan S. Sahali, Earl Justin T. Vengado", topic: "Structural Analysis and Design of a Community Evacuation Facility in Tumaga, Zamboanga City for Disaster Response and Recovery", session: "Parallel Session 2" },
    { name: "Aiza A. Saradi", topic: "Developing a Polyethylene Terephthalate (Pet) Bottle Powder-Based Method and its Potential for Dna Extraction", session: "Parallel Session 2" },
    { name: "Hanah Firdous T. Ahaja, Realle A. Ramirez", topic: "Quantification and Characterization of Microplastics in Commercial Perna Viridis (Tahong) and Magallana Bilineata (Talabang Tsinelas) from the Bivalve Supply in Zamboanga City, Philippines: A Preliminary Investigation", session: "Parallel Session 2" },
    { name: "Herlyn Kate P. Aizon, Franchesca V. Bernardo, Daniel Angelito G. Hernandez", topic: "In Silico Modeling of the Brownian Dynamics Between Phytochemical-Loaded Pectin Nanoparticles from Sonneratia Alba (Pagatpat) and Tumor Extracellular Matrix", session: "Parallel Session 2" },
    { name: "Daniel Angelito G. Hernandez, Merlita C. Garcia", topic: "Integrating SAMR–based self–paced learning module in teaching radiation damage in biological materials", session: "Parallel Session 2" }
  ];

  const posterPresenters = [
    { name: "Fatima Edzra A. Salasa", topic: "The Multiplication Table as a Framework for Discovering Sums of Powers and Faulhaber’s Formula", code: "P-01" },
    { name: "Knesa N. Raviz", topic: "A Teacher’s Guide on the Use of Natural Acid-Base Indicators in Determining the Acidity and Basicity (pH) of Common Household Materials", code: "P-02" },
    { name: "Claire O. Carpio", topic: "PDRRMO-iOPS: A Web-and-Mobile Disaster Operations and Reporting System for Basilan PDRRMO", code: "P-03" },
    { name: "Mary Grace D. Castolo, Shella Mae M. Delos Reyes, Ameer Rayyan S. Hamsain, Margareth Jannah L. Quiling", topic: "Analysis and Design of Multi-level Parking Facility at La Purisima Street, Zamboanga City", code: "P-04" },
    { name: "Ma. Antoinette S. Duruin, Alfie J. Iribani II, Marc Adrianne M. Serna, Rochelle D. Tada, Marcc Benjil A. Taub", topic: "Construction Site Safety Compliance through Barcode-Assisted PPE Monitoring and Database Management System", code: "P-05" },
    { name: "Cielo Arabella S. Canda, Rebecca Marie C. Tiu", topic: "Using Convolutional Neural Networks to Detect Early Symptoms of Banana Bunchy Top Disease in Banana Cultivar “Lakatan” Trees", code: "P-06" },
    { name: "Danielle Franchette A. Cruz, Jehan Alfa Mae H. Uy", topic: "Development of a Computer Vision-Based Machine Learning Model for Papaya Ripeness Stage Classification Utilizing Raspberry Pi 4", code: "P-07" },
    { name: "Mark Hailey M. Marasigan, Tristan Jay J. Lim", topic: "IoT-Based Socket System with Power Control, Overload Protection, and Energy Forecasting for Electronics Laboratory Energy Management", code: "P-08" },
    { name: "Ramon A. Reyes III, Jay-ar S. Lauddin", topic: "EFA Logistics: An Automated Package Management System Using Optical Character Recognition (OCR) for EFA Enterprises Zamboanga City", code: "P-09" },
    { name: "Amani A. Halipa, Fatima A. Halipa", topic: "Synergistic Molluscicidal Potential of Annona Squamosa (Atis) Leaf Extracts and Allium Sativum (Garlic) Clove Extracts against Pomacea Canaliculata (Golden Apple Snail)", code: "P-10" },
    { name: "Gwyneth B. Landiza, Raine B. Yumol, Daniel Angelito G. Hernandez", topic: "Synthesis and hemostatic potential of copper nanoparticles derived from Achuete (Bixa orellana) seed covering extract", code: "P-11" },
    { name: "Jan Ryan R. Simyunn, Anton John A. Orillineda", topic: "Exploring The Applications Of Simplex Noise In Procedural Open-World Biome Generation", code: "P-12" },
    { name: "Christian Jed M. Duqueza, Jae Ann O. Alcala", topic: "A Web-Based Centralized Internship Management", code: "P-13" },
    { name: "Herlyn Kate P. Aizon, Franchesca V. Bernardo, Daniel Angelito G. Hernandez", topic: "Preliminary molecular dynamics simulation and investigation on the interaction of pectin polymer nanoparticle in extracellular matrix", code: "P-14" }
  ];

  // Helper function to group oral presenters by session
  const groupedOralPresenters = oralPresenters.reduce((acc, presenter) => {
    if (!acc[presenter.session]) acc[presenter.session] = [];
    acc[presenter.session].push(presenter);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#ff9856]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm">
            <Sparkles size={16} />
            <span>Colloquium Highlights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9856]">Presenters</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the brilliant minds, distinguished researchers, and innovative thinkers sharing their groundbreaking work at this year's colloquium.
          </p>
        </div>

        {/* Plenary Speakers Section */}
        <section className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Plenary Speaker</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {plenarySpeakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-3xl p-1 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#ff9856] to-primary opacity-30 group-hover:opacity-100 rounded-3xl transition-opacity duration-700 animate-gradient-x"></div>
                
                <div className="relative bg-card rounded-[1.4rem] p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-10">
                  {/* Avatar with Floating Effect */}
                  <div className="flex-shrink-0 relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#ff9856] rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative p-1.5 bg-gradient-to-tr from-primary to-[#ff9856] rounded-full">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-card shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="flex-1 text-center md:text-left pt-2">
                    <h3 className="text-3xl md:text-4xl font-black mb-3 text-foreground group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-xl font-bold text-[#ff9856] mb-2">{speaker.title}</p>
                    <p className="text-muted-foreground font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
                      <LayoutDashboard size={18} />
                      {speaker.affiliation}
                    </p>
                    <div className="bg-secondary/50 p-6 rounded-2xl border border-border/50">
                      <p className="text-foreground leading-relaxed italic text-lg">
                        "{speaker.bio}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Oral Presenters Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4 shadow-sm border border-primary/10">
              <Mic size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Oral Presentations</h2>

           {/* Global Schedule Banner */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-secondary/50 border border-border/50 rounded-full px-6 py-3 text-sm font-medium">
              <span className="text-primary font-bold">April 16 Schedule:</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> 
                Parallel Sessions 1 & 2 (1:00 PM - 4:15 PM)
              </span>
            </div>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedOralPresenters).map(([sessionName, presenters], sessionIdx) => (
              <div key={sessionName} className="relative">
                {/* Session Divider/Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold whitespace-nowrap px-4 py-2 bg-card border border-border shadow-sm rounded-lg text-primary">
                    {sessionName}
                  </h3>
                  <div className="h-px w-full bg-gradient-to-r from-border to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {presenters.map((presenter, index) => (
                    <div
                      key={index}
                      className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border/60 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-secondary/80 p-3 rounded-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <User size={22} className="text-muted-foreground group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                            {presenter.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-auto border-t border-border/50 pt-4">
                        {presenter.topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Poster Presenters Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff9856]/20 to-[#ff9856]/5 flex items-center justify-center text-[#ff9856] mb-4 shadow-sm border border-[#ff9856]/10">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Poster Presentations</h2>

                {/* Global Schedule Banner */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-secondary/50 border border-border/50 rounded-full px-6 py-3 text-sm font-medium">
              <span className="text-primary font-bold">April 16 Schedule:</span>
                 <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff9856]"></span> 
                Poster Exhibit Area (1:00 PM - 4:15 PM)
              </span>
            </div>
  
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posterPresenters.map((presenter, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-[#ff9856]/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Subtle top border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-[#ff9856]/20 group-hover:from-primary group-hover:to-[#ff9856] transition-all duration-500"></div>
                
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-wider bg-secondary text-foreground px-3 py-1.5 rounded-lg group-hover:bg-[#ff9856] group-hover:text-white transition-colors">
                    {presenter.code}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Presentation className="text-muted-foreground group-hover:text-[#ff9856]" size={18} />
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">{presenter.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {presenter.topic}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl mt-16 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#ff9856] to-primary bg-[length:200%_auto] animate-gradient-x opacity-95"></div>
          
          {/* Glass pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white z-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-4xl font-extrabold mb-4 flex items-center justify-center md:justify-start gap-3">
                Stay Connected! <Sparkles className="text-white/80" />
              </h3>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                Want to present your research next year? Follow our official Facebook page for real-time announcements, call for papers, and updates on the upcoming CSITE Research Colloquium.
              </p>
            </div>
            <a 
              href="https://www.facebook.com/adzucsite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 bg-white text-primary font-bold px-8 py-5 rounded-2xl hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-lg"
            >
              Follow us on Facebook
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}