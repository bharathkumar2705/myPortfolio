// ============================================================
//  Portfolio Data – Single Source of Truth
//  Update this file to change content across the entire site
// ============================================================

export const personalInfo = {
  name: "Naru Bharath Kumar Reddy",
  shortName: "Bharath",
  displayName: "Bharath Kumar Reddy",
  roles: ["Full Stack Developer", "Web Developer", "Problem Solver", "CS Student"],
  bio: "I'm a passionate B.Tech Computer Science student at Amrita Vishwa Vidyapeeth with a strong foundation in full-stack development and competitive programming. I love building elegant, efficient solutions to real-world problems and am always eager to explore cutting-edge technologies.",
  email: "bharathkumarreddynaru@gmail.com",
  phone: "+91 6302654756",
  location: "Coimbatore, Tamil Nadu, India",
  university: "Amrita Vishwa Vidyapeeth",
  degree: "B.Tech Computer Science & Engineering",
  // TODO: Update graduation year
  graduationYear: "2026",
  availability: "Open to Internships & Full-time Roles",
};

export const socialLinks = {
  github: "https://github.com/bharathkumar2705",
  linkedin: "https://www.linkedin.com/in/bharathkumarreddynaru",
  leetcode: "https://leetcode.com/bharathkumar2705", // TODO: Verify LeetCode username
  hackerrank: "https://www.hackerrank.com/bharathkumar2705", // TODO: Verify HackerRank username
  codechef: "https://www.codechef.com/users/bharathkumar27", // TODO: Verify CodeChef username
  codeforces: "", // TODO: Add Codeforces profile URL if available
};

export const education = [
  {
    id: 1,
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Amrita Vishwa Vidyapeeth",
    location: "Coimbatore, Tamil Nadu",
    duration: "2022 – 2026",
    cgpa: "TODO: Add CGPA", // TODO: Add your CGPA
    description: "Specializing in full-stack development, data structures & algorithms, and software engineering principles.",
    highlights: ["Data Structures & Algorithms", "Web Technologies", "Database Management", "Object Oriented Programming"],
  },
  {
    id: 2,
    degree: "Class XII – MPC",
    institution: "TODO: Add School Name", // TODO: Add school name
    location: "Andhra Pradesh, India",
    duration: "2020 – 2022",
    cgpa: "TODO: Add percentage/CGPA", // TODO: Add score
    description: "",
    highlights: [],
  },
];

export const skills = {
  languages: [
    { name: "C", level: 85, icon: "SiC" },
    { name: "C++", level: 80, icon: "SiCplusplus" },
    { name: "Java", level: 75, icon: "FaJava" },
    { name: "Python", level: 78, icon: "FaPython" },
    { name: "JavaScript", level: 82, icon: "SiJavascript" },
    { name: "SQL", level: 72, icon: "SiMysql" },
  ],
  webTech: [
    { name: "HTML5", level: 90, icon: "FaHtml5" },
    { name: "CSS3", level: 85, icon: "FaCss3Alt" },
    { name: "React", level: 75, icon: "FaReact" },
    { name: "Node.js", level: 68, icon: "FaNodeJs" },
    { name: "Express.js", level: 65, icon: "SiExpress" },
  ],
  tools: [
    { name: "Git", level: 80, icon: "FaGit" },
    { name: "GitHub", level: 82, icon: "FaGithub" },
    { name: "VS Code", level: 90, icon: "SiVscodium" },
    { name: "Arduino", level: 70, icon: "SiArduino" },
    { name: "MySQL", level: 72, icon: "SiMysql" },
    { name: "Vite", level: 70, icon: "SiVite" },
    { name: "Linux", level: 65, icon: "FaLinux" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Voting System",
    description: "A comprehensive voting system built using Data Structures and Algorithms to simulate the real-life voting process with efficient candidate registration, voter authentication, and real-time result tallying.",
    techStack: ["Python", "DSA", "OOP"],
    category: "DSA",
    githubUrl: "https://github.com/bharathkumar2705", // TODO: Update with specific repo URL
    liveUrl: "", // TODO: Add live URL if deployed
    featured: true,
  },
  {
    id: 2,
    title: "Smart Parking System",
    description: "An Arduino-based IoT solution for automated parking management using ultrasonic sensors to detect vehicle presence, display availability in real-time, and control entry/exit barriers.",
    techStack: ["Arduino", "C", "Sensors", "Tinkercad", "IoT"],
    category: "Embedded",
    githubUrl: "https://github.com/bharathkumar2705", // TODO: Update with specific repo URL
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Traffic Light Simulation",
    description: "A realistic traffic light simulation replicating real-world traffic signal behavior using Arduino. Implements timed state transitions, pedestrian crossing signals, and emergency override.",
    techStack: ["Arduino", "C", "Sensors", "Tinkercad"],
    category: "Embedded",
    githubUrl: "https://github.com/bharathkumar2705", // TODO: Update with specific repo URL
    liveUrl: "",
    featured: false,
  },
  // TODO: Add more projects here
];

export const experience = [
  // TODO: Add internship/work experience entries in this format:
  // {
  //   id: 1,
  //   role: "Software Engineering Intern",
  //   company: "Company Name",
  //   location: "City, State",
  //   duration: "Month Year – Month Year",
  //   type: "Internship",
  //   description: "What you did at this internship...",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   achievements: ["Built X feature", "Improved Y by Z%"],
  // },
];

export const certifications = [
  // TODO: Add your certifications in this format:
  // {
  //   id: 1,
  //   name: "Certification Name",
  //   provider: "Platform/Organization",
  //   date: "Month Year",
  //   credentialUrl: "https://...",
  //   icon: "SiCoursera", // react-icons icon name
  // },
];

export const achievements = [
  {
    id: 1,
    title: "LeetCode",
    value: "TODO", // TODO: Add problems solved count
    label: "Problems Solved",
    icon: "SiLeetcode",
    url: "https://leetcode.com/bharathkumar2705",
    color: "#FFA116",
  },
  {
    id: 2,
    title: "HackerRank",
    value: "TODO", // TODO: Add star rating or badge count
    label: "Stars / Badges",
    icon: "SiHackerrank",
    url: "https://www.hackerrank.com/bharathkumar2705",
    color: "#00EA64",
  },
  {
    id: 3,
    title: "CodeChef",
    value: "TODO", // TODO: Add rating
    label: "Rating",
    icon: "SiCodechef",
    url: "https://www.codechef.com/users/bharathkumar27",
    color: "#5B4638",
  },
  {
    id: 4,
    title: "GitHub",
    value: "TODO", // TODO: Add public repos count
    label: "Public Repos",
    icon: "FaGithub",
    url: "https://github.com/bharathkumar2705",
    color: "#6c63ff",
  },
];
