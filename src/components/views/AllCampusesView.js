/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import { Typography, Button } from "@mui/material";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
      <>
        <Heading component="h1" variant="h4">
          All Campuses
        </Heading>

        <Typography paragraph sx={{ m: "2em" }}>
          There are currently no campuses
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/newcampus"
          sx={{ m: "2em" }}
        >
          Add New Campus
        </Button>
      </>
    );
  }

  // If there is at least one campus, render All Campuses view
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <hr />
        </div>
      ))}
      <br />
      <Link to={`/`}>
        <button>Add New Campus</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
