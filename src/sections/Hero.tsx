import { Typography, Button, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";

export default function HeroOld() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: {
          xs: "calc(100vh - 56px)",
          sm: "calc(100vh - 64px)",
        },
        display: "flex",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, md: 0 },
        background: "linear-gradient(to right, #f8fafc, #eef2ff)",
      }}
    >
      {/* --- GRID LAYOUT --- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 4, md: 8 },
        }}
      >
        <LeftSideContent />              
        {/* <RightSideVisual/> */}
        <RightSideContent/>
      </Box>
    </Box>
  );
}

function LeftSideContent(){
    const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      style={{ maxWidth: "600px" }}
    >

      {/* Name */}
      <motion.div variants={fadeUp}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#1e293b",
            mb: 1,
          }}
        >
          Hi, I’m Varun Gokte
        </Typography>
      </motion.div>

      {/* Headline */}
      <motion.div variants={fadeUp}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3.1rem" },
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Full Stack Software Engineer
        </Typography>
      </motion.div>

      {/* Rotating line (fixed height) */}
      <motion.div variants={fadeUp}>
        <div style={{ height: "32px", marginBottom: "1.5rem" }}>
          <RotatingText
            words={[
              "Developing scalable, reliable APIs.",
              "Crafting clean, user-focused interfaces.",
              "Delivering fast, production-ready features.",
            ]}
            typeSpeed={70}
            deleteSpeed={40}
            delay={1500}
            className="text-[1.1rem] md:text-[1.35rem] font-medium text-indigo-600 block"
          />
        </div>
      </motion.div>

      {/* Subheadline */}
      <motion.div variants={fadeUp}>
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "#334155",
            fontWeight: 400,
            mb: 3,
            maxWidth: "520px",
            lineHeight: 1.55,
          }}
        >
          I build fast, clean, and scalable web applications with a focus on
          modern UI, performance, and maintainable architecture.
        </Typography>
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
      >
        <Button
          variant="contained"
          onClick={scrollToProjects}
          sx={{
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            backgroundColor: "#4f46e5",
            "&:hover": { backgroundColor: "#4338ca" },
          }}
        >
          Check out my Projects
        </Button>

        <Button
          variant="outlined"
          href="/resume.pdf"
          download="Varun Gokte Resume.pdf"
          sx={{
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            borderColor: "#4f46e5",
            color: "#4f46e5",
            "&:hover": {
              backgroundColor: "rgba(79,70,229,0.08)",
              borderColor: "#4f46e5",
            },
          }}
        >
          Download Resume
        </Button>
      </motion.div>

      {/* Social Icons */}
      <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem" }}>
        <IconButton href="https://github.com/varun-gokte" target="_blank" sx={{ color: "#1e293b" }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/varun-gokte"
          target="_blank"
          sx={{ color: "#1e293b" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href="mailto:vsgokte@gmail.com" sx={{ color: "#1e293b" }}>
          <EmailIcon fontSize="large" />
        </IconButton>
      </motion.div>

    </motion.div>
  )
}

function RightSideContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl"
    >
      <div className="font-mono text-sm" style={{ color: "#334155" }}>
        {/* Traffic lights */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Code */}
        <pre className="whitespace-pre-wrap leading-relaxed">
{`const varun = {
  role: "Full-Stack Developer",
  strengths: {
    frontend: "Clean, responsive UI",
    backend: "Reliable, scalable APIs",
    delivery: "Fast, production-ready features"
  },
  currentlyBuilding: "Modern web apps with React, Node, and cloud tooling"
};`}
        </pre>
      </div>
    </motion.div>
  );
}


interface RotatingTextProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

 function RotatingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  delay = 1500,
  className = "",
}: RotatingTextProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), delay);
        }
      }, typeSpeed);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));

        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, delay]);

  return <span className={className}>{text}</span>;
}