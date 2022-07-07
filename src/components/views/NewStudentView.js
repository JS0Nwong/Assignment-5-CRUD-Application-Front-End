/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */

import { Typography, Button, styled, TextField, Box } from "@mui/material";

const FormContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

const StudentInfoField = styled(TextField)(() => ({
  margin: "2em",
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;

  // Render a New Student view with an input form
  return (
    <FormContainer>
      <Box
        sx={{
          backgroundColor: "#eec0c6",
          backgroundImage: "linear-gradient(315deg, #eec0c6 30%, #7ee8fa 85%)",
          borderRadius: "1.25em",
          m: "2em",
          p: "2em",
          minWidth: "260px",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "20px",
            color: "#11153e",
          }}
        >
          Add a Student
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StudentInfoField
            variant="outlined"
            label="First Name"
            name="firstname"
            InputLabelProps={{ required: false }}
            onChange={(e) => handleChange}
            required
          />
          <StudentInfoField
            variant="outlined"
            label="Last Name"
            name="lastname"
            InputLabelProps={{ required: false }}
            onChange={(e) => handleChange}
            required
          />
          <StudentInfoField
            variant="outlined"
            type="number"
            name="campusid"
            label="Campus ID"
            InputLabelProps={{ required: false }}
            onChange={(e) => handleChange}
            sx={{
              "[type=number]::-webkit-outer-spin-button": {
                "-webkit-appearance": "none",
              },
              "[type=number]::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            required
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewStudentView;