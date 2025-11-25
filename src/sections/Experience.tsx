import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { jobs } from "../data";

export default function Experience() {
  return (
    <Container
      id="experience"
      maxWidth={false}
      sx={{
        px: 4,
        pb: 8,
        maxWidth: 1400,
        mx: "auto",
        scrollMarginTop: "80px",
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
        Work Experience
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {jobs.map((job, index) => (
          <motion.div
            key={job.company + job.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Logo */}
              {job.logo && (
                <CardMedia
                  component="img"
                  image={job.logo}
                  alt={job.company}
                  sx={{
                    width: { xs: "100%", md: 130 },
                    height: 130,
                    objectFit: "contain",
                    mr: { md: 3 },
                    mb: { xs: 2, md: 0 },
                    borderRadius: 2,
                  }}
                />
              )}

              {/* Content */}
              <CardContent sx={{ flex: 1, p: 0 }}>
                {/* Role & Company */}
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {job.role} @ {job.company}
                </Typography>

                {/* Dates */}
                <Typography sx={{ color: "#64748b", fontSize: "0.95rem", mb: 3 }}>
                  {job.start} – {job.end || "Present"}
                </Typography>

                {/* Projects inside job */}
                <Grid container sx={{ gap: 3 }}>
                  {job.projects.map((proj) => (
                    <Grid
                      key={proj.name}
                      sx={{ width: { xs: "100%", sm: "48%" } }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {/* Project Name */}
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#1e293b",
                            mb: 0.5,
                          }}
                        >
                          {proj.name}
                        </Typography>

                        {/* About */}
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            color: "#475569",
                            mb: 1,
                          }}
                        >
                          {proj.about}
                        </Typography>

                        {/* Bullets */}
                        <Box sx={{ mb: 2 }}>
                          {proj.bullets.map((b, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 * i }}
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
                                sx={{
                                  color: "#475569",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {b}
                              </Typography>
                            </motion.div>
                          ))}
                        </Box>

                        {/* Tech Stack */}
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {proj.tech_stack.split(",").map((tech) => (
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
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}
