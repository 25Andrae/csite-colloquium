import { Mail, Phone, Users } from "lucide-react";

export function OrganizingCommittee() {
  const committee = {
    chair: [
      {
        name: "Dr. Maria Santos",
        position: "Conference Chair",
        title: "Dean, College of Science and Information Technology and Engineering",
        email: "m.santos@university.edu",
        phone: "+1 (555) 123-4567",
      },
    ],
    coChairs: [
      {
        name: "Prof. Richard Johnson",
        position: "Co-Chair",
        title: "Associate Dean for Research",
        email: "r.johnson@university.edu",
        phone: "+1 (555) 123-4568",
      },
      {
        name: "Dr. Linda Martinez",
        position: "Co-Chair",
        title: "Head, Department of Computer Science",
        email: "l.martinez@university.edu",
        phone: "+1 (555) 123-4569",
      },
    ],
    technical: [
      { name: "Dr. James Wilson", role: "Technical Committee Chair", department: "Information Technology" },
      { name: "Prof. Sarah Chen", role: "Technical Reviewer", department: "Computer Science" },
      { name: "Dr. Michael Brown", role: "Technical Reviewer", department: "Engineering" },
      { name: "Prof. Emily Davis", role: "Technical Reviewer", department: "Natural Sciences" },
      { name: "Dr. Robert Garcia", role: "Technical Coordinator", department: "Mathematics" },
    ],
    program: [
      { name: "Dr. Patricia Lee", role: "Program Committee Chair", department: "Computer Science" },
      { name: "Prof. David Kim", role: "Session Coordinator", department: "Information Technology" },
      { name: "Dr. Jennifer White", role: "Abstract Review Lead", department: "Engineering" },
      { name: "Prof. Carlos Rodriguez", role: "Poster Session Coordinator", department: "Natural Sciences" },
    ],
    organizing: [
      { name: "Dr. Amanda Foster", role: "Registration Chair", department: "IT Services" },
      { name: "Mr. Thomas Anderson", role: "Logistics Coordinator", department: "Admin Office" },
      { name: "Ms. Lisa Thompson", role: "Communications Officer", department: "Public Relations" },
      { name: "Dr. Kevin Zhang", role: "Sponsorship Coordinator", department: "External Affairs" },
      { name: "Ms. Rachel Green", role: "Venue Manager", department: "Facilities" },
      { name: "Mr. Daniel Miller", role: "Technical Support Lead", department: "IT Services" },
    ],
    student: [
      { name: "Alexandra Davis", role: "Student Volunteer Coordinator" },
      { name: "Benjamin Taylor", role: "Registration Assistant" },
      { name: "Christina Moore", role: "Social Media Manager" },
      { name: "Ethan Jackson", role: "Audio-Visual Support" },
      { name: "Olivia Martinez", role: "Hospitality Coordinator" },
      { name: "Nathan Wilson", role: "Documentation Lead" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-4 text-primary text-center">Organizing Committee</h1>
        <p className="text-center text-muted-foreground mb-12">
          Meet the dedicated team behind the 2nd CSITE Research Colloquium
        </p>

        {/* Conference Chair */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Users className="text-primary" size={28} />
            </div>
            <h2 className="text-3xl text-primary">Conference Chair</h2>
          </div>

          {committee.chair.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-primary to-[#ff9856] text-white rounded-xl p-8 shadow-lg"
            >
              <div className="mb-3">
                <h3 className="text-2xl mb-2">{member.name}</h3>
                <p className="text-lg opacity-95 mb-1">{member.position}</p>
                <p className="opacity-90">{member.title}</p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Co-Chairs */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-primary">Co-Chairs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {committee.coChairs.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-border"
              >
                <div className="mb-4">
                  <h3 className="text-xl mb-2">{member.name}</h3>
                  <p className="text-primary mb-1">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={16} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Committee */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-primary">Technical Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.technical.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <h4 className="mb-2">{member.name}</h4>
                <p className="text-sm text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Program Committee */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-primary">Program Committee</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {committee.program.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <h4 className="mb-2">{member.name}</h4>
                <p className="text-sm text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizing Team */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-primary">Organizing Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.organizing.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <h4 className="mb-2">{member.name}</h4>
                <p className="text-sm text-primary mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Volunteers */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6 text-primary">Student Volunteers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.student.map((member, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-5 border border-border hover:bg-accent transition-colors"
              >
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
          <h3 className="text-2xl mb-4 text-primary">Contact the Committee</h3>
          <p className="text-muted-foreground mb-6">
            For general inquiries about the colloquium, please contact the organizing committee:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={20} />
              <span>colloquium@csite.university.edu</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={20} />
              <span>+1 (555) 123-CONF (2663)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
