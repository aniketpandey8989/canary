import React, { useState, useMemo } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Pagination } from "reactstrap";
import Sidebar from "../Sidebar";
import Sidetable from "../Sidetable";
import Header from "../Header";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const [basicActive, setBasicActive] = useState("tab1");
  const [tabledata, setTabledata] = useState([]);

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  return (
    <>
      <div className="cantainer">
        <div>
          <div className="main-content">
          </div>
        </div>
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              My Brands
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              {/* RFID */}
              Product Mapping
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              {/* Exception */}
              Exceptions
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <div className="col text-right  ">
              <a href="#" className="btn btn-primary btn-sm">
                Add Brands
              </a>
            </div>
          </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "tab1"}>
            <div className="shadow card my-4">
              <div className="border-0 card-header">
                <div className="align-items-center row">
                  <div className="col">
                    <h3 className="mb-0">My Brand</h3>
                  </div>
                  <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div className="mb-0 form-group">
                      <div className="input-group-alternative input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                        </div>
                        <input
                          placeholder="Search"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="col text-right">
                    <a href="#" className="btn btn-primary btn-sm">
                      Add Brands
                    </a>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <li>
                    {" "}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Brands
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <div className="table-responsive">
                <table className="align-items-center table-flush table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col"> Brand Id</th>
                      <th scope="col">brand</th>
                      <th scope="col">Brand Owner</th>
                      <th scope="col">#Of Product </th>
                      <th scope="col">Health</th>
                      <th scope="col">L30D Rev</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <li>0001</li>
                        <li>0002</li>
                        <li>0003</li>
                        <li>0004</li>
                        <li>0005</li>
                        <li>0006</li>
                      </td>
                      <td>
                        <li>Amber</li>
                        <li>Exptic gentix</li>
                        <li>Press</li>
                        <li>Seed & Strain</li>
                        <li>Triple</li>
                        <li>tyson 2.0</li>

                      </td><td>
                        <li>John Smith</li>
                        <li>ooncy Abner</li>
                        <li>Jooncy Abner</li>
                        <li>jooncy Abner</li>
                        <li>John Smith</li>
                        <li>Iron Mike</li>

                      </td><td>
                        <li>10</li>
                        <li>10</li>
                        <li>4</li>
                        <li>20</li>
                        <li>28</li>
                        <li>12</li>

                      </td><td>
                        <li>good</li>
                        <li>For</li>
                        <li>Good</li>
                        <li>Good</li>
                        <li>poor</li>
                        <li>For</li>

                      </td><td>
                        <li>$100k</li>
                        <li>$30k</li>
                        <li>$60k</li>
                        <li>$200k</li>
                        <li>$76k</li>
                        <li>$105k</li>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab2"}>
            {" "}
            <div className="shadow card my-4">
              <div className="border-0 card-header">
                <div className="align-items-center row">
                  <div className="col">
                    <h3 className="mb-0">Product Mapping</h3>
                  </div>
                  <div className="col text-right">
                    <a href="#" className="btn btn-primary btn-sm">
                    </a>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <li>
                    {" "}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        select Brand
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <div className="table-responsive">
                <table className="align-items-center table-flush table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">brand</th>
                      {/* <th scope="col">category:</th>
                                            <th scope="col">id</th> */}
                      <th scope="col">productName</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <li>Amber</li>
                        <li>Amber</li>
                        <li>Amber</li>
                        <li>Exptic gentix</li>
                        <li>Exptic gentix</li>
                        <li>Exptic gentix</li>
                      </td>
                      <td>
                        <li>Amber-1g Diamonds- Bubble party(Case x 10)</li>
                        <li>Amber-1g Diamonds- Cali O (Case x 10)</li>
                        <li>Amber-1g Diamonds- Cheescake(Case x 10)</li>
                        <li>Exotic Slapz 8th</li>
                        <li>Exotic Slapz 8th Case(32-8th)</li>
                        <li>Exotic Slapz 8th Sample/Display</li>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab3"}>
            {" "}
            <div className="shadow card my-4">
              <div className="border-0 card-header">
                <div className="align-items-center row">
                  <div className="col">
                    <h3 className="mb-0">Exceptions</h3>
                  </div>
                  <div className="col text-right">
                    <a href="#" className="btn btn-primary btn-sm">
                      Add Brands
                    </a>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <li>
                    {" "}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        select Brand
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <div className="table-responsive">
                <table className="align-items-center table-flush table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">RFID</th>
                      <th scope="col">productName</th>
                      <th scope="col">Brand Assignment</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <li>0001</li>
                        <li>0002</li>
                        <li>0003</li>
                        <li>0004</li>
                        <li>0005</li>
                        <li>0006</li>
                      </td>
                      <td>
                        <li>Amber</li>
                        <li>Exptic gentix</li>
                        <li>Press</li>
                        <li>Seed & Strain</li>
                        <li>Triple</li>
                        <li>tyson 2.0</li>
                      </td>
                      <td>
                        <li>
                          {" "}
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              select Brand
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              select Brand
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              select Brand
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              select Brand
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </li>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </>
  );
}