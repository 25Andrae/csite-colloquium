import { CheckCircle, Star } from "lucide-react";
import { useState } from "react";

export function EvaluationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState({
    overallExperience: 0,
    contentQuality: 0,
    speakers: 0,
    organization: 0,
    venue: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, this would send data to a backend
  };

  const RatingStars = ({ value, onChange, name }) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="transition-colors hover:scale-110 transform"
          >
            <Star
              size={32}
              className={star <= value ? "fill-[#e8682a] text-[#e8682a]" : "text-gray-300"}
            />
          </button>
        ))}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-12 shadow-lg border border-border text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary" size={48} />
            </div>
            <h2 className="text-3xl mb-4 text-primary">Thank You!</h2>
            <p className="text-muted-foreground mb-8">
              Your feedback has been successfully submitted. We appreciate your time and input to
              help us improve future colloquiums.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4 text-primary">Evaluation Form</h1>
          <p className="text-muted-foreground">
            Your feedback is valuable to us. Please take a few minutes to evaluate the colloquium.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-border">
          {/* Personal Information */}
          <section className="mb-8">
            <h3 className="text-xl mb-6 text-primary">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="affiliation" className="block mb-2">
                  Affiliation
                </label>
                <select
                  id="affiliation"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your affiliation</option>
                  <option value="faculty">Faculty Member</option>
                  <option value="graduate">Graduate Student</option>
                  <option value="undergraduate">Undergraduate Student</option>
                  <option value="external">External Participant</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Rating Questions */}
          <section className="mb-8">
            <h3 className="text-xl mb-6 text-primary">Rate Your Experience</h3>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <label className="block mb-3">
                  Overall Experience
                </label>
                <RatingStars
                  name="overallExperience"
                  value={rating.overallExperience}
                  onChange={(val) => setRating({ ...rating, overallExperience: val })}
                />
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <label className="block mb-3">
                  Quality of Research Content
                </label>
                <RatingStars
                  name="contentQuality"
                  value={rating.contentQuality}
                  onChange={(val) => setRating({ ...rating, contentQuality: val })}
                />
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <label className="block mb-3">
                  Plenary Speakers & Presentations
                </label>
                <RatingStars
                  name="speakers"
                  value={rating.speakers}
                  onChange={(val) => setRating({ ...rating, speakers: val })}
                />
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <label className="block mb-3">
                  Organization & Management
                </label>
                <RatingStars
                  name="organization"
                  value={rating.organization}
                  onChange={(val) => setRating({ ...rating, organization: val })}
                />
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <label className="block mb-3">
                  Venue & Facilities
                </label>
                <RatingStars
                  name="venue"
                  value={rating.venue}
                  onChange={(val) => setRating({ ...rating, venue: val })}
                />
              </div>
            </div>
          </section>

          {/* Multiple Choice Questions */}
          <section className="mb-8">
            <h3 className="text-xl mb-6 text-primary">Additional Feedback</h3>
            <div className="space-y-6">
              <div>
                <label className="block mb-3">
                  What was the most valuable aspect of the colloquium?
                </label>
                <div className="space-y-2">
                  {[
                    "Plenary sessions",
                    "Oral presentations",
                    "Poster presentations",
                    "Networking opportunities",
                    "Panel discussions",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <input type="radio" name="valuable" value={option} className="accent-primary" />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-3">
                  Would you attend future CSITE research colloquiums?
                </label>
                <div className="space-y-2">
                  {["Definitely yes", "Probably yes", "Not sure", "Probably not", "Definitely not"].map(
                    (option) => (
                      <label key={option} className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-accent transition-colors cursor-pointer">
                        <input type="radio" name="attend" value={option} className="accent-primary" />
                        <span className="text-sm">{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Open-ended Questions */}
          <section className="mb-8">
            <h3 className="text-xl mb-6 text-primary">Comments & Suggestions</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="strengths" className="block mb-2">
                  What were the strengths of the colloquium?
                </label>
                <textarea
                  id="strengths"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="improvements" className="block mb-2">
                  What areas could be improved?
                </label>
                <textarea
                  id="improvements"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Share your suggestions..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="topics" className="block mb-2">
                  What topics would you like to see in future colloquiums?
                </label>
                <textarea
                  id="topics"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Suggest topics..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="additional" className="block mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="additional"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Any other feedback..."
                ></textarea>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-[#ff9856] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Submit Evaluation
            </button>
          </div>
        </form>

        {/* Privacy Note */}
        <div className="mt-6 bg-secondary rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Privacy Notice:</strong> Your responses will be kept confidential and used only
            for improving future colloquiums. Personal information is optional and will not be shared
            with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}
