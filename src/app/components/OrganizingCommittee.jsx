import { 
  Mail, 
  Phone, 
  Award, 
  Users, 
  FileText, 
  Megaphone, 
  CalendarDays, 
  Camera, 
  Boxes,
  ClipboardCheck,
  Utensils
} from "lucide-react";
import chairImg from "../../images/Janet.jpg";
import coChairImg from "../../images/Fe.jpg";
export function OrganizingCommittee() {
  const leadership = [
    {
      name: "Janet G. Tan",
      position: "Chair",
      gradient: "from-primary via-primary/90 to-[#ff9856]",
      // Replace with your actual image paths (e.g., "/images/janet.jpg")
      image: chairImg,
    },
    {
      name: "Fe Grace T. Cañedo",
      position: "Co-Chair",
      gradient: "from-[#ff9856] via-[#ff883d] to-[#ff7a2d]", 
      // Replace with your actual image paths
      image: coChairImg,
    },
  ];

  const committees = [
    {
      name: "Communication & Finance",
      icon: <Megaphone className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Dr. Jocelyn D. Partosa",
      members: [
        "Fe Grace T. Cañedo",
        "Deanmark S. Cañedo",
        "John Frederick S. Fernando",
        "Janet G. Tan",
      ],
    },
    {
      name: "Secretariat",
      icon: <FileText className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Precious T. Opinion",
      members: [
        "Jessibel C. Dingcong",
        "Queendel Vanee G. Garcia",
        "Rosen Gabriel S. Garcia",
        "Ruth R. Guerrero",
        "Andrae G. Manguilimotan",
        "Jomari M. Quenamot",
        "Lyka Mae C. Quibo-Quibo",
      ],
    },
    {
      name: "Review",
      icon: <ClipboardCheck className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Maureen Olive M. Gallardo",
      members: [
        "Dr. Paulino T. Acebes Jr.",
        "Samuel R. Calisang",
        "Adbul Hadi H. Nograles",
        "Jennica D. Nurie",
        "Jozeff Allyn S. Papa",
        "Maximus Emasar R. Pantaleon",
        "Jessica D. Partosa",
        "Dante V. Partosa",
        "Dr. Jocelyn D. Partosa",
        "Junievin R. Ramillano",
        "Rey S. Reyes",
        "Belino R. Rosagaron Jr.",
        "Katherine I. Sinsuan",
      ],
    },
    {
      name: "Program",
      icon: <CalendarDays className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Kreanne F. Diaz",
      members: [
        "Khristan Dee Creencia",
        "Queendel Vanee G. Garcia",
        "Adbul Hadi H. Nograles",
        "Jozeff Allyn S. Papa",
        "Marie Abriella P. Tejada",
      ],
    },
    {
      name: "Logistics",
      icon: <Boxes className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Carmellie Anne A. Plaza", 
      members: [
        "Levi B. Delos Reyes",
        "Daniel Angelito G. Hernandez",
        "Shalimar A. Jaji",
        "Aleekhazer J. Jausan",
      ],
    },
    {
      name: "Documentation & Tech",
      icon: <Camera className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Clairizza V. Arcillas",
      members: [
        "Jewel Jesus E. Escalderon",
        "Carl Joseph C. Jaldon",
        "Rexor M. Miravite",
        "Frantz Merrill A. Sucro",
      ],
    },
    {
      name: "Food",
      icon: <Utensils className="text-primary group-hover:scale-110 transition-transform duration-300" size={26} />,
      head: "Maria Luisa U. Sousa",
      members: [
        "Joel Santos F. Quintanes",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary tracking-tight">
            Organizing Committee
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated team working behind the scenes to make the CSITE Colloquium 2026 a resounding success.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="bg-primary/10 p-3.5 rounded-2xl shadow-sm">
              <Award className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${leader.gradient} text-white rounded-[2rem] p-10 shadow-xl transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Decorative background blurs */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-black opacity-10 rounded-full blur-2xl"></div>

                <div className="relative flex flex-col items-center text-center h-full justify-center">
                  {/* Round Picture Frame */}
                  <div className="mb-6 p-1.5 bg-white/20 rounded-full backdrop-blur-md shadow-inner transform group-hover:scale-105 transition-transform duration-300">
                    <div className="p-1 bg-white rounded-full shadow-lg">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-transparent"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <p className="text-white/90 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
                      {leader.position}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold drop-shadow-sm">{leader.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <div className="bg-primary/10 p-3.5 rounded-2xl shadow-sm">
              <Users className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Committees</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-sm border border-border/60 hover:shadow-xl hover:border-primary/40 transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/20 to-primary/5 group-hover:from-primary group-hover:to-primary/60 transition-colors duration-300" />

                {/* Committee Header */}
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border/40">
                  <div className="bg-primary/5 p-3 rounded-xl shadow-sm group-hover:bg-primary/10 transition-colors duration-300">
                    {committee.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {committee.name}
                  </h3>
                </div>

                {/* Committee Head */}
                {committee.head && (
                  <div className="mb-5 bg-secondary/30 rounded-xl p-4 border border-border/30">
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                      Committee Head
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {committee.head}
                    </p>
                  </div>
                )}

                {/* Committee Members */}
                <div className="flex-grow px-1">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    Members
                  </p>
                  <ul className="space-y-2.5">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                        <span className="text-sm font-medium">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-secondary/80 to-secondary/30 rounded-[2.5rem] p-10 sm:p-14 shadow-sm border border-border/50 text-center relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Have questions about the colloquium? Feel free to reach out to the organizing committee. We are here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="mailto:colloquium@csite.university.edu" className="flex items-center gap-3 bg-background hover:bg-primary hover:text-white px-8 py-4 rounded-full shadow-sm border border-border transition-all duration-300 group w-full sm:w-auto justify-center">
                <Mail className="text-primary group-hover:text-white transition-colors" size={20} />
                <span className="font-semibold transition-colors">colloquium@csite.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}