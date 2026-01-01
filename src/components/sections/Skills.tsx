import { Code, Brain, Microscope, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "primary",
    skills: ["Python", "R", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: Brain,
    color: "blue",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "XGBoost",
      "LightGBM",
    ],
  },
  {
    title: "Bioinformatics & Healthcare AI",
    icon: Microscope,
    color: "green",
    skills: [
      "scRNA-seq Analysis",
      "WGCNA",
      "Microarray Analysis",
      "Virtual Screening",
      "Molecular Docking",
      "Survival Analysis",
      "Gene Expression",
      "Pathway Enrichment",
    ],
  },
  {
    title: "Tools, Frameworks & Databases",
    icon: Wrench,
    color: "purple",
    skills: [
      "Seurat",
      "Discovery Studio",
      "PyMol",
      "Cytoscape",
      "BiocManager",
      "LangChain",
      "LangGraph",
      "Flask",
      "Streamlit",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Databases & Resources",
    icon: Database,
    color: "cyan",
    skills: [
      "PostgreSQL",
      "NCBI/GEO",
      "TCGA",
      "UniProt",
      "PDB",
      "Ensembl",
      "Vector DBs",
    ],
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    primary: {
      bg: "hover:bg-primary/15",
      text: "group-hover:text-primary",
      border: "group-hover:border-primary/40",
      iconBg: "bg-primary/15 text-primary",
    },
    blue: {
      bg: "hover:bg-[hsl(210_70%_55%/0.15)]",
      text: "group-hover:text-[hsl(210_70%_60%)]",
      border: "group-hover:border-[hsl(210_70%_55%/0.4)]",
      iconBg: "bg-[hsl(210_70%_55%/0.15)] text-[hsl(210_70%_60%)]",
    },
    green: {
      bg: "hover:bg-[hsl(160_60%_45%/0.15)]",
      text: "group-hover:text-[hsl(160_60%_50%)]",
      border: "group-hover:border-[hsl(160_60%_45%/0.4)]",
      iconBg: "bg-[hsl(160_60%_45%/0.15)] text-[hsl(160_60%_50%)]",
    },
    purple: {
      bg: "hover:bg-[hsl(262_55%_60%/0.15)]",
      text: "group-hover:text-[hsl(262_55%_65%)]",
      border: "group-hover:border-[hsl(262_55%_60%/0.4)]",
      iconBg: "bg-[hsl(262_55%_60%/0.15)] text-[hsl(262_55%_65%)]",
    },
    cyan: {
      bg: "hover:bg-[hsl(190_70%_50%/0.15)]",
      text: "group-hover:text-[hsl(190_70%_55%)]",
      border: "group-hover:border-[hsl(190_70%_50%/0.4)]",
      iconBg: "bg-[hsl(190_70%_50%/0.15)] text-[hsl(190_70%_55%)]",
    },
  };
  return colorMap[color] || colorMap.primary;
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        {/* Skills Grid - Card-based categories with skill chips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className="group skill-category-card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${colors.iconBg} flex items-center justify-center transition-all duration-300`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-chip ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills as compact badges */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Additional Technologies & Methods
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AutoDock Vina",
              "PyRx",
              "DAVID",
              "Network Analyst",
              "Biopython",
              "Mendeley",
              "EndNote",
              "LaTeX",
              "Ollama",
              "Llama",
              "RAG Systems",
              "API Development",
            ].map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
