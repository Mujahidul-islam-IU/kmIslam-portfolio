import { Mail, Phone, MapPin, Github, Linkedin, FileText, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mujahid.iu.cse@gmail.com",
    href: "mailto:mujahid.iu.cse@gmail.com",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1705 259966",
    href: "tel:+8801705259966",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    href: null,
    color: "pink",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mujahidul-islam-IU",
    color: "from-primary to-primary",
    hoverBg: "hover:bg-primary/15",
    hoverText: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kh-mujahidul-islam",
    color: "from-[hsl(210_70%_55%)] to-[hsl(210_70%_45%)]",
    hoverBg: "hover:bg-[hsl(210_70%_55%/0.15)]",
    hoverText: "hover:text-[hsl(210_70%_60%)]",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=VLgqR2AAAAAJ",
    color: "from-[hsl(160_60%_45%)] to-[hsl(160_60%_40%)]",
    hoverBg: "hover:bg-[hsl(160_60%_45%/0.15)]",
    hoverText: "hover:text-[hsl(160_60%_50%)]",
  },
  {
    icon: FileText,
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Kh-Mujahidul-Islam?ev=hdr_xprf",
    color: "from-[hsl(262_55%_60%)] to-[hsl(262_55%_50%)]",
    hoverBg: "hover:bg-[hsl(262_55%_60%/0.15)]",
    hoverText: "hover:text-[hsl(262_55%_65%)]",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[hsl(210_70%_55%/0.08)] blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            Open for PhD opportunities, research collaborations, and industry positions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-[hsl(210_70%_55%)]" />
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 group">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110
                        ${item.color === 'primary' ? 'bg-primary/15 text-primary group-hover:bg-primary/25' : ''}
                        ${item.color === 'cyan' ? 'bg-[hsl(210_70%_55%/0.15)] text-[hsl(210_70%_60%)] group-hover:bg-[hsl(210_70%_55%/0.25)]' : ''}
                        ${item.color === 'pink' ? 'bg-[hsl(262_55%_60%/0.15)] text-[hsl(262_55%_65%)] group-hover:bg-[hsl(262_55%_60%/0.25)]' : ''}
                      `}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[hsl(330_85%_60%/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Download My CV</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and publications.
                  </p>
                  <Button className="w-full gap-2 glow-button text-primary-foreground border-0 rounded-xl py-6 text-lg" asChild>
                    <a href="/KhMujahidulIslam_CV.pdf" download>
                      <Download className="w-5 h-5" />
                      Download CV (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl h-full">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 rounded-full bg-gradient-to-b from-[hsl(210_70%_55%)] to-[hsl(160_60%_45%)]" />
                  Connect With Me
                </h3>
                <p className="text-muted-foreground mb-8">
                  Follow my research journey and connect with me on professional platforms.
                </p>
                
                <div className="grid gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/50 ${link.hoverBg} ${link.hoverText} transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-sm text-muted-foreground">View Profile</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;