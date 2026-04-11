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
      image: chairImg,
    },
    {
      name: "Fe Grace T. Cañedo",
      position: "Co-Chair",
      gradient: "from-[#ff9856] via-[#ff883d] to-[#ff7a2d]", 
      image: coChairImg,
    },
  ];

  const committees = [
    {
      name: "Communication & Finance",
      icon: <Megaphone className="text-primary group-hover:-rotate-12 transition-transform duration-500" size={26} />,
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
      icon: <FileText className="text-primary group-hover:rotate-12 transition-transform duration-500" size={26} />,
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
      icon: <ClipboardCheck className="text-primary group-hover:scale-110 transition-transform duration-500" size={26} />,
      head: "Dr. Maureen Olive M. Gallardo",
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
      icon: <CalendarDays className="text-primary group-hover:-rotate-12 transition-transform duration-500" size={26} />,
      head: "Dr. Kreanne F. Diaz",
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
      icon: <Boxes className="text-primary group-hover:rotate-12 transition-transform duration-500" size={26} />,
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
      icon: <Camera className="text-primary group-hover:scale-110 transition-transform duration-500" size={26} />,
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
      icon: <Utensils className="text-primary group-hover:-rotate-12 transition-transform duration-500" size={26} />,
      head: "Maria Luisa U. Sousa",
      members: [
        "Joel Santos F. Quintanes",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-primary-foreground pb-16">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff9856]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse delay-1000"></div>

      <div className="container relative z-10 mx-auto px-4 py-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-widest uppercase">
            Behind the Scenes
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff9856] to-primary tracking-tight">
            Organizing Committee
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated team working tirelessly to make the <span className="text-foreground font-semibold">CSITE Colloquium 2026</span> a resounding success.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-32">

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group relative rounded-[2.5rem] p-1 shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient Wrapper */}
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out z-10"></div>

                <div className="relative bg-black/10 backdrop-blur-sm rounded-[2.4rem] p-10 h-full flex flex-col items-center text-center justify-center z-20 border border-white/10">
                  {/* Decorative background blurs inside card */}
                  <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl transform group-hover:scale-125 transition-transform duration-700"></div>

                  {/* Round Picture Frame */}
                  <div className="relative mb-8 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-md animate-pulse"></div>
                    <div className="relative p-1.5 bg-white/20 rounded-full backdrop-blur-md shadow-2xl">
                      <div className="p-1 bg-white rounded-full">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <p className="text-white/80 font-bold tracking-[0.25em] uppercase text-xs md:text-sm mb-3">
                      {leader.position}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md tracking-tight">
                      {leader.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees Grid */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
             <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 shadow-lg">
              <Users className="text-primary" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Committees</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-border/50 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transform hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Neon Glow Corner */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 group-hover:scale-150 transition-all duration-700"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary transition-all duration-500" />

                {/* Committee Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/40 relative z-10">
                  <div className="bg-primary/10 p-3.5 rounded-xl shadow-inner group-hover:bg-primary/20 group-hover:shadow-primary/30 transition-all duration-300">
                    {committee.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#ff9856] transition-all duration-300">
                    {committee.name}
                  </h3>
                </div>

                {/* Committee Head */}
                {committee.head && (
                  <div className="mb-6 relative z-10">
                    <div className="bg-secondary/40 rounded-2xl p-4 border border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1.5">
                        Committee Head
                      </p>
                      <p className="text-base font-bold text-foreground">
                        {committee.head}
                      </p>
                    </div>
                  </div>
                )}

                {/* Committee Members */}
                <div className="flex-grow relative z-10">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 pl-1">
                    Members
                  </p>
                  <ul className="space-y-3">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="group/item flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary group-hover/item:bg-primary/10 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300" />
                        </div>
                        <span className="text-sm font-medium group-hover/item:translate-x-1 transition-transform duration-300">{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-2xl rounded-[3rem] p-12 sm:p-16 shadow-2xl border border-border/60 text-center overflow-hidden group">
          {/* Dynamic background decoration */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-1000"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ff9856]/10 rounded-full blur-3xl group-hover:bg-[#ff9856]/20 group-hover:scale-110 transition-all duration-1000"></div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">Got Questions?</h3>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you need details about the schedule or want to know more about the colloquium, we're just an email away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:colloquium@csite.university.edu" 
                className="relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-white transition-all duration-500 bg-primary rounded-full hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:-translate-y-1 overflow-hidden group/btn w-full sm:w-auto"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                
                <Mail size={22} className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="relative z-10 text-lg">colloquium@csite.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}