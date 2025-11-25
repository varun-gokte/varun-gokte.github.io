import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Chip,
  Box,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "../data";

export default function Projects() {
  return (
    <Container
      id="projects"
      maxWidth={false}
      sx={{
        px: 4,
        pt: 12,
        pb: 8,
        maxWidth: 1400,
        mx: "auto",
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#0f172a",
          mb: 4,
        }}
      >
        Projects
      </Typography>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 3 }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ flex: "1 1 calc(50% - 12px)" }}
          >
            <Card
              className="hover:shadow-xl transition-shadow duration-300"
              sx={{
                minHeight: 260,
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CardContent>
                {/* Name */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#0f172a", mb: 1 }}
                >
                  {project.name}
                </Typography>

                {/* Bullets */}
                <Box sx={{ mb: 2 }}>
                  {project.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{ color: "#4f46e5", marginTop: "4px" }}
                      >
                        •
                      </span>
                      <Typography
                        sx={{ color: "#475569", fontSize: "0.95rem", marginTop: "6px"  }}
                      >
                        {bullet}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>

                {/* Tech Stack */}
                <Box sx={{ my: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech_stack.split(",").map((tech) => (
                    <Chip
                      key={tech}
                      label={tech.trim()}
                      size="small"
                      sx={{
                        backgroundColor: "#eef2ff",
                        color: "#4338ca",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
                {/* Buttons */}
                <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                  {project.github && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      endIcon={<LaunchIcon />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        borderColor: "#4f46e5",
                        color: "#4f46e5",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "rgba(79,70,229,0.08)",
                          borderColor: "#4f46e5",
                        },
                      }}
                    >
                      Source Code
                    </Button>
                  )}
                  {project.deployment && (
                    <Button
                      size="small"
                      variant="contained"
                      endIcon={<LaunchIcon />}
                      href={project.deployment}
                      target="_blank"
                      sx={{
                        backgroundColor: "#4f46e5",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#4338ca" },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
}
