import { Mail, MapPin } from "lucide-react";
import MotionSocialLink from "../motion/MotionSocialLink";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-display font-semibold mb-6">
          <span className="highlight-text">Contact Information</span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              <Mail size={18} />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Email</h4>
              <a
                href="mailto:hafizanasahmed8@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hafizanasahmed8@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Location</h4>
              <p className="text-muted-foreground">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-display font-semibold mb-4">
          Let&apos;s Connect
        </h3>
        <p className="text-muted-foreground mb-4">
          Follow me on social media or reach out directly. I&apos;m always open to new opportunities and collaborations.
        </p>
        <div className="flex gap-3">
          <MotionSocialLink href="https://www.linkedin.com/in/anas-ahmed01">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </MotionSocialLink>
          <MotionSocialLink href="https://github.com/AnasAhmed001">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </MotionSocialLink>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
