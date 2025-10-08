import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skillsByCategory, categoryColors } from "../data";

const hexClass =
  "w-24 h-24 flex items-center justify-center font-semibold shadow cursor-pointer text-center clip-hexagon";

export default function SpreadsheetHexGrid() {
  const categories = Object.entries(skillsByCategory);

  return (
    <Container id="skills" maxWidth={false} sx={{p: 4,maxWidth: 1400,mx: "auto",scrollMarginTop: "80px"}}>
      <Typography 
        variant="h4"
        gutterBottom
        className="mb-8 font-semibold text-left"
			>
        Technical Skills
      </Typography>
			<div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0  border-gray-300">
				{categories.map(([category, skills], index) => (
					<div
						key={category}
						className="m-4 p-2 bg-blue-50/80 rounded-xl flex flex-col"
					>
						<h2 className="text-xl font-bold mb-2 text-center">{category}</h2>
						<div className="grid justify-center grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 justify-items-center">
							{skills.map((skill, i) => (
								<motion.div
									key={skill}
									className={`${hexClass} ${categoryColors[category]}`}
									initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
									animate={{ opacity: 1, scale: 1, rotate: 0 }}
									transition={{
										delay: i * 0.05 + index * 0.2,
										type: "spring",
										stiffness: 300,
									}}
									whileHover={{ scale: 1.15, rotate: 3 }}
								>
									{skill}
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>
		</Container>
  );
}
