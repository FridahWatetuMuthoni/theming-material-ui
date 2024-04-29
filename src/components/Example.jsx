import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

function Example() {
  return (
    <div>
      <Typography variant="h3">Theming Example</Typography>
      <Typography color="primary">Hello CodeSandbox</Typography>
      <h3>Start editing to see some magic happen</h3>
      <Typography variant="myVariant">My custom variant</Typography>
      <br />
      <Button variant="contained" color="secondary">
        Hi
      </Button>
      {/* large, medium, small, inherit */}
      <Delete color="primary" size="large" />
    </div>
  );
}

export default Example;
