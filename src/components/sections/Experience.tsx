import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Intern Engineer - AI Agent Development",
    organization: "Next Solution Lab",
    location: "Mirpur DOHS, Dhaka",
    period: "Jul 2025 – Present",
    description: [
      "Contributed to the development of prototype AI agents and conversational pipelines with LangChain, LangGraph, Llama, and Ollama",
      "Implemented model training and fine-tuning workflows; prepared datasets and evaluation scripts",
      "Packaged prototypes as lightweight services (Flask/Streamlit) for internal demonstration",
      "Documented integration points and created demo notebooks for engineering team handover",
    ],
  },
  {
    type: "research",
    title: "Research Assistant",
    organization: "CABAIR (Center for Advanced Bioinformatics and AI Research)",
    location: "Islamic University, Bangladesh",
    period: "2022 – Present",
    description: [
      "Conducted single-cell RNA sequencing (scRNA-seq) analysis using Seurat for dimensionality reduction and clustering",
      "Built protein–protein interaction networks and performed ROC analysis for biomarker evaluation",
      "Applied WGCNA on TCGA datasets to identify co-expression modules",
      "Developed machine learning-based staging models using Lasso regression for feature selection",
    ],
  },
];

const education = {
  degree: "Bachelor of Science (B.Sc.)",
  field: "Computer Science and Engineering",
  institution: "Islamic University, Bangladesh",
  faculty: "Faculty of Engineering and Technology",
  cgpa: "3.27 / 4",
  credits: "160 Credit Hours",
  graduation: "Feb 2025",
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">
            My journey through research, industry, and academia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline - Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-border" />

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline Dot */}
                    <div className="timeline-dot absolute left-0 top-1.5" />

                    <div className="glass-card-hover p-6 rounded-xl">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium">{exp.organization}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="glass-card-hover p-6 rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-1">
                {education.degree}
              </h4>
              <p className="text-primary font-medium mb-1">{education.field}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {education.institution}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {education.faculty}
              </p>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CGPA</span>
                  <span className="font-semibold text-foreground">{education.cgpa}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Credits</span>
                  <span className="font-medium text-foreground">{education.credits}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Graduation</span>
                  <span className="font-medium text-foreground">{education.graduation}</span>
                </div>
              </div>
            </div>

            {/* IELTS Score */}
            <div className="glass-card-hover p-6 rounded-xl mt-4">
              <h4 className="font-semibold text-foreground mb-4">IELTS Academic</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <p className="text-xl font-bold text-primary">8.0</p>
                  <p className="text-muted-foreground">Listening</p>
                </div>
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <p className="text-xl font-bold text-primary">7.0</p>
                  <p className="text-muted-foreground">Reading</p>
                </div>
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <p className="text-xl font-bold text-primary">6.5</p>
                  <p className="text-muted-foreground">Speaking</p>
                </div>
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <p className="text-xl font-bold text-primary">6.0</p>
                  <p className="text-muted-foreground">Writing</p>
                </div>
              </div>
              <div className="mt-4 text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-primary">7.0</p>
                <p className="text-sm text-muted-foreground">Overall Band</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
