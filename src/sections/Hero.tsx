import { Typography, Button, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const arrowAnimation = {
    animate: { y: [0, 10, 0] },
    transition: { duration: 1.5, repeat: Infinity },
  };

  const scrollToProjects = () => {
    const nextSection = document.querySelector("#projects");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

		/* Alternative bg colors
		"bg-gradient-to-r from-teal-400 to-lime-400",
		"bg-gradient-to-r from-orange-500 to-pink-500"
		*/

  return (
    <Box
      className="bg-gradient-to-r from-blue-600 to-cyan-500 relative"
      sx={{
        minHeight: {
          xs: "calc(100vh - 56px)",
          sm: "calc(100vh - 64px)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 },
        overflow: "hidden",
      }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Heading */}
        <motion.div variants={item} >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              color: "white",
            }}
          >
            Hi, I’m Varun Gokte
          </Typography>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={item}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              color: "white",
            }}
          >
            Full Stack developer creating modern, scalable web apps
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: 24 }}
        >
          <Button
            variant="contained"
            color="secondary"
            href="/resume.pdf"
					  download="Varun_Gokte_Resume.pdf"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
              textTransform: "none",
              "&:hover": { transform: "scale(1.05)", transition: "0.3s",  opacity: 0.9  }, 
							backgroundColor: "white",
    color: "#0284c7", // cyan-600
    fontWeight: 600,
            }}
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={scrollToProjects}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
              textTransform: "none",
              borderColor: "white",
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            View Projects
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: 24 }}
        >
          <IconButton
            href="https://github.com/varun-gokte"
            target="_blank"
						size="large"
            sx={{ color: "white" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/varun-gokte"
            target="_blank"
						size="large"
            sx={{ color: "white" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="mailto:vsgokte@gmail.com"
						size="large"
            sx={{ color: "white" }}
          >
            <EmailIcon />
          </IconButton>
        </motion.div>
      </motion.div>

      {/* Scroll down arrow */}
      <motion.div
        {...arrowAnimation}
        style={{
          position: "absolute",
          bottom: 20,
          color: "white",
          fontSize: 40,
          cursor: "pointer",
        }}
        onClick={scrollToProjects}
      >
        <KeyboardArrowDownIcon fontSize="inherit" />
      </motion.div>
    </Box>
  );
}
