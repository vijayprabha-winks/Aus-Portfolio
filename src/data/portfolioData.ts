export interface MilestoneConfig {
  percentage: number;
  label: string;
  tagline: string;
  subtext: string;
  badge: string;
  phase: string;
}

export const VIDEO_MILESTONES: MilestoneConfig[] = [
  {
    percentage: 0,
    label: "Genesis",
    tagline: "Stochastic Dimensions & Mathematical Rigor",
    subtext: "National Institute of Technology, Tiruchirappalli",
    badge: "0% • INITIATION",
    phase: "Video Start"
  },
  {
    percentage: 20,
    label: "Early Progression",
    tagline: "State Transitions & Continuous Markovian Chains",
    subtext: "Exploring probabilistic evolution in complex dynamic networks",
    badge: "20% • DYNAMICS",
    phase: "Evolution Phase"
  },
  {
    percentage: 35,
    label: "Transition Phase",
    tagline: "Header Navigation Active & System Equilibrium",
    subtext: "Bridging stochastic theory with applied queueing algorithms",
    badge: "35% • EQUILIBRIUM",
    phase: "Interface Awakening"
  },
  {
    percentage: 50,
    label: "Core Reveal",
    tagline: "AUSTIN DURAI T",
    subtext: "Ph.D. Scholar in Mathematics • NIT Trichy • AIR 140 CSIR-NET JRF",
    badge: "50% • SCHOLAR IDENTITY",
    phase: "Core Reveal Moment"
  },
  {
    percentage: 75,
    label: "Highlight Phase",
    tagline: "Queueing Architectures & Performance Bounds",
    subtext: "M/M/c Multi-Server Equilibria & Little's Law Optimization",
    badge: "75% • ANALYSIS",
    phase: "Research Highlight"
  },
  {
    percentage: 90,
    label: "Ending Transition",
    tagline: "Bridging Theory into Applied World Impact",
    subtext: "Department Coordinator • Dedicated Educator • Future Principal Investigator",
    badge: "90% • SYNTHESIS",
    phase: "Closing Horizon"
  },
  {
    percentage: 100,
    label: "Complete",
    tagline: "Welcome to the Academic Portfolio",
    subtext: "Scroll downward to explore full research, simulations, and teaching",
    badge: "100% • UNVEIL",
    phase: "Portfolio Immersion"
  }
];

export interface ResearchPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyTopics: string[];
  equation: string;
  equationLabel: string;
  application: string;
  impactMetrics: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "GPA" | "CGPA" | "Percentage";
  highlights: string[];
  status?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  rank?: string;
  badge: string;
  description: string;
  featured: boolean;
}

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  level: string;
  description: string;
  syllabus: {
    unit1: string;
    unit2: string;
    unit3: string;
    unit4: string;
    references: string[];
  };
}

export interface ToolItem {
  name: string;
  category: "Computational" | "Document" | "Pedagogy";
  description: string;
  level: string;
  iconName: string;
}

export interface AcademicProfile {
  platform: string;
  url: string;
  handle: string;
  badge: string;
  description: string;
  icon: string;
}

export interface StatRecapItem {
  label: string;
  value: string;
  subtext: string;
}

export const portfolioData = {
  personal: {
    name: "AUSTIN DURAI T",
    shortName: "Austin Durai",
    title: "Ph.D. Scholar in Mathematics",
    institution: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    department: "Department of Mathematics",
    location: "Tiruchirappalli, Tamil Nadu, India",
    email: "austindurai@gmail.com",
    phone: "+91 99445 12845",
    roles: [
      "Ph.D. Scholar",
      "Stochastic & Queueing Specialist",
      "Department Coordinator (NIT Trichy)",
      "CSIR-NET JRF AIR 140",
      "Aspiring Professor"
    ],
    tagline: "Bridging foundational stochastic analysis and complex real-world queueing networks.",
    heroSummary: "Specializing in Queueing Theory, Stochastic Processes, and Mathematical Optimization. Dedicated to mathematical rigor, systemic optimization of service environments, and inspiring the next generation of mathematical scientists.",
    avatar: "/images/austin-profile.jpg",
    heroBg: "/images/austin-hero-bg.jpg",
    cvUrl: "/assets/austin-durai-cv.pdf",
    currentStatus: "Ph.D. Scholar (Expected Aug 2026)",
    coordinatorTenure: "Department Coordinator (2025–Present)",
  },

  about: {
    bio: [
      "Austin Durai T is an impassioned mathematical researcher pursuing his Ph.D. in the Department of Mathematics at the National Institute of Technology, Tiruchirappalli (NIT Trichy). His academic journey represents an unwavering dedication to understanding the underlying stochastic behaviors of modern service ecosystems.",
      "His core research investigates complex queueing architectures, Markovian processes, and equilibrium optimization in real-world service networks. With an exceptional academic pedigree from Loyola College, Chennai (Distinction & Top Ranks), Austin pairs pure analytical depth with applied operations research to resolve operational bottlenecks.",
      "Beyond mathematical modeling, Austin is profoundly dedicated to higher education pedagogy. Serving as Department Coordinator (2025–Present) at NIT Trichy, he actively mentors scholars and instructs foundational and advanced courses with clarity and enthusiasm."
    ],
    quickStats: [
      { label: "Doctoral Status", value: "Ph.D. Scholar", detail: "NIT Trichy" },
      { label: "Coursework GPA", value: "9.25 / 10", detail: "Doctoral Grade" },
      { label: "National Rank", value: "AIR 140", detail: "CSIR-UGC NET JRF" },
      { label: "GATE Rank", value: "AIR 754", detail: "Mathematical Sciences" },
      { label: "M.Sc. CGPA", value: "9.44 / 10", detail: "Loyola College (Distinction)" },
      { label: "Leadership", value: "Coordinator", detail: "NIT Trichy Dept (2025–Pres.)" },
    ]
  },

  researchPillars: [
    {
      id: "queueing-theory",
      title: "Queueing Theory & Service Architectures",
      tagline: "Mathematical modeling of waiting lines & congestion dynamics",
      description: "Rigorous investigation of Markovian and non-Markovian queueing architectures (M/M/c, M/G/1, and network queues). Analyzing arrival streams, service disciplines, transient probabilities, and steady-state distributions to minimize mean waiting times.",
      keyTopics: ["M/M/c Multi-server Systems", "Steady-State Distribution", "Waiting Time Paradoxes", "Buffer Capacity Optimization"],
      equation: "L_q = \\frac{P_0 (\\lambda / \\mu)^c \\rho}{c! (1 - \\rho)^2}",
      equationLabel: "Mean Queue Length for M/M/c Systems",
      application: "Telecommunications routing, cloud server load allocation, automated container terminals, and hospital triage systems.",
      impactMetrics: "Analyzed equilibrium thresholds yielding up to 34% waiting-time reduction under peak arrival variance."
    },
    {
      id: "stochastic-processes",
      title: "Stochastic Processes & Random Media",
      tagline: "Probabilistic evolution of random time-dependent phenomena",
      description: "Formulation and analytical solution of continuous-time and discrete-time Markov chains, Poisson counting processes, renewal theory, and martingale formulations under uncertain and non-stationary environments.",
      keyTopics: ["Markovian State Transitions", "Birth-Death Processes", "Stationary Distributions", "Ergodic Theorems"],
      equation: "\\mathbf{\\pi} \\mathbf{P} = \\mathbf{\\pi}, \\quad \\sum_{i} \\pi_i = 1",
      equationLabel: "Stationary Distribution of Markov Chains",
      application: "Reliability engineering, financial market volatility models, epidemiology spread curves, and sensor mesh lifespans.",
      impactMetrics: "Rigorous spectral decomposition of state matrices for high-dimensional state spaces."
    },
    {
      id: "performance-analysis",
      title: "Quantitative Performance Analysis",
      tagline: "Quantifying throughput, latency, and bottleneck thresholds",
      description: "Evaluating quantitative indices of complex operational systems. Developing closed-form expressions for mean response times, server utilization factors, blocking probabilities, and system resilience under load spikes.",
      keyTopics: ["Throughput Maximization", "Latency Bounds", "Resource Utilization Bounds", "Sensitivity & Stability Analysis"],
      equation: "W = \\frac{L}{\\lambda} \\quad (\\text{Little's Law})",
      equationLabel: "Fundamental Little's Law Theorem",
      application: "Distributed computational clusters, high-frequency clearing engines, and logistical transit networks.",
      impactMetrics: "Proved closed-form delay bounds for non-exponential multi-stage service networks."
    },
    {
      id: "operations-research",
      title: "Operations Research & Optimization",
      tagline: "Optimal decision making under stochastic constraints",
      description: "Formulating deterministic and stochastic programming problems to allocate constrained resources efficiently. Incorporating dynamic programming, queueing control policies, and convex optimization under uncertainty.",
      keyTopics: ["Stochastic Dynamic Programming", "Convex Optimization", "Service Rate Control", "Resource Allocation"],
      equation: "\\min_{x \\in \\mathcal{X}} \\; \\mathbb{E}_{\\xi}[C(x, \\xi)] \\quad \\text{s.t.} \\quad \\mathbb{P}(G(x, \\xi) \\le 0) \\ge 1 - \\alpha",
      equationLabel: "Chance-Constrained Stochastic Optimization",
      application: "Workforce scheduling, hospital operating theater scheduling, and green energy microgrid balancing.",
      impactMetrics: "Formulated robust multi-period capacity allocation models under uncertain demand."
    }
  ] as ResearchPillar[],

  education: [
    {
      degree: "Doctor of Philosophy (Ph.D.)",
      field: "Mathematics (Queueing Theory & Stochastic Modeling)",
      institution: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
      location: "Tiruchirappalli, Tamil Nadu, India",
      period: "2021 — Present (Expected August 2026)",
      score: "9.25 / 10",
      scoreType: "GPA",
      highlights: [
        "Doctoral dissertation on Queueing Theory and Stochastic Systems",
        "Achieved an outstanding coursework GPA of 9.25 / 10",
        "Appointed Department Coordinator (2025–Present) for graduate academic affairs",
        "Presented scholarly research at International Conference, NIT Calicut (Jan 2025)"
      ],
      status: "Doctoral Scholar (Final Phase)"
    },
    {
      degree: "Master of Science (M.Sc.)",
      field: "Mathematics",
      institution: "Loyola College (Autonomous)",
      location: "Chennai, Tamil Nadu, India",
      period: "2019 — 2021",
      score: "9.44 / 10",
      scoreType: "CGPA",
      highlights: [
        "Graduated First Class with Distinction and top academic ranking (CGPA 9.44 / 10)",
        "Recipient of the prestigious Regularity & Diligence Award for exemplary discipline",
        "Rigorous research thesis and core coursework in Stochastic Processes, Real & Complex Analysis, and Topology"
      ]
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      field: "Mathematics",
      institution: "Loyola College (Autonomous)",
      location: "Chennai, Tamil Nadu, India",
      period: "2016 — 2019",
      score: "9.01 / 10",
      scoreType: "CGPA",
      highlights: [
        "Graduated First Class with Distinction (CGPA 9.01 / 10)",
        "Comprehensive core coursework in Linear Algebra, Differential Equations, and Numerical Analysis",
        "Active competitor in state and collegiate mathematics Olympiads"
      ]
    },
    {
      degree: "Higher Secondary (HSC) & SSLC",
      field: "Mathematics & Physical Sciences Stream",
      institution: "State Board of Tamil Nadu",
      location: "Tamil Nadu, India",
      period: "Completed 2016 & 2014",
      score: "96.5% & 96.2%",
      scoreType: "Percentage",
      highlights: [
        "Higher Secondary Certificate (HSC): 96.5% with top percentile in Mathematics",
        "Secondary School Leaving Certificate (SSLC): 96.2% academic honor"
      ]
    }
  ] as EducationItem[],

  achievements: [
    {
      id: "csir-net-jrf",
      title: "CSIR-UGC NET with Junior Research Fellowship (JRF)",
      organization: "Council of Scientific and Industrial Research (CSIR) & UGC, India",
      date: "June 2024",
      rank: "AIR 140",
      badge: "All India Rank 140",
      description: "Qualified the premier national examination for Junior Research Fellowship and University Assistant Professorship in Mathematical Sciences with an All India Rank of 140 among tens of thousands of national aspirants.",
      featured: true
    },
    {
      id: "gate-maths",
      title: "GATE (Graduate Aptitude Test in Engineering) — Mathematics",
      organization: "Indian Institute of Technology (IIT) / MHRD",
      date: "2023",
      rank: "AIR 754",
      badge: "All India Rank 754",
      description: "Secured All India Rank 754 in the rigorous national GATE examination in Mathematics, demonstrating command across advanced pure and applied higher mathematics.",
      featured: true
    },
    {
      id: "loyola-award",
      title: "Regularity & Diligence Institutional Award",
      organization: "Loyola College, Chennai",
      date: "April 2021",
      badge: "Excellence Honor",
      description: "Awarded by Loyola College in recognition of continuous diligence, meticulous academic record, and exemplary discipline throughout postgraduate tenure.",
      featured: true
    },
    {
      id: "nit-calicut-conf",
      title: "Paper Presentation — International Conference on Applied Mathematics",
      organization: "National Institute of Technology Calicut (NIT Calicut)",
      date: "January 2025",
      badge: "International Conference",
      description: "Delivered an oral presentation on 'Stochastic Modeling & Performance Analysis in Multi-Server Queueing Environments' before an international body of applied mathematicians.",
      featured: true
    }
  ] as AchievementItem[],

  teaching: {
    coordinatorTitle: "Department Coordinator — NIT Trichy",
    coordinatorPeriod: "2025 — Present",
    coordinatorDescription: "Managing departmental academic scheduling, postgraduate research seminar coordination, faculty-scholar alignment, and guest lecture series.",
    courses: [
      {
        id: "stochastic-processes",
        code: "MA-701",
        title: "Stochastic Processes",
        level: "Postgraduate / Doctoral Core",
        description: "Rigorous study of probability spaces, discrete and continuous time Markov chains, Poisson counting streams, renewal theory, and queueing foundations.",
        syllabus: {
          unit1: "Probability Foundations: Probability spaces, conditional expectation, stopping times, and filtration concepts.",
          unit2: "Discrete-Time Markov Chains: Transition probability matrix, classification of states, recurrence and transience, stationary distributions.",
          unit3: "Continuous-Time Markov Chains: Kolmogorov differential equations, birth and death processes, Poisson process variants.",
          unit4: "Queueing Models & Renewal Theory: M/M/1, M/M/c queues, waiting times, Little's formula, renewal theorem and applications.",
          references: [
            "S.M. Ross, Stochastic Processes, Wiley",
            "J. Medhi, Stochastic Processes, New Age International",
            "Gross & Harris, Fundamentals of Queueing Theory"
          ]
        }
      },
      {
        id: "real-analysis",
        code: "MA-502",
        title: "Real Analysis",
        level: "Advanced Undergraduate / Master's Core",
        description: "Deep treatment of metric spaces, compactness, connectedness, sequences and series of functions, and Riemann-Stieltjes integration.",
        syllabus: {
          unit1: "Metric Spaces & Topology: Open and closed sets, compactness, Heine-Borel theorem, connectedness, and completeness.",
          unit2: "Sequences & Series of Functions: Pointwise and uniform convergence, Weierstrass M-test, uniform continuity.",
          unit3: "Riemann-Stieltjes Integral: Definition, existence conditions, properties, change of variables, fundamental theorem of calculus.",
          unit4: "Equicontinuity & Stone-Weierstrass: Arzela-Ascoli theorem, polynomial approximation, and metric space transformations.",
          references: [
            "W. Rudin, Principles of Mathematical Analysis, McGraw-Hill",
            "R.G. Bartle, The Elements of Real Analysis, Wiley"
          ]
        }
      },
      {
        id: "linear-algebra",
        code: "MA-401",
        title: "Linear Algebra",
        level: "Undergraduate Core",
        description: "Vector spaces, subspaces, linear transformations, matrix representations, dual spaces, eigenvalues/eigenvectors, and canonical forms.",
        syllabus: {
          unit1: "Vector Spaces: Subspaces, span, linear independence, basis, dimension, and coordinate representation.",
          unit2: "Linear Transformations: Rank-nullity theorem, algebra of linear transformations, isomorphisms, matrix of a linear operator.",
          unit3: "Eigenvalues & Diagonalization: Characteristic polynomial, Cayley-Hamilton theorem, invariant subspaces, diagonalizability criteria.",
          unit4: "Inner Product Spaces: Gram-Schmidt orthogonalization, orthogonal projections, adjoint operators, spectral theorem.",
          references: [
            "Hoffman & Kunze, Linear Algebra, Prentice-Hall",
            "Gilbert Strang, Linear Algebra and Its Applications"
          ]
        }
      },
      {
        id: "numerical-methods",
        code: "MA-404",
        title: "Numerical Methods",
        level: "Applied Mathematics / Engineering Core",
        description: "Algorithmic approaches to root-finding, interpolation, numerical calculus, linear systems, and differential equations.",
        syllabus: {
          unit1: "Roots of Equations & Linear Systems: Newton-Raphson, Secant method, LU Decomposition, Gauss-Seidel iteration.",
          unit2: "Interpolation & Approximation: Lagrange polynomial, Newton's divided differences, spline interpolation.",
          unit3: "Numerical Calculus: Numerical differentiation, Trapezoidal rule, Simpson's 1/3 and 3/8 rules, Gaussian quadrature.",
          unit4: "Differential Equations: Euler's method, Runge-Kutta 4th order method, finite difference methods for boundary value problems.",
          references: [
            "M.K. Jain et al., Numerical Methods for Scientific and Engineering Computation",
            "Burden & Faires, Numerical Analysis"
          ]
        }
      }
    ] as CourseItem[]
  },

  tools: [
    {
      name: "MATLAB",
      category: "Computational",
      description: "Simulation of queueing networks, numerical matrix algebra, and stochastic process trajectory plots.",
      level: "Advanced",
      iconName: "Terminal"
    },
    {
      name: "R Programming",
      category: "Computational",
      description: "Statistical distribution fitting, Monte Carlo simulations, and empirical data analysis.",
      level: "Proficient",
      iconName: "Code2"
    },
    {
      name: "LaTeX & BibTeX",
      category: "Document",
      description: "Scholarly typesetting of complex mathematical treatises, commutative diagrams, and journal papers.",
      level: "Expert",
      iconName: "FileText"
    },
    {
      name: "Wolfram Mathematica",
      category: "Computational",
      description: "Symbolic computation, solving differential equation systems, and algebraic invariants.",
      level: "Proficient",
      iconName: "Cpu"
    },
    {
      name: "Microsoft Excel & Solver",
      category: "Computational",
      description: "Tabular data computation, sensitivity modeling, and preliminary analytical verification.",
      level: "Advanced",
      iconName: "Table"
    },
    {
      name: "Google Classroom",
      category: "Pedagogy",
      description: "Modern instructional management, lecture distribution, assignment grading, and scholar interaction.",
      level: "Proficient",
      iconName: "BookOpen"
    }
  ] as ToolItem[],

  profiles: [
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=austindurai",
      handle: "Austin Durai T",
      badge: "Citations & Preprints",
      description: "Track peer-reviewed research publications, conference preprints, and citation metrics in Queueing Theory.",
      icon: "GraduationCap"
    },
    {
      platform: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=austindurai",
      handle: "Austin Durai T",
      badge: "Indexed Author",
      description: "Verified Elsevier Scopus author profile tracking peer-reviewed journal contributions.",
      icon: "FileSearch"
    },
    {
      platform: "ORCID",
      url: "https://orcid.org/0009-0002-1402-9944",
      handle: "0009-0002-1402-9944",
      badge: "Verified Researcher ID",
      description: "Open Researcher and Contributor ID establishing immutable academic attribution.",
      icon: "IdCard"
    },
    {
      platform: "ResearchGate",
      url: "https://www.researchgate.net/profile/Austin-Durai",
      handle: "Austin Durai T",
      badge: "Research Network",
      description: "Engage with research questions, stochastic problem threads, and early-stage preprints.",
      icon: "Network"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/austindurai",
      handle: "Austin Durai T",
      badge: "Academic Network",
      description: "Connect for academic conferences, visiting opportunities, guest lectures, and institutional collaborations.",
      icon: "Linkedin"
    }
  ] as AcademicProfile[],

  statsRecap: [
    { label: "Doctoral Research", value: "Ph.D. Scholar", subtext: "NIT Trichy" },
    { label: "Courses Taught", value: "4 Courses", subtext: "Stochastic, Analysis, Algebra, Numerical" },
    { label: "National Qualifications", value: "2", subtext: "CSIR-UGC NET & GATE" },
    { label: "All India Rank", value: "AIR 140", subtext: "CSIR-UGC NET JRF 2024" },
    { label: "Department Leadership", value: "Coordinator", subtext: "NIT Trichy (2025–Present)" },
    { label: "Scholarly Commitment", value: "100%", subtext: "Pure & Applied Academia" }
  ] as StatRecapItem[]
};
