import { Typography, Container, Card, CardContent, CardMedia, Box, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { jobs } from "../data";

export default function Experience() {
  return (
    <Container id="experience" maxWidth={false} sx={{p: 4,maxWidth: 1400,mx: "auto",scrollMarginTop: "80px",}}>
			<Typography variant="h4" gutterBottom className="mb-6 font-bold">
        Work Experience
      </Typography>

      <div className="flex flex-col gap-6">
        {jobs.map((job, index) => (
          <motion.div
            key={job.company + job.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, p: 2 }}>
              {job.logo && (
                <CardMedia
                  component="img"
                  image={job.logo}
                  alt={job.company}
                  sx={{
                    width: { xs: "100%", md: 120 },
                    height: 120,
                    objectFit: "contain",
                    mr: { md: 2 },
                    mb: { xs: 2, md: 0 },
                  }}
                />
              )}
              <CardContent className="flex-1">
                <Typography variant="h6" className="font-semibold">
                  {job.role} @ {job.company}
                </Typography>
                <Typography variant="subtitle2" className="mb-2 text-gray-500">
                  {job.start} – {job.end || "Present"}
                </Typography>

								<Grid container sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
									{job.projects.map((proj) => (
										<Grid key={proj.name} sx={{ width: { xs: "100%", sm: "48%" } }}>
											<Box key={proj.name} className="mb-3">
												<Typography variant="subtitle1" className="font-medium">
													{proj.name}
												</Typography>
												<Typography variant="body2" className="mb-1 text-gray-700">
													{proj.about}
												</Typography>
												<ul className="list-disc list-inside mb-3">
													{proj.bullets.map((b, i) => (
														<li key={i} className="text-gray-700 text-sm font-medium">
															{b}
														</li>
													))}
												</ul>
                        <Box className="my-2 flex flex-wrap gap-1">
                          {proj.tech_stack.split(",").map((tech) => (
                            <Chip key={tech} label={tech.trim()} size="small" />
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
      </div>
    </Container>
  );
}