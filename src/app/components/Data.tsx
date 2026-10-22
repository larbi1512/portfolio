// data.tsx
// All site content lives here. Components only handle layout.

export interface Link {
    label: string;
    href: string;
}

export const profile = {
    name: 'Larbi Said Chikh',
    // How the name appears in author lists, so it can be highlighted
    authorName: 'L. Said Chikh',
    role: 'AI Engineer & Researcher · LLM Agents, NLP & Evaluation',
    location: 'Algiers, Algeria',
    email: 'larbisck@gmail.com',
    phone: '+213 553 988 691',
    cv: '/Larbi_Said_Chikh_CV_research.pdf',
    lastUpdated: 'October 2026',
};

export const profileLinks: Link[] = [
    { label: 'CV', href: profile.cv },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=150I-x8AAAAJ' },
    { label: 'GitHub', href: 'https://github.com/larbi1512' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/larbi-saidchikh-0621b0224/' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Larbi-Said-Chikh' },
];

export const footerLinks: Link[] = [
    { label: 'Kaggle', href: 'https://www.kaggle.com/larbisck' },
    { label: 'X', href: 'https://x.com/larbisaidchikh' },
];

export const about: string[] = [
    "I work on agentic AI and large language models, and networking. What I enjoy most is getting agents to do real work on real systems, configuring, deploying and repairing. I have built agent runtimes, RAG systems, and live telemetry pipelines",
    "I'm always up for research collaborations. If you're working on agents, LLMs or networks and want to trade ideas or build something together, drop me an email.",
];

export const interests = [
    'Agentic AI', 'LLM Agents', 'RL environments',
    'tool use',
    'verification & evaluation',
    'benchmark & reward design',
    'efficient inference',
];

export const news = [
    { date: '2026', text: 'Our paper on agentic 5G Core orchestration was accepted at CNSM 2026.' },
    { date: 'Jun 2026', text: 'Defended my MSc thesis on agentic AI for telco cloud orchestration (ENSIA × EURECOM).' },
    { date: 'Apr 2026', text: 'Joined PrevAI Health as an AI engineer (part-time).' },
    { date: 'Dec 2025', text: 'Our paper on Arabic children\'s story generation appeared at the Muslims in ML workshop, NeurIPS 2025.' },
    { date: 'Nov 2025', text: 'Started my MSc thesis at EURECOM on multi-agent LLM orchestration.' },
];

export interface Publication {
    title: string;
    authors?: string;
    venue: string;
    note?: string;
    summary: string;
    links: Link[];
}

export const publications: Publication[] = [
    {
        title: 'An Agentic AI Framework for Cloud-Native 5G Core Orchestration',
        authors: 'L. Said Chikh, A. Mekrache, A. Cheriet, A. Ksentini',
        venue: 'CNSM 2026',
        note: 'Accepted',
        summary: 'Multi-agent LLM framework for autonomous deployment and self-healing of a 5G Core on Kubernetes.',
        links: [
            { label: 'Code', href: 'https://github.com/larbi1512/fyp-telco-cloud-agentic-ai' },
        ],
    },
    {
        title: "Crafting Culturally Aligned Narratives: Large Language Models for Arabic Children's Story Generation",
        authors: 'H. Boukhalfa, S. Mani, L. Said Chikh',
        venue: 'MusIML @ NeurIPS 2025',
        note: 'Workshop paper',
        summary: '714-story annotated SFT dataset (κ = 0.79–0.84), LoRA fine-tuning of four open LLMs (7B–13B) and Gemini 2.0, evaluated with rule-based metrics and a panel of 5 educators (ICC = 0.85).',
        links: [
            { label: 'Paper', href: 'https://openreview.net/pdf/0d48c59ac01a1d64018e57b4992fd497341553f8.pdf' },
            { label: 'Slides', href: 'https://neurips.cc/media/neurips-2025/Slides/133027.pdf' },
            { label: 'Dataset', href: 'https://www.kaggle.com/datasets/larbisck/arabic-stories-dataset' },
            { label: 'ResearchGate', href: "https://www.researchgate.net/publication/398044884_Crafting_Culturally_Aligned_Narratives_Large_Language_Models_for_Arabic_Children's_Story_Generation" },
        ],
    },
    {
        title: 'Towards Semantic Understanding of Classical Arabic Poetry: Retrieval, Explanations, and Evaluation',
        authors: 'O. F. Zouak, S. Mani, L. Said Chikh, R. A. Ouahioune',
        venue: 'Preprint, 2025',
        summary: 'Uses LLM-generated explanations to improve embeddings for semantic retrieval of classical Arabic poetry, with evaluation by traditional metrics and LLM judges.',
        links: [],
    },
];

export interface Experience {
    role: string;
    org: string;
    place?: string;
    date: string;
    points: string[];
}

export const experience: Experience[] = [
    {
        role: 'AI Engineer (part-time)',
        org: 'PrevAI Health',
        date: 'Apr 2026 – present',
        points: [
            'Refactored the scaffolding of a production LLM data-science agent, then ablated prompt-engineering and prompt-compression variants to cut its context while preserving output quality.',
            'Built a reproducible analysis pipeline (custom parser, fully executed notebooks) over the PH-LLM fitness case-study data.',
        ],
    },
    {
        role: 'Research Intern (MSc Thesis)',
        org: 'EURECOM',
        place: 'Sophia Antipolis, France · Remote',
        date: 'Nov 2025 – Jun 2026',
        points: [
            'Designed a multi-agent pipeline that turns natural-language intents into Helm configurations, validates them (policy rules + Kubernetes dry-run), deploys a 5G Core (OpenAirInterface), then closes the loop: Prometheus KPIs → anomaly and SLA checks → LLM remediation plan → scale, restart, rollback or config patch.',
            'Graded runs on deterministic ground truth instead of how outputs read: built an intent benchmark over a complexity × load × scenario grid, scored resource plans against a formula-based oracle, and compared against different baselines',
            '88.9% intent-to-deployment with zero human interventions. The multi-agent pipeline cut config errors from 86.9% (single-LLM baseline) to 0% and remediated 30/30 injected faults.',
            'Benchmarked 8 open-weight LLMs (3B–120B) as the harness backbone with paired, Bonferroni-corrected tests: accuracy jumps between 7B and 14B (0.38 → 0.69), then plateaus.',
        ],
    },
    {
        role: 'AI Development Intern',
        org: 'QANTRA',
        date: 'Nov 2025 – Mar 2026',
        points: [
            'Curated and validated an Arabic Q&A benchmark to evaluate a RAG pipeline whose keyword-filtering stage reduced retrieval noise (paper in preparation).',
            'Shipped an OCR + LLM invoice-extraction service.',
        ],
    },
    {
        role: 'AI Research Intern',
        org: 'Siine',
        date: 'Jul 2025 – Sep 2025',
        points: [
            'Benchmarked BKT, DKT and Transformer knowledge-tracing models, lifting recommendation accuracy from 78% to 96%.',
            'Ran attention and sequence-modeling ablations and integrated learner embeddings into the recommender to reduce cold-start issues; authored the technical report.',
        ],
    },
    {
        role: 'Geo AI Research Intern',
        org: 'Algerian Space Agency',
        date: 'Sep 2024 – Nov 2024',
        points: [
            'Deep learning on satellite imagery for land-cover classification and change detection.',
        ],
    },
];

export const earlierExperience = [
    { role: 'Full-Stack Intern', org: 'FikraTek Solutions', date: '2024' },
    { role: 'Machine Learning Intern', org: 'Cellula Technologies', date: '2024' },
    { role: 'Front-End Developer & UI/UX Designer', org: 'Gostu DZ', date: '2023 – 2024' },
];

export interface Project {
    title: string;
    year: string;
    description: string;
    stack: string[];
    link?: Link;
}

export const projects: Project[] = [
    {
        title: 'RL for LLM Efficiency',
        year: '2024',
        description: 'Cast three LLM-efficiency problems as RL tasks (prompt-token pruning, attention-head pruning, per-layer pruning + quantization) with multi-objective rewards trading quality (perplexity, output similarity) for latency, memory and FLOPs. On TinyLlama-1.1B, PPO reached 2.09% sparsity (1.100B → 1.077B non-zero weights).',
        stack: ['PyTorch', 'Transformers', 'Gymnasium', 'PPO'],
        link: { label: 'Code', href: 'https://github.com/larbi1512/RL-for-LLms-optimization' },
    },
    {
        title: 'HPC: CUDA, OpenMP, MPI',
        year: '2025',
        description: 'CUDA kernels (stencil, dot product, parallel scan) with 101–141× speedups over CPU, each verified against CPU results, plus shared-memory parallelism with OpenMP and distributed regression with MPI.',
        stack: ['CUDA', 'C', 'OpenMP', 'MPI'],
        link: { label: 'Code', href: 'https://github.com/larbi1512/hpc-labs' },
    },
];

export const otherProjects: Project[] = [
    {
        title: 'WLAN intrusion detection',
        year: '2025',
        description: 'Classification and anomaly-detection models for wireless network attacks.',
        stack: [],
        link: { label: 'Code', href: 'https://github.com/larbi1512/WLAN-Intrusion-Detection-with-AI-' },
    },
    {
        title: 'ECG heartbeat classification',
        year: '2025',
        description: 'Machine learning and deep learning models to classify ECG heartbeats.',
        stack: [],
        link: { label: 'Code', href: 'https://github.com/larbi1512/TSA-ECG' },
    },
    {
        title: 'Corporate financial health app',
        year: '2024',
        description: 'Web app for company budget management with an NLP chatbot.',
        stack: [],
    },
    {
        title: 'Gifty',
        year: '2024',
        description: 'Flutter app connecting gift and flower sellers with buyers.',
        stack: [],
        link: { label: 'Code', href: 'https://github.com/larbi1512/GIFTY' },
    },
    {
        title: 'Algerian forest mapping',
        year: '2023',
        description: 'Satellite imagery and GIS to monitor forest coverage over time.',
        stack: [],
    },
];

export const competencies: { title: string; items: string[] }[] = [
    {
        title: 'Agentic AI & Multi-Agent Systems',
        items: ['LangGraph', 'multi-agent orchestration', 'intent-driven automation', 'tool & function calling', 'human-in-the-loop checkpoints', 'shared agent state & memory'],
    },
    {
        title: 'LLMs, NLP & Retrieval',
        items: ['LoRA fine-tuning', 'SFT dataset curation & annotation', 'RAG pipelines & retrieval evaluation', 'embeddings & semantic search', 'prompt engineering & prompt compression', 'Arabic NLP', 'OCR + LLM document extraction'],
    },
    {
        title: 'Reinforcement Learning, Efficient Inference & HPC',
        items: ['PPO', 'custom Gymnasium environments', 'multi-objective reward shaping', 'token, attention-head & layer pruning', 'mixed-precision quantization', 'local LLM serving (vLLM, Ollama)', 'CUDA kernels', 'OpenMP', 'MPI'],
    },
    {
        title: 'Cloud-Native Networking & Infrastructure',
        items: ['5G Core (OpenAirInterface)', 'Kubernetes', 'Helm', 'Docker', 'Prometheus', 'Grafana', 'KPI monitoring, anomaly & SLA detection', 'wireless intrusion detection', 'microservices & API gateways (Spring Boot)', 'Linux', 'GCP'],
    },
    {
        title: 'Machine Learning, Data & Developer Stack',
        items: ['Python (primary)', 'C/C++', 'Java', 'SQL', 'JavaScript', 'PyTorch', 'Hugging Face Transformers', 'TensorFlow', 'Scikit-learn', 'knowledge tracing & recommender systems', 'time-series analysis', 'satellite imagery & remote sensing', 'Spark', 'Hadoop', 'Hive', 'pytest', 'Git', 'Flask', 'Django', 'React', 'Next.js', 'Flutter'],
    },
];

export const languages = ['English (C1, IELTS)', 'French (C2, TCF)', 'Arabic (native)', 'Tamazight (native)'];

export interface EducationItem {
    degree: string;
    school: string;
    place: string;
    date: string;
    details: string[];
    coursework?: { area: string; modules: string[] }[];
}

export const education: EducationItem[] = [
    {
        degree: 'MSc, Artificial Intelligence and Data Science',
        school: 'National School of Artificial Intelligence (ENSIA)',
        place: 'Algiers, Algeria',
        date: '2021 – 2026',
        details: [
            'Thesis with EURECOM: Agentic AI for Orchestration and Management of Telco Cloud. Defended June 2026 with a grade of 18/20 (highest honors).',
        ],
        // Selected modules from the official curriculum: https://www.ensia.edu.dz/program/
        coursework: [
            { area: 'AI & ML', modules: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Speech Processing', 'Introduction to Mobile Robotics', 'AI and Ethics'] },
            { area: 'Data', modules: ['Data Mining', 'Time Series Analysis and Classification', 'Big Data Analytics and Visualization', 'Advanced Databases'] },
            { area: 'Networks & systems', modules: ['Networks and Protocols', 'Wireless Communication Networks and Systems', 'Computer and Network Security', 'High Performance Computing', 'Operating Systems', 'Computer Architecture'] },
            { area: 'Math & optimization', modules: ['Statistical Inference', 'Stochastic Modelling and Simulation', 'Numerical Methods and Optimisation', 'Operations Research'] },
            { area: 'Software', modules: ['Software Engineering', 'Enterprise Computing', 'Mobile Development', 'Human Computer Interaction'] },
        ],
    },
    {
        degree: 'AI Saturdays',
        school: 'World Learning Algeria',
        place: 'Algiers, Algeria',
        date: '2023',
        details: ['Six-month program in machine learning and deep learning with Python.'],
    },
];

export const certifications = [
    { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA Deep Learning Institute', date: '2022' },
];

export const community = [
    { role: 'Mentor and speaker', event: "GDSC AiFest'24 datathon", date: '2024' },
    { role: 'Organizing committee', event: "AI for Africa'23 conference", date: '2023' },
];
