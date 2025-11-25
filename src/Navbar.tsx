import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<EventTarget & HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const scrollToHero = () => {
    const nextSection = document.querySelector("#hero");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        transition: "all 0.15s ease",
        bgcolor: scrolled ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.2)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.45)" : "1px solid transparent",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          transition: "all 0.35s ease",
          py: scrolled ? 0.8 : 1.6,
          px: 2,
        }}
      >
        {/* Logo */}
        <Button
          onClick={scrollToHero}
          sx={{
            p: 0,
            minWidth: "auto",
            textTransform: "none",
            fontWeight: 700,
            fontSize: scrolled ? "1.25rem" : "0",
            transition: "all 0.35s ease",
            letterSpacing: "0.5px",
            color: "black",
          }}
        >
          Varun Gokte - Full Stack Software Engineer
        </Button>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>

              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {["projects", "experience", "education", "skills"].map((section) => (
                  <MenuItem
                    key={section}
                    onClick={handleMenuClose}
                    component="a"
                    href={`#${section}`}
                  >
                    {section === "experience"
                      ? "Work Experience"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {[
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Work Experience" },
                { id: "education", label: "Education" },
                { id: "skills", label: "Technical Skills" },
              ].map((item) => (
                <Button
                  key={item.id}
                  href={`#${item.id}`}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    color: "black",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
