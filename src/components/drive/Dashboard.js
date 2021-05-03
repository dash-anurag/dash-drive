import React from "react";
import { Container } from "react-bootstrap";
import useFolder from "../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";

import Navbar from "./Navbar";

const Dashboard = () => {
  const { folder, childFolders } = useFolder("ztkPeR7AsBoJ6brT5NpS");
  console.log(childFolders);

  return (
    <React.Fragment>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
