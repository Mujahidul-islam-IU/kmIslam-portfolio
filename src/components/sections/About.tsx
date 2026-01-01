import { GraduationCap, Microscope, Code2, Brain } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building predictive models and ML pipelines for real-world applications",
  },
  {
    icon: Microscope,
    title: "Bioinformatics",
    description: "Single-cell RNA sequencing analysis and biomarker identification",
  },
  {
    icon: Code2,
    title: "AI Systems",
    description: "Developing LLM-powered agents and conversational AI prototypes",
  },
  {
    icon: GraduationCap,
    title: "Research",
    description: "Published researcher with 4+ papers in high-impact journals",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AI and machine learning engineer with a passion for bridging
              computational methods with biological research. Currently completing my
              B.Sc. in Computer Science and Engineering at Islamic University, Bangladesh,
              I've developed expertise in both traditional ML techniques and cutting-edge
              bioinformatics approaches.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Research Assistant at CABAIR (Center for Advanced Bioinformatics and
              AI Research), I've contributed to groundbreaking work in single-cell RNA
              sequencing analysis, identifying cell-specific biomarkers for conditions
              ranging from intellectual disability to prostate cancer. My research has
              been published in Scientific Reports and other peer-reviewed journals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond academia, I've gained industry experience developing AI agents and
              conversational pipelines using LangChain, LangGraph, and various LLM
              frameworks. I'm actively seeking PhD opportunities to further explore
              the intersection of AI and biomedical research.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Years Research</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-2xl md:text-3xl font-bold text-primary">7.0</p>
                <p className="text-sm text-muted-foreground">IELTS Score</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card-hover p-6 rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
