import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12 h-[400px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHJlc2VhcmNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA4MDc2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Research Colloquium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8682a]/90 to-[#ff9856]/90 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">2nd CSITE Research Colloquium 2026</h1>
            <p className="text-xl opacity-95">Advancing Research Excellence in Science, IT & Engineering</p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center mb-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Calendar className="text-primary" size={24} />
            </div>
            <h3 className="ml-3">Date & Time</h3>
          </div>
          <p className="text-muted-foreground">March 15-16, 2026</p>
          <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center mb-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="ml-3">Venue</h3>
          </div>
          <p className="text-muted-foreground">CSITE Conference Hall</p>
          <p className="text-muted-foreground">Main Campus Building</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center mb-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="ml-3">Participants</h3>
          </div>
          <p className="text-muted-foreground">200+ Researchers</p>
          <p className="text-muted-foreground">Faculty & Students</p>
        </div>
      </div>

      {/* About Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl mb-6 text-primary">About the Colloquium</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The 2nd CSITE Research Colloquium is a premier academic gathering that brings together
              researchers, faculty members, and students from the College of Science and Information
              Technology and Engineering to share their groundbreaking research findings and innovations.
            </p>
            <p>
              This year's colloquium focuses on fostering collaboration, knowledge exchange, and
              highlighting the cutting-edge research being conducted across various disciplines within
              our college, including Computer Science, Information Technology, Engineering, and Natural
              Sciences.
            </p>
            <p>
              The event features plenary sessions, oral presentations, poster presentations, and
              networking opportunities designed to inspire future research collaborations and academic
              excellence.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6 text-primary">Colloquium Objectives</h2>
          <div className="space-y-4">
            <div className="bg-secondary rounded-lg p-4">
              <h4 className="mb-2 text-primary">Showcase Research Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Present innovative research findings from faculty and students across CSITE disciplines.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h4 className="mb-2 text-primary">Foster Collaboration</h4>
              <p className="text-muted-foreground text-sm">
                Create opportunities for interdisciplinary research partnerships and knowledge sharing.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h4 className="mb-2 text-primary">Develop Research Skills</h4>
              <p className="text-muted-foreground text-sm">
                Provide a platform for students and early-career researchers to present their work.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h4 className="mb-2 text-primary">Build Academic Networks</h4>
              <p className="text-muted-foreground text-sm">
                Connect researchers with potential collaborators and mentors within the academic community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-[#ff9856] rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl mb-4">Join Us in Celebrating Research Excellence</h2>
        <p className="mb-6 text-lg opacity-95">
          Be part of an inspiring academic gathering that pushes the boundaries of knowledge
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
