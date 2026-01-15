import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export function PostDetail() {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Typography variant="h4">Post Detail {id}</Typography>
      <Typography variant="body1">TODO: Implement post detail view</Typography>
    </Box>
  );
}