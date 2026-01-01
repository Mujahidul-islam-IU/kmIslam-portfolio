import { ExternalLink, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title:
      "Identification of cell-specific biomarkers for intellectual disability via single-cell RNA sequencing and transcriptomic bioinformatics approaches",
    authors:
      "KM Islam, MH Rahman, MA Hossain, M Khan, MM Rahman, PS Apu, MI Hasan, SA Ansari, & M Humayoo",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-025-85162-4",
    impactFactor: "3.9",
    year: "2025",
    summary:
      "Identified cell-specific biomarkers for intellectual disability using single-cell RNA sequencing and comprehensive bioinformatics analysis including PPI networks and ROC analysis.",
    isFirstAuthor: true,
  },
  {
    title:
      "Uncovering dendritic cell-specific biomarkers for diagnosis and prognosis of cardiomyopathy using single-cell RNA sequencing and comprehensive bioinformatics analysis",
    authors:
      "MM Rahman, MH Rahman, MA Hossain, KM Islam, PS Apu, M Khan, MG Kibria, SA Ansari, & M Humayoo",
    journal: "Scientific Reports",
    doi: "10.1038/s41598-024-78011-3",
    impactFactor: "3.9",
    year: "2024",
    summary:
      "Discovered dendritic cell-specific biomarkers for cardiomyopathy diagnosis and prognosis through single-cell RNA sequencing analysis.",
  },
  {
    title:
      "Exploring the therapeutic potential of Evodia rutaecarpa in early-onset pancreatic cancer: A network pharmacology and molecular docking approach",
    authors:
      "MI Hasan, KM Islam, MN Hasan, MM Rahman, MH Rahman, S Moon, MN Park, HN Kang, & B Kim",
    journal: "Current Pharmaceutical Design",
    doi: "10.2174/0113816128356225250305081937",
    impactFactor: "2.8",
    year: "2025",
    summary:
      "Investigated therapeutic compounds using network pharmacology and molecular docking for pancreatic cancer treatment.",
  },
  {
    title:
      "Integrative analysis of single-cell and bulk RNA sequencing data reveals T-cell specific biomarkers for diagnosis and assessment of celiac disease: A comprehensive bioinformatics approach",
    authors:
      "M Khan, MA Hossain, KM Islam, MM Rahman, PS Apu, IA Ansari, SA Ansari, & MH Rahman",
    journal: "Current Bioinformatics",
    doi: "10.2174/0115748936353313250123071744",
    impactFactor: "2.9",
    year: "2025",
    summary:
      "Identified T-cell specific biomarkers for celiac disease through integrative single-cell and bulk RNA-seq analysis.",
  },
];

const manuscriptsInPrep = [
  {
    title:
      "NK cell-based Biomarker Identification of Prostate Cancer using Single-cell and Bulk RNA Sequencing",
    description:
      "Conducting comprehensive RNA-seq analyses to identify NK cell-specific biomarkers including molecular docking and survival analysis.",
  },
  {
    title:
      "Machine Learning-based Staging Models for Kidney Renal Clear Cell Carcinoma using WGCNA",
    description:
      "Developing ML staging models using WGCNA on TCGA datasets with Lasso regression for feature selection.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-[hsl(210_70%_55%)] mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">
            Peer-reviewed research in high-impact journals
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 rounded-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {pub.isFirstAuthor && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        <Award className="w-3 h-3" />
                        First Author
                      </span>
                    )}
                    <span className="text-xs font-medium px-2 py-1 bg-secondary text-muted-foreground rounded-full">
                      IF: {pub.impactFactor}
                    </span>
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>

                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>

                  <p className="text-sm font-medium text-primary mb-3">{pub.journal}</p>

                  <p className="text-sm text-muted-foreground mb-4">{pub.summary}</p>

                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      DOI: {pub.doi}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manuscripts in Preparation */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Manuscripts in Preparation
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {manuscriptsInPrep.map((manuscript, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-dashed border-border bg-secondary/30"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {manuscript.title}
                </h4>
                <p className="text-sm text-muted-foreground">{manuscript.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
