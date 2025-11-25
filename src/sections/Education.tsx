import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Container
      id="education"
      maxWidth={false}
      sx={{
        p: 4,
        maxWidth: 1400,
        mx: "auto",
        scrollMarginTop: "80px",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#0f172a",
          mb: 4,
        }}
      >
        Education
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          p-6 
          rounded-2xl 
          shadow-xl 
          bg-white/60 
          backdrop-blur-xl 
          border 
          border-white/40
        "
      >
        <Typography variant="h6" className="font-semibold text-gray-900">
          B.E. Electronics and Communications Engineering  
          — BITS Pilani, Goa Campus
        </Typography>

        <Typography
          variant="body1"
          className="mt-1 text-gray-600"
        >
          2019 – 2023
        </Typography>

      </motion.div>
    </Container>
  );
}
