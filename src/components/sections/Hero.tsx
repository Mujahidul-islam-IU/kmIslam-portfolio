import { ArrowDown, Download, Mail, Github, Linkedin, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0 relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/15 blur-3xl float" />
        <div className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-[hsl(210_70%_55%/0.1)] blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-[20%] w-64 h-64 rounded-full bg-[hsl(190_70%_50%/0.08)] blur-3xl float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-20 h-20 border-2 border-primary/20 rotate-45 rounded-lg hidden lg:block" />
        <div className="absolute top-64 left-32 w-8 h-8 bg-primary/30 rounded-full hidden lg:block" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-[hsl(210_70%_55%/0.3)] rounded-full hidden lg:block" />
      </div>
      
      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 animate-fade-in-up backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[hsl(160_60%_45%)] animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Open to PhD & Research Opportunities
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kh Mujahidul
                <br />
                <span className="gradient-text">Islam</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold">
                <span className="text-primary">ML Engineer</span>
                <span className="text-muted-foreground"> | </span>
                <span className="text-[hsl(210_70%_60%)]">AI & Bioinformatics Researcher</span>
              </p>
            </div>

            {/* Hero Description */}
            <p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              AI and machine learning engineer with a strong research background in
              predictive modeling and bioinformatics. Experienced in building ML
              pipelines, training models, and developing practical AI systems with
              real-world impact.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button size="lg" className="gap-2 glow-button text-primary-foreground border-0 rounded-xl px-6" asChild>
                <a href="/KhMujahidulIslam_CV.pdf" download>
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-xl px-6 border-2 border-primary/40 hover:border-primary hover:bg-primary/10 text-foreground" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
              <Button size="lg" variant="ghost" className="gap-2 rounded-xl px-6 hover:bg-primary/10 hover:text-primary text-muted-foreground" onClick={scrollToProjects}>
                <FileText className="w-5 h-5" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <span className="text-sm font-medium text-muted-foreground">Connect:</span>
              <a
                href="https://github.com/Mujahidul-islam-IU"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-primary/15 hover:text-primary transition-all duration-300 hover:scale-110 text-muted-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kh-mujahidul-islam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-[hsl(210_70%_55%/0.15)] hover:text-[hsl(210_70%_60%)] transition-all duration-300 hover:scale-110 text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=VLgqR2AAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-[hsl(160_60%_45%/0.15)] hover:text-[hsl(160_60%_50%)] transition-all duration-300 hover:scale-110 text-muted-foreground"
                aria-label="Google Scholar"
              >
                <GraduationCap className="w-5 h-5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Kh-Mujahidul-Islam?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-[hsl(262_55%_60%/0.15)] hover:text-[hsl(262_55%_65%)] transition-all duration-300 hover:scale-110 text-muted-foreground"
                aria-label="ResearchGate"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* Gradient glow behind image */}
              <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" 
                   style={{ background: 'linear-gradient(135deg, hsl(185 65% 45% / 0.4) 0%, hsl(210 70% 55% / 0.3) 100%)' }} />
              
              {/* Decorative rings */}
              <div className="absolute top-8 -right-8 w-32 h-32 border-2 border-primary/30 rounded-full hidden lg:block pulse-glow" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[hsl(210_70%_55%/0.3)] rounded-full hidden lg:block" />
              
              {/* Main Image */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden glass-card border-2 border-primary/20">
                <img
                  src={heroPortrait}
                  alt="Kh Mujahidul Islam - ML Engineer & AI Researcher"
                  className="w-full h-full object-cover object-center"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-xs font-medium text-muted-foreground">Scroll</span>
        <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
