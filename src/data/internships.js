const internships = [
  {
    id: "1",
    title: "AI Research Intern",
    company: "DeepLab",
    location: "Remote",
    type: "Full-time",
    duration: "3 months",
    stipend: "₹40,000 / mo",
    category: "AI", // ✅ added
    tags: ["AI", "Research", "Python"],
    short: "Work on generative models and publishable results.",
    long: "You will research generative models, run experiments, build prototypes and draft reports. Collaborate with the research team. Weekly demos.",
  },
  {
    id: "2",
    title: "NLP Intern",
    company: "LangWorks",
    location: "Bengaluru",
    type: "On-site",
    duration: "2 months",
    stipend: "₹30,000 / mo",
    category: "NLP", // ✅ added
    tags: ["NLP", "Transformers"],
    short: "Build NLP pipelines for product features.",
    long: "Develop pipelines for text classification, information extraction, and model deployment in production.",
  },
  {
    id: "3",
    title: "CV Intern",
    company: "VisioTech",
    location: "Remote",
    type: "Hybrid",
    duration: "4 months",
    stipend: "₹35,000 / mo",
    category: "CV", // ✅ added
    tags: ["CV", "PyTorch"],
    short: "Object detection & tracking projects.",
    long: "Implement detection & tracking pipelines, annotate datasets, improve model accuracy and inference speed.",
  },
  {
    id: "4",
    title: "Recommender Systems Intern",
    company: "RecSys Co",
    location: "Mumbai",
    type: "Remote",
    duration: "3 months",
    stipend: "₹25,000 / mo",
    category: "AI", // ✅ closest match since it's ML/AI
    tags: ["Recsys", "Ranking", "Python"],
    short: "Work on personalization and ranking.",
    long: "Design and evaluate ranking models, A/B test offline, and collaborate with product teams.",
  },
];

export default internships;
