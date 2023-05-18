// import { useState, forwardRef } from "react";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// const Alert = forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// function SnackBar({ state, message, openSnackbar }) {
//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     openSnackbar = false;
//   };

//   return (
//     <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
//       <Alert onClose={handleClose} severity={state} sx={{ width: "100%" }}>
//         {message}
//       </Alert>
//     </Snackbar>
//   );
// }

// export default SnackBar;
