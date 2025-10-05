import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

function Navbar(){
	const [anchorEl, setAnchorEl] = useState<EventTarget & HTMLElement|null>(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const scrollToHero = () => {
    const nextSection = document.querySelector("#hero");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

	
	return (
		<AppBar position="sticky" 
		 sx={{ 
				bgcolor: { xs: "white", md: "rgba(255,255,255,0.8)" }, 
				color: "black", 
				backdropFilter: "blur(6px)"
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Button
					onClick={scrollToHero}
					component="p"
					href="#"
					variant="text"
					sx={{
						p: 0,
						minWidth: "auto",
						textTransform: "none",
						color: "inherit",
						fontSize: (theme) => theme.typography.h6.fontSize,
						fontWeight: (theme) => theme.typography.h6.fontWeight,
						lineHeight: (theme) => theme.typography.h6.lineHeight,
						fontFamily: (theme) => theme.typography.h6.fontFamily,
					}}
				>
					Varun Gokte
				</Button>
				<Box sx={{ display: "flex", gap: 3 }}>
					{isMobile ? (
						<>
							<IconButton color="inherit" onClick={handleMenuOpen}>
								<MenuIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}
							>
								<MenuItem onClick={handleMenuClose} component="a" href="#projects">Projects</MenuItem>
								<MenuItem onClick={handleMenuClose} component="a" href="#experience">Work Experience</MenuItem>
								<MenuItem onClick={handleMenuClose} component="a" href="#education">Education</MenuItem>
								<MenuItem onClick={handleMenuClose} component="a" href="#skills">Technical Skills</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<Button color="inherit" href="#projects">Projects</Button>
							<Button color="inherit" href="#experience">Work Experience</Button>
							<Button color="inherit" href="#education">Education</Button>
							<Button color="inherit" href="#skills">Technical Skills</Button>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>

	)
}

export default Navbar;