import { SentimentVeryDissatisfied } from "@mui/icons-material";

function ErrorPage() {
  return (
    <div className="not-found col vert-center">
      <SentimentVeryDissatisfied sx={{ fontSize: "80px" }} />
      <p>Page not found</p>
    </div>
  );
}

export default ErrorPage;
