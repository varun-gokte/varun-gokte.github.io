import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skillsByCategory = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java"],
  "Frontend": ["React", "Tailwind", "Material UI", "Shadcn/ui", "HTML & CSS"],
  "Backend": ["Node.js", "Express", "Django", "Flask", "WebSockets"],
  "Databases & ORMs": ["MongoDB", "SQL", "Mongoose", "SQLAlchemy"],
  "Testing & Automation": ["Playwright"],
  "Machine Learning / AI": ["Scikit-learn", "TensorFlow", "NLTK", "OpenAI API"],
  "DevOps & Cloud": ["Docker", "Git/GitHub", "AWS Elastic Beanstalk", "Netlify", "Vercel"],
  "Tools": ["Linux", "Google Colab", "Kaggle", "Cursor"]
};

const categoryColors: { [key: string]: string } = {
  "Languages": "bg-blue-100 text-blue-700",
  "Frontend": "bg-green-100 text-green-700",
  "Backend": "bg-purple-100 text-purple-700",
  "Databases & ORMs": "bg-yellow-100 text-yellow-700",
  "Testing & Automation": "bg-pink-100 text-pink-700",
  "Machine Learning / AI": "bg-red-100 text-red-700",
  "DevOps & Cloud": "bg-indigo-100 text-indigo-700",
  "Tools": "bg-teal-100 text-teal-700", 
};

const hexClass =
  "w-24 h-24 flex items-center justify-center font-semibold shadow cursor-pointer text-center clip-hexagon";

export default function SpreadsheetHexGrid() {
  const categories = Object.entries(skillsByCategory);

  return (
    <Container id="skills" maxWidth={false} sx={{p: 4,maxWidth: 1400,mx: "auto",}}>
      <Typography variant="h4" gutterBottom className="mb-6">
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
