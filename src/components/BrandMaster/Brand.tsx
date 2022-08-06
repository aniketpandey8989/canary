import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Pagination } from 'antd';

import Header from '../Header'
import Page from '../pages/page'
import App from '../pages/page'
import Sidebar from '../Sidebar'
import Sidetable from '../Sidetable'
import Brandmaster from './Brandmaster'

function Brand() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const itemRender = (current: any, type: string, originalElement: any) => {
    if (type === "prev") {
      return <a><b>Previous</b></a>;
    }
    if (type === "next") {
      return <a><b>Next</b></a>
    }
    return originalElement;
  }

  return (
    <div>
      <div>
        <Sidebar />
        <div className="main-content">
          <div className="cantainer">
            <div>
              <div className="main-content">
                <div className="border-0 card-header" style={{padding: "1.25rem 1.5rem 1.25rem 0.6rem"}}>
                  <div className="align-items-center row">
                    <div className="col">
                      <h1 className="mb-0">Brand Master</h1>
                    </div>

                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                    {" "}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        
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
                  </div>
                </div>
              </div>
            </div>
            <MDBTabs className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  My Brands (20)
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  Product Mapping (100)
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab3")}
                  active={basicActive === "tab3"}
                >
                  Exceptions (12)
                </MDBTabsLink>
              </MDBTabsItem>
              <div className="col text-right">
                <a href="#" className="btn btn-primary">
                  Add Brand
                </a>
              </div>
            </MDBTabs>
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <div className="shadow card my-4">

                  <div className="table-responsive">
                    <table className="align-items-center table-flush table mb-2">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Brand Id</th>
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
                          <td>0001</td>
                          <td>Amber</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                        <tr>
                          <td>0002</td>
                          <td>Exptic gentix</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                        <tr>
                          <td>0003</td>
                          <td>Press</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                        <tr>
                          <td>0004</td>
                          <td>Seed & Strain</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                        <tr>
                          <td>0005</td>
                          <td>Triple 7</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                        <tr>
                          <td>0006</td>
                          <td>Tyson 2.0</td>
                          <td>John Smith</td>
                          <td>10</td>
                          <td>Good</td>
                          <td>$100k</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col text-right">
                      <Pagination
                        pageSize={10}
                        total={30}
                        current={1}
                        itemRender={itemRender}
                      />
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                {" "}
                <div className="shadow card my-4">
                  <div className="table-responsive">
                    <table className="align-items-center table-flush table mb-2">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Brand</th>
                          <th scope="col">Product Name</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Amber</td>
                          <td>Amber-1g Diamonds- Bubble party(Case x 10)</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <td>Amber</td>
                          <td>Amber-1g Diamonds- Cali O (Case x 10)</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <td>Amber</td>
                          <td>Amber-1g Diamonds- Cheescake(Case x 10)</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <td>Exptic gentix</td>
                          <td>Exotic Slapz 8th</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <td>Exptic gentix</td>
                          <td>Exotic Slapz 8th Case(32-8th)</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <td>Exptic gentix</td>
                          <td>Exotic Slapz 8th Sample/Display</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col text-right">
                      <Pagination
                        pageSize={10}
                        total={30}
                        current={1}
                        itemRender={itemRender}
                      />
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab3"}>
                {" "}
                <div className="shadow card my-4">
                  <div className="table-responsive">
                    <table className="align-items-center table-flush table mb-2">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">RFID</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Brand Assignment</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                        <tr>
                          <td>1A406030...</td>
                          <td>WYLD - Elderberry Gummeis 2:1 TCH:CBN 10 Pack</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Select Brand
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col text-right">
                      <Pagination
                        pageSize={10}
                        total={30}
                        current={1}
                        itemRender={itemRender}
                      />
                    </div>
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand