import { Heart, Handshake, Mail, Mic, Users, Settings, Sparkles } from "lucide-react";
import DOST_LOGO from "../../images/DOST_LOGO.svg";
import SmartNoteLogo from "../../images/SmartNoteLogo.svg";
export function Acknowledgement() {
  // Official sponsors extracted from your content
  const sponsors = [
    {
      name: "Department of Science and Technology",
      tier: "Official Partner",
      image: DOST_LOGO, 
    },
    {
      name: "Smart Note Computer System",
      tier: "Official Partner",
      image: SmartNoteLogo,
    },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-primary-foreground pb-16">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff9856]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] animate-pulse delay-1000"></div>

      <div className="container relative z-10 mx-auto px-4 py-20 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(232,104,42,0.1)]">
            <Sparkles size={16} />
            Gratitude & Partnership
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff9856] to-primary tracking-tight">
            Acknowledgement of Appreciation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honoring the individuals, organizations, and partners whose unwavering support made the <span className="text-foreground font-semibold">2nd CSITE Research Colloquium</span> possible.
          </p>
        </div>

        {/* Message of Acknowledgement Section */}
        <section className="mb-32 max-w-5xl mx-auto">
          {/* Glassmorphic Message Card */}
          <div className="group relative bg-card/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 lg:p-20 shadow-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-primary/5">
            {/* Neon Glow Corner */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#ff9856]/10 rounded-full blur-[80px] group-hover:bg-[#ff9856]/20 transition-all duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 text-lg md:text-xl text-muted-foreground leading-relaxed selection:bg-primary/20 space-y-8">
              
              <p className="text-2xl text-foreground font-medium mb-8 flex items-center gap-3">
                <Heart className="text-primary fill-primary/20" size={32} />
                A Message of Thanks
              </p>

              <p className="leading-loose">
                On behalf of the <span className="text-foreground font-medium">2nd CSITE Research Colloquium</span>, we extend our deepest gratitude to the individuals and organizations whose dedication and support made this event a resounding success.
              </p>

              <p className="leading-loose">
                To our valued sponsors, <span className="text-primary font-bold tracking-wide">DEPARTMENT OF SCIENCE AND TECHNOLOGY IX</span> and <span className="text-primary font-bold tracking-wide">SMART NOTE COMPUTER SYSTEM</span>, your generous contributions provided the essential resources needed to foster innovation and bring this academic gathering to life. We are honored by your commitment to the advancement of research and technology.
              </p>

              <p className="leading-loose">
                To our distinguished guest speaker, <span className="text-foreground font-bold border-b-2 border-primary/30 pb-0.5">DR. RYAN EBARDO</span>, we express our sincere appreciation for sharing your invaluable knowledge and providing our attendees with profound insights that will inspire future researches.
              </p>

              <div className="bg-background/40 rounded-3xl p-8 border border-border/40 mt-10 mb-10 shadow-inner">
                <p className="text-foreground font-medium mb-6">
                  This colloquium would be nothing without the intellectual curiosity of our community. Thank you:
                </p>
                
                <ul className="space-y-6 text-base md:text-lg">
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-1">
                      <Mic size={20} />
                    </div>
                    <div>
                      <strong className="text-foreground block mb-1">Oral and Poster Presenters</strong>
                      For your hard work, rigorous inquiry, and for sharing your findings with such professionalism.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#ff9856]/10 text-[#ff9856] mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <strong className="text-foreground block mb-1">The Participants</strong>
                      For your engaging questions and active presence, which enriched every session.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-1">
                      <Settings size={20} />
                    </div>
                    <div>
                      <strong className="text-foreground block mb-1">The Working Committees</strong>
                      We recognize your tireless efforts. Your behind-the-scenes dedication—from logistics to technical coordination—ensured a seamless experience for everyone involved.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="leading-loose">
                Thank you everyone for being part of the 2nd CSITE Research Colloquium. 
              </p>

              <div className="pt-8 mt-8 border-t border-border/50">
                <p className="text-foreground/70 italic mb-2">With gratitude,</p>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9856] text-xl">
                  The 2nd CSITE Research Colloquium Organizing Committee
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Sponsors Section */}
     {/* Sponsors Section */}
<section className="mb-32 relative">
  {/* Background Glow */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-30" />
  </div>

  {/* Header */}
  <div className="relative flex items-center gap-4 mb-16 justify-center">
    <div className="relative flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent border border-primary/30 shadow-xl">
      <Handshake className="text-primary animate-pulse" size={30} />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
      Our Sponsors
    </h2>
  </div>

  {/* Sponsors Grid */}
  {/* Sponsors Grid */}
  <div className="relative grid md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
    {sponsors.map((sponsor, index) => (
      <div
        key={index}
        // ADDED h-full HERE
        className="group relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-primary/20 hover:from-primary/50 hover:to-primary/40 transition-all duration-500"
      >
        {/* Card */}
        {/* ADDED h-full HERE to force the card to stretch to the grid row height */}
        <div className="relative h-full bg-card/60 backdrop-blur-2xl rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden shadow-xl border border-border/50 group-hover:border-primary/40 transition-all duration-500">

          {/* Floating Glow */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

          {/* Logo Area */}
          {/* ADDED shrink-0 HERE so the image container height is strictly preserved */}
          <div className="relative w-full h-48 shrink-0 mb-8 flex items-center justify-center rounded-2xl overflow-hidden">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-80 group-hover:opacity-100 transition-all duration-500" />

            {sponsor.image ? (
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="relative z-10 max-w-[75%] max-h-[75%] object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              />
            ) : (
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {/* Animated Icon */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
                  <Handshake
                    className="relative text-primary/70 group-hover:text-primary transition-all duration-500 group-hover:scale-110"
                    size={50}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Better Placeholder Text */}
                <p className="text-sm text-muted-foreground/70 font-medium">
                  Sponsor Logo
                </p>
              </div>
            )}

            {/* Shine Sweep Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[120%] transition-all duration-1000" />
            </div>
          </div>

          {/* Sponsor Info */}
          {/* Wrapped in flex-1 flex-col justify-end to push it to the bottom neatly */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-3">
              {sponsor.tier}
            </p>

            <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
              {sponsor.name}
            </h3>
          </div>

          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Call to Action Footer */}
        <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-2xl rounded-[3rem] p-12 sm:p-16 shadow-2xl border border-border/60 text-center overflow-hidden group max-w-5xl mx-auto">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-1000 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">Become a Partner</h3>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Interested in supporting future research colloquiums and connecting with the academic community? We'd love to discuss partnership opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=csite@adzu.edu.ph"
                className="relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-white transition-all duration-500 bg-primary rounded-full hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(232,104,42,0.4)] hover:-translate-y-1 overflow-hidden group/btn w-full sm:w-auto"
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                
                <Mail size={22} className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="relative z-10 text-lg">Partner with CSITE</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}