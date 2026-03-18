import { 
  Mail, 
  Phone, 
  Award, 
  Users, 
  FileText, 
  Mic, 
  Megaphone, 
  CalendarDays, 
  Camera, 
  Boxes 
} from "lucide-react";

export function OrganizingCommittee() {
  const leadership = [
    {
      name: "Janet Tan",
      position: "Overall Chair",
      gradient: "from-primary to-[#ff9856]",
    },
    {
      name: "Fe Grace Cañedo",
      position: "Co-Chair",
      gradient: "from-[#ff9856] to-[#ff7a2d]", // Slightly different gradient for hierarchy
    },
  ];

  const committees = [
    {
      name: "Secretariat",
      icon: <FileText className="text-primary" size={24} />,
      head: "Precious T. Opinion",
      members: [
        "Andrae Manguilimotan",
        "Jomari Quenamot",
        "Lyka Quibo Quibo",
        "Queendel Vanee Garcia",
        "Jessibel Dingcong",
      ],
    },
    {
      name: "Facilitators & Moderators",
      icon: <Mic className="text-primary" size={24} />,
      head: "Maureen Olive Gallardo",
      members: [
        "Katherine Sinsuan",
        "Belino Rosagaron",
        "Jozeff Papa",
        "Hadi Nograles",
      ],
    },
    {
      name: "Communications & Finance",
      icon: <Megaphone className="text-primary" size={24} />,
      head: "Dr. Jocelyn Partosa",
      members: [
        "Janet Tan",
        "Fe Grace Canedo",
        "John Frederick Fernando",
        "Deanmark Canedo",
      ],
    },
    {
      name: "Program",
      icon: <CalendarDays className="text-primary" size={24} />,
      head: "Kreanne F. Diaz",
      members: [
        "Queendel Vanee Garcias",
        "Ashley Marie Valdenibro",
      ],
    },
    {
      name: "Documentation",
      icon: <Camera className="text-primary" size={24} />,
      head: "Clairizza Arcillas",
      members: [
        "Rexor Miravite",
        "Carl Joseph Jaldon",
        "Jewel Jesus Escalderon",
        "Frantz Merrill Sucro",
      ],
    },
    {
      name: "Logistics",
      icon: <Boxes className="text-primary" size={24} />,
      head: null, // No specific head was provided
      members: [
        "Carmellie Plaza",
        "Levi Delos Reyes",
        "Shalimar Jaji",
        "Aleekhazer Jausan",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Organizing Committee
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team working behind the scenes to make the 2nd CSITE Research Colloquium a success.
          </p>
        </div>

        {/* Leadership Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Award className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl font-semibold text-primary">Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${leader.gradient} text-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-white/80 font-medium tracking-wider uppercase text-sm mb-2">
                      {leader.position}
                    </p>
                    <h3 className="text-3xl font-bold mb-1">{leader.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Users className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl font-semibold text-primary">Committees</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:border-primary/30 transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Committee Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <div className="bg-primary/5 p-2 rounded-lg">
                    {committee.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {committee.name}
                  </h3>
                </div>

                {/* Committee Head */}
                {committee.head && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Committee Head
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      {committee.head}
                    </p>
                  </div>
                )}

                {/* Committee Members */}
                <div className="flex-grow">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                    Members
                  </p>
                  <ul className="space-y-2">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 sm:p-10 shadow-inner border border-border/50 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions about the colloquium? Feel free to reach out to the organizing committee. We are here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-border">
              <Mail className="text-primary" size={20} />
              <span className="font-medium text-foreground">colloquium@csite.university.edu</span>
            </div>
            {/* If you don't have a phone number, you can safely remove this block */}
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-border">
              <Phone className="text-primary" size={20} />
              <span className="font-medium text-foreground">+1 (555) 123-CONF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}