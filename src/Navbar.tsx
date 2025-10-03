import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
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
	
	return (
		<AppBar position="sticky" 
		 sx={{ 
				bgcolor: { xs: "white", md: "rgba(255,255,255,0.8)" }, 
				color: "black", 
				backdropFilter: "blur(6px)"
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h6">
					Varun Gokte
				</Typography>
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
								<MenuItem onClick={handleMenuClose} component="a" href="#skills">Technical Skills</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<Button color="inherit" href="#projects">Projects</Button>
							<Button color="inherit" href="#experience">Work Experience</Button>
							<Button color="inherit" href="#skills">Technical Skills</Button>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>

	)
}

export default Navbar;