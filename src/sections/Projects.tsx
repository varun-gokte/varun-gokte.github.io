import { Typography, Button, Container, Card, CardContent, Chip, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <Container id="projects" maxWidth={false} sx={{p:6, pt:8,maxWidth: 1400,mx: "auto",}}>
      <Typography variant="h4" gutterBottom className="mb-6">
        Projects
      </Typography>
      <Stack
				direction="row"
				flexWrap="wrap"
				sx={{ gap: 3 }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						style={{ flex: "1 1 calc(50% - 12px)" }}
					>
						<Card className="hover:shadow-xl transition-shadow duration-300" sx={{ height: 200 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Box className="mb-2">
                  {project.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * i }}
                      className="ml-4 list-disc text-gray-700"
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </Box>
                <Box className="my-2 flex flex-wrap gap-1">
                  {project.tech_stack.split(",").map((tech) => (
                    <Chip key={tech} label={tech.trim()} size="small" />
                  ))}
                </Box>
                <Box className="mt-3 flex gap-2">
                  {project.github && (
                    <Button size="small" variant="outlined" href={project.github} target="_blank">
                      GitHub
                    </Button>
                  )}
                  {project.deployment && (
                    <Button size="small" variant="contained" href={project.deployment} target="_blank">
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
