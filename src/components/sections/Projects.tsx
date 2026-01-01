import { useState } from "react";
import { Github, ExternalLink, Microscope, Brain, Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Research", "Healthcare AI", "ML Systems"];

const projects = [
  {
    title: "RAG-based Chatbot System",
    description:
      "A retrieval-augmented generation chatbot leveraging LLMs for intelligent conversational AI. Built with modern vector database integration for efficient knowledge retrieval and context-aware responses.",
    tags: ["LLM", "LangChain", "Vector DB", "Python", "RAG"],
    category: "ML Systems",
    icon: MessageSquare,
    links: {
      github: "https://github.com/Mujahidul-islam-IU/RAG-Chat-bot",
    },
    highlight: true,
    featured: true,
  },
  {
    title: "Cell-specific Biomarker Identification for Intellectual Disability",
    description:
      "Single-cell RNA sequencing analysis using Seurat with PCA and UMAP for dimensionality reduction. Built PPI networks and performed ROC analysis for biomarker diagnostic evaluation.",
    tags: ["scRNA-seq", "Seurat", "PPI Networks", "Biomarkers"],
    category: "Research",
    icon: Microscope,
    links: {
      paper: "https://doi.org/10.1038/s41598-025-85162-4",
    },
    highlight: true,
  },
  {
    title: "NK Cell-based Biomarker Identification for Prostate Cancer",
    description:
      "Bulk RNA-seq and single-cell RNA-seq analyses for NK cell-specific biomarkers. Includes cell clustering, differential expression, hub gene identification, pathway enrichment, and survival analysis.",
    tags: ["scRNA-seq", "Bulk RNA-seq", "Molecular Docking", "Survival Analysis"],
    category: "Research",
    icon: Microscope,
    status: "In Preparation",
  },
  {
    title: "ML-based Staging Models for Kidney Cancer (KIRC)",
    description:
      "Applied WGCNA on TCGA datasets to identify co-expression modules. Used Lasso regression for feature selection and developed machine learning-based staging models.",
    tags: ["WGCNA", "TCGA", "Lasso", "Staging Models"],
    category: "Healthcare AI",
    icon: Brain,
    status: "In Preparation",
  },
  {
    title: "AI Agent Development with LangChain",
    description:
      "Developed prototype AI agents and conversational pipelines using LangChain, LangGraph, Llama, and Ollama. Enabled automated data retrieval and improved user engagement.",
    tags: ["LangChain", "LangGraph", "LLM", "Ollama"],
    category: "ML Systems",
    icon: Bot,
  },
  {
    title: "Dendritic Cell Biomarkers for Cardiomyopathy",
    description:
      "Single-cell RNA sequencing analysis for dendritic cell-specific biomarkers in cardiomyopathy diagnosis and prognosis using comprehensive bioinformatics approaches.",
    tags: ["scRNA-seq", "Cardiomyopathy", "Biomarkers", "Prognosis"],
    category: "Research",
    icon: Microscope,
    links: {
      paper: "https://doi.org/10.1038/s41598-024-78011-3",
    },
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects & Research
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">
            A selection of my research projects and ML systems
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`glass-card-hover rounded-xl overflow-hidden ${
                project.featured ? "project-highlight lg:col-span-1" : ""
              } ${project.highlight && !project.featured ? "ring-1 ring-primary/30" : ""}`}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    project.featured 
                      ? "bg-gradient-to-br from-primary/30 to-[hsl(210_70%_55%/0.2)]" 
                      : "bg-primary/10"
                  }`}>
                    <project.icon className={`w-6 h-6 ${project.featured ? "text-primary" : "text-primary"}`} />
                  </div>
                  <div className="flex gap-2">
                    {project.status && (
                      <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                        {project.status}
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/20 rounded-full text-primary border border-primary/30">
                        Featured
                      </span>
                    )}
                    {project.highlight && !project.featured && (
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 rounded-full text-primary border border-primary/20">
                        Published
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary/80 rounded-md text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              {project.links && (
                <div className="px-6 pb-6 pt-0 flex gap-2">
                  {project.links.github && (
                    <Button variant="default" size="sm" className="gap-2 glow-button border-0" asChild>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary/10" asChild>
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Paper
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
