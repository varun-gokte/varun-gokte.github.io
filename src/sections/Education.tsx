import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Container id="education" maxWidth={false} sx={{p:4, maxWidth: 1400, mx: "auto", scrollMarginTop: "80px"}}>
      <Typography 
        variant="h4"
        gutterBottom
        className="mb-8 font-semibold text-left"
      >
        Education
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative p-6 bg-white rounded-lg"
      >
        <Typography variant="h6" className="font-bold">
          B.E. Electronics and Communications Engineering - BITS Pilani, Goa Campus
        </Typography>
        <Typography variant="body1" color="text.secondary" className="mt-1">
          2019 – 2023
        </Typography>
        <Typography
          variant="body2"
          color="primary  "
          className="mt-2 italic text-sm"
        >
          
        </Typography>
      </motion.div>
    </Container>
  );
}
