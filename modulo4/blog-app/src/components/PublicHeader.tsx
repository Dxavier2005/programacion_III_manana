import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import type { JSX } from "react";

export default function PublicHeader(): JSX.Element {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ left: 0, right: 0, top: 0 }}
    >
      <Toolbar disableGutters sx={{ minHeight: 64 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/791/223/small/blog-site-blogger-png.png"
              alt="logo"
              width="32"
              height="32"
              style={{ display: "block" }}
            />
            <Typography variant="h6">BlogApp</Typography>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Parte pública
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}