import React from 'react'
import { Card, Button, CardText } from "react-bootstrap";

const ProfileCover = () => {
  return (
    <div>
      <div className="bg-light min-vh-100">
        <div className="container mt-5">
          <div className="row">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiCard-root css-1dzi6su"
              style={{
                "--Paper-shadow": "var(--shadows-0)",
                "--Paper-overlay": "var(--overlays-0)",
              }}
            >
              <div className="MuiBox-root css-4rh2ec">
               <div className="MuiBox-root css-kaea99">
                 <div className="MuiAvatar-root MuiAvatar-circular css-15ueve9">
                   <img
                     alt="Jaydon Frankie"
                     src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp"
                     className="MuiAvatar-img css-45do71"
                   />
                 </div>
                 <div className="MuiListItemText-root MuiListItemText-multiline css-1h9z18">
                   <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-19uozyz">
                     Jaydon Frankie
                   </span>
                   <span className="MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-15i3ku7">
                     CTO
                   </span>
                 </div>
               </div>
             </div>
              <div className="MuiDivider-root MuiDivider-fullWidth css-4fks39"></div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-white shadow-lg">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="User Avatar"
                />
                <div className="card-body">
                  <h5 className="card-title">John Smith</h5>
                  <p className="card-text">Full Stack Developer</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Bay Area, San Francisco, CA
                    </small>
                  </p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">
                      Follow
                    </button>
                    <button className="btn btn-outline-secondary" type="button">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card bg-dark text-white shadow-lg mb-4">
                <div className="card-body">
                  <h5 className="card-title">User Details</h5>
                  <table className="table table-dark">
                    <tbody>
                      <tr>
                        <th>Full Name</th>
                        <td>Johnatan Smith</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>example@example.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>(097) 234-5678</td>
                      </tr>
                      <tr>
                        <th>Mobile</th>
                        <td>(098) 765-4321</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>Bay Area, San Francisco, CA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white shadow-lg">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">https://mdbootstrap.com</p>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg text-body bg-light"></i>
                        <p className="mb-0">mdbootstrap</p>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center p-3">
                        <i
                          className="fab fa-twitter fa-lg"
                          style={{ color: "#55acee" }}
                        ></i>
                        <p className="mb-0">@mdbootstrap</p>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center p-3">
                        <i
                          className="fab fa-instagram fa-lg"
                          style={{ color: "#ac2bac" }}
                        ></i>
                        <p className="mb-0">mdbootstrap</p>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center p-3">
                        <i
                          className="fab fa-facebook-f fa-lg"
                          style={{ color: "#3b5998" }}
                        ></i>
                        <p className="mb-0">mdbootstrap</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

       <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Header>
          <img
            src="https://placehold.co/800x600"
            alt="SurfWell"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <h5>SurfWell</h5>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "#00aaff" }}>
          <div>
            <img
              src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-25.webp"
              alt="Profile"
              className="rounded-circle"
              style={{ width: "120px", height: "120px", marginTop: "10px" }}
            />
          </div>
          <Card.Title>Theo</Card.Title>
          <CardText>Full Stack Developer</CardText>
          <Card.Text>
            9 years of experience in auto sales, dedicated to bridging.
          </Card.Text>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-primary">Email</Button>
            <Button variant="outline-primary">Phone</Button>
            <Button variant="outline-primary">Website</Button>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">THis is Demo</Button>
        </Card.Footer>
      </Card>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>Marie Horwitz</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">info@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-9 col-xl-8">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-dark text-body"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>Andy Horwitz</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div className="p-4 text-black bg-body-tertiary">
                  <div className="d-flex justify-content-end text-center py-1 text-body">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5  text-body">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4 bg-body-tertiary">
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4 text-body">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileCover
