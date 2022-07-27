// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from "./components/create-student.component";
import AddScore from "./components/add-score.component";
import EditStudent from "./components/edit-student.component";
import EditScore from "./components/edit-score.component";
import StudentList from "./components/student-list.component";
import ScoreList from "./components/score-list.component";
import TopStudents from "./components/top-students.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  AlphaGrep App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/add-score"} className="nav-link">
                    Add Score
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/score-list"} className="nav-link">
                    Score List
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/top-students"} className="nav-link">
                    Top Students
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateStudent />} />
                  <Route path="/add-score" element={<AddScore />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:name" element={<EditStudent />} />
                  <Route
                    path="/edit-score/:name/:subject"
                    element={<EditScore />}
                  />
                  <Route path="/student-list" element={<StudentList />} />
                  <Route path="/score-list" element={<ScoreList />} />
                  <Route path="/top-students" element={<TopStudents />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
