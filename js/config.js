/**
 * ============================================================
 *  ASTRALLIBERTAD — Portfolio Config
 *  This is the ONLY file you need to edit to update content.
 * ============================================================
 */

const CONFIG = {

  // ── Identity ─────────────────────────────────────────────
  name:     "Prince Gabrielle Jhon M. Libertad",
  codename: "ASTRALLIBERTAD",
  role:     "Computer Engineer",
  location: "Manila, Philippines",
  bio:      "I build things that are <strong>hard to build</strong> — compilers, computer vision pipelines, IoT systems, and language runtimes. Shipping real projects while studying Computer Engineering.",

  // ── Typewriter cycling roles ──────────────────────────────
  roles: [
    "Computer Engineer",
    "Systems Programmer",
    "Rust Developer",
    "Compiler Builder",
    "Flutter + Rust Dev",
  ],

  // ── Stats row ─────────────────────────────────────────────
  stats: [
    { num: "5+",    label: "Projects"       },
    { num: "6+",    label: "Languages"      },
    { num: "Gr.12", label: "Started Rust"   },
    { num: "2",     label: "Certifications" },
  ],

  // ── Links ─────────────────────────────────────────────────
  links: {
    github:   "https://github.com/ASTRALLIBERTAD",
    linkedin: "https://www.linkedin.com/in/prince-gabrielle-jhon-libertad-3a10b0390/",
    email:    "princegabriellejhonl@gmail.com",
    phone1:   "+63 960 346 9262",
    phone2:   "+63 926 869 6011",
    cv:       "Prince_Libertad_CV.pdf",
  },

  // ── Projects ──────────────────────────────────────────────
  //
  //  status:   "active" | "done"
  //  private:  true | false
  //  featured: true → visually distinct card
  //  tags:     lowercase strings, used for filter buttons
  //  repoUrl:  null if private
  //
  projects: [
    {
      icon:     "🔬",
      name:     "MicroShell-ID",
      tagline:  "An explainable computer vision tool for family-level identification of marine microgastropods from bulk samples. Hybrid deep learning + morphological character matrix — not a black box.",
      tech: [
        { label: "Rust",            style: "t-rust"   },
        { label: "Flutter",         style: "t-cyan"   },
        { label: "ONNX",            style: "t-cyan"   },
        { label: "Computer Vision", style: "t-cyan"   },
        { label: "USB Microscope",  style: "t-cyan"   },
        { label: "FFI",             style: "t-purple" },
      ],
      tags:     ["rust", "flutter", "cv", "onnx"],
      status:   "active",
      private:  true,
      featured: true,
      repoUrl:  null,
    },
    {
      icon:     "⚙️",
      name:     "Brain",
      tagline:  "A compiled programming language built from scratch in Rust. Targets LLVM IR and native executables. Lexer, parser, and IR emission in progress.",
      tech: [
        { label: "Rust",            style: "t-rust"   },
        { label: "LLVM IR",         style: "t-purple" },
        { label: "Compiler Design", style: "t-cyan"   },
      ],
      tags:     ["rust", "compiler"],
      status:   "active",
      private:  false,
      featured: false,
      repoUrl:  "https://github.com/ASTRALLIBERTAD/Brain",
    },
    {
      icon:     "📡",
      name:     "NH3 Monitoring System",
      tagline:  "IoT ammonia sensor on ESP32 with BLE, paired with a native Kotlin Android app for real-time monitoring and data logging.",
      tech: [
        { label: "Kotlin",      style: "t-purple" },
        { label: "ESP32",       style: "t-green"  },
        { label: "BLE",         style: "t-green"  },
        { label: "Android SDK", style: "t-purple" },
      ],
      tags:     ["kotlin", "iot", "android"],
      status:   "done",
      private:  false,
      featured: false,
      repoUrl:  "https://github.com/ASTRALLIBERTAD/NH3-Monitoring-System",
    },
    {
      icon:     "📚",
      name:     "LMS Alternative",
      tagline:  "Lightweight learning management system with Google Drive content storage and Firebase authentication.",
      tech: [
        { label: "Python",           style: "t-purple" },
        { label: "Firebase",         style: "t-cyan"   },
        { label: "Google Drive API", style: "t-cyan"   },
      ],
      tags:     ["python", "firebase"],
      status:   "done",
      private:  false,
      featured: false,
      repoUrl:  "https://github.com/ASTRALLIBERTAD/LMS-alternative",
    },
    
    {
      icon:     "👦",
      name:     "Rizal Book",
      tagline:  "An interactive digital archive built with React, transforming static historical texts into a dynamic, responsive experience focused on performance and clean UI architecture.",
      tech: [
        { label: "React",           style: "t-purple" },
        { label: "Github",         style: "t-cyan"   },
        { label: "Vercel", style: "t-cyan"   },
      ],
      tags:     ["react"],
      status:   "done",
      private:  false,
      featured: false,
      repoUrl:  "https://rizal-book.vercel.app/?brid=YWdncwGTdBYFdw-dgYEtgDlUBlwO",
    },

    // ── Add more projects here ────────────────────────────
    // {
    //   icon:     "🛠",
    //   name:     "Your Project",
    //   tagline:  "What it does.",
    //   tech:     [{ label: "Rust", style: "t-rust" }],
    //   tags:     ["rust"],
    //   status:   "active",
    //   private:  false,
    //   featured: false,
    //   repoUrl:  "https://github.com/ASTRALLIBERTAD/your-repo",
    // },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      group: "Languages",
      items: [
        { name: "Rust",          note: "since Grade 12" },
        { name: "Python"   },
        { name: "Kotlin"   },
        { name: "Dart / Flutter" },
        { name: "C++"      },
      ],
    },
    {
      group: "Frameworks & Libs",
      items: [
        { name: "Flutter"       },
        { name: "React"         },
        { name: "TensorFlow"    },
        { name: "ONNX Runtime"  },
        { name: "Firebase"      },
        { name: "Android SDK"   },
        { name: "Verce"         },
      ],
    },
    {
      group: "Tools & Domains",
      items: [
        { name: "Github"           },
        { name: "LLVM IR"          },
        { name: "CMake / Ninja"    },
        { name: "BLE & UVC"        },
        { name: "Computer Vision"  },
        { name: "Compiler Design"  },
        { name: "IoT / Embedded"   },
      ],
    },
  ],

  // ── Certifications ────────────────────────────────────────
  certs: [
    {
      icon:   "🏅",
      name:   "Python Programming Basics",
      issuer: "Huawei ICT Academy",
      date:   "January 2026",
      code:   "EBG20260108002690",
    },
    {
      icon:   "🏅",
      name:   "Algorithm and Program Design",
      issuer: "Huawei ICT Academy",
      date:   "September 2025",
      code:   "ICT20250919000003",
    },
    // ── Add more certs here ──────────────────────────────
    // { icon: "🏅", name: "Cert Name", issuer: "Issuer", date: "Month YYYY", code: "CODE" },
  ],

  // ── Terminal easter eggs ──────────────────────────────────
  // Add custom commands: "command": () => ["line 1", "line 2"]
  terminalExtra: {
    // "sudo": () => ["Permission denied. Nice try."],
  },
};
