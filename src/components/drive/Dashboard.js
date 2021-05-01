import React from "react";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";

import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
