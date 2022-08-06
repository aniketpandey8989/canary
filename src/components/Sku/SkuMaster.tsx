// import React, { useState, useMemo, useEffect } from "react";
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
// } from "mdb-react-ui-kit";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import { Pagination } from 'antd';

// export default function SkuMaster() {
//   const [basicActive, setBasicActive] = useState("tab1");
//   const [tabledata, setTabledata] = useState([]);

//   const [posts, setPosts] = useState([]);
//   const [total, setTotal] = useState("")
//   const [page, setPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(10);

//   const baseURL =
//     "https://jotqvldydj.execute-api.us-west-1.amazonaws.com/PRODUCT_RFID_EXCEPTIONS";

//   const handleBasicClick = (value: string) => {
//     if (value === basicActive) {
//       return;
//     }
//     setBasicActive(value);
//   };

//   useEffect(() => {
//     const loadposts = async () => {
//       const response = await axios.get(baseURL);
//       // console.log(response.data.Exceptions)
//       setPosts(response.data);
//       setTabledata(response.data);
//       setTotal(response.data.Exceptions.length);
//     }
//     loadposts();
//   }, []);

//   console.log(posts, "Posts")

//   const indexofLastpage = page + postsPerPage;
//   const indexofFirstpage = indexofLastpage - postsPerPage;
//   const currentPosts = posts?.slice(indexofFirstpage, indexofLastpage)

//   const onShowSizeChange = (_current, pageSize) => {
//     setPostsPerPage(pageSize)
//   }

//   const itemRender = (current, type, originalElement) => {
//     if (type === "prev") {
//       return <a>previous</a>;
//     }
//     if (type === "next") {
//       return <a>Next</a>
//     }
//     return originalElement;
//   }

//   return (
//     <>
//       <div className="container">
//         <MDBTabs className="mb-3">
//           <MDBTabsItem>
//             <MDBTabsLink
//               onClick={() => handleBasicClick("tab1")}
//               active={basicActive === "tab1"}
//             >
//               Product
//             </MDBTabsLink>
//           </MDBTabsItem>
//           <MDBTabsItem>
//             <MDBTabsLink
//               onClick={() => handleBasicClick("tab2")}
//               active={basicActive === "tab2"}
//             >
//               RFID
//             </MDBTabsLink>
//           </MDBTabsItem>
//           <MDBTabsItem>
//             <MDBTabsLink
//               onClick={() => handleBasicClick("tab3")}
//               active={basicActive === "tab3"}
//             >
//               Exception
//             </MDBTabsLink>
//           </MDBTabsItem>
//         </MDBTabs>
//         <MDBTabsContent>
//           <MDBTabsPane show={basicActive === "tab1"}>
//             <div className="shadow card my-4">
//               <div className="border-0 card-header">
//                 <div className="align-items-center row">
//                   <div className="col">
//                     <h3 className="mb-0">Product</h3>
//                   </div>
//                   <div className="col text-right">
//                     <a href="#" className="btn btn-primary btn-sm">
//                       See all
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <table className="align-items-center table-flush table">
//                   <thead className="thead-light">
//                     <tr>
//                       <th scope="col">id</th>
//                       <th scope="col">brand</th>
//                       <th scope="col">productName</th>
//                       <th scope="col">category:</th>
//                       <th scope="col">subCategory</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tabledata?.Product?.map((item: any, i: number) => (
//                       <tr key={i}>
//                         <>
//                           <td>{item.id}</td>
//                           <td>{item.brand}</td>
//                           <td>{item.productName}</td>
//                           <td>{item.category}</td>
//                           <td>{item.subCategory}</td>
//                         </>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 {/* <Pagination
//                 className="pagination-bar"
//                 currentPage={currentPage}
//                 totalCount={tabledata?.Product?.length}
//                 pageSize={PageSize}
//                 onPageChange={Page=> setCurrentPage(Page)}
//               /> */}
//               </div>
//             </div>
//           </MDBTabsPane>
//           <MDBTabsPane show={basicActive === "tab2"}>
//             {" "}
//             <div className="shadow card my-4">
//               <div className="border-0 card-header">
//                 <div className="align-items-center row">
//                   <div className="col">
//                     <h3 className="mb-0">RFID</h3>
//                   </div>
//                   <div className="col text-right">
//                     <a href="#" className="btn btn-primary btn-sm">
//                       See all
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <table className="align-items-center table-flush table">
//                   <thead className="thead-light">
//                     <tr>
//                       <th scope="col">brand</th>
//                       <th scope="col">category:</th>
//                       <th scope="col">id</th>
//                       <th scope="col">productName</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tabledata?.RFID?.map((item: any, i: number) => (
//                       <tr key={i}>
//                         <>
//                           <td>{item.Quan}</td>
//                           <td>{item.RFID}</td>
//                           <td>{item.location}</td>
//                           <td>{item.productName}</td>
//                         </>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </MDBTabsPane>
//           <MDBTabsPane show={basicActive === "tab3"}>
//             {" "}
//             <div className="shadow card my-4">
//               <div className="border-0 card-header">
//                 <div className="align-items-center row">
//                   <div className="col">
//                     <h3 className="mb-0">Exception</h3>
//                   </div>
//                   <div className="col text-right">
//                     <a href="#" className="btn btn-primary btn-sm">
//                       Add Product
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <table className="align-items-center table-flush table">
//                   <thead className="thead-light">
//                     <tr>
//                       <th scope="col">RFID</th>
//                       <th scope="col">sourceName</th>
//                       <th scope="col">destinationName:</th>
//                       <th scope="col">productName</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tabledata?.Exceptions?.map((item: any, i: number) => (
//                       <tr key={i}>
//                         <>
//                           <td>{item.RFID}</td>
//                           <td>{item.sourceName}</td>
//                           <td>{item.destinationName}</td>
//                           <td>{item.productName}</td>
//                         </>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </MDBTabsPane>
//         </MDBTabsContent>
//         <div className="App">
//           {currentPosts.map((post) => (
//             // <h3 key={post.id}>{post.body}</h3>
//             <h2 key={post.Exception}>{post.Exception}</h2>
//           ))}
//           <Pagination
//             onChange={(value) => setPage(value)}
//             pageSize={postsPerPage} total={total}
//             current={page}
//             showSizeChanger
//             showQuickJumper
//             onShowSizeChange={onShowSizeChange}
//             itemRender={itemRender}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useMemo, useEffect } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from "axios";
import Sidebar from "../Sidebar";
import { Pagination } from 'antd';

export default function SkuMaster() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [tabledata, setTabledata] = useState([]);

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const baseURL =
    "https://jotqvldydj.execute-api.us-west-1.amazonaws.com/PRODUCT_RFID_EXCEPTIONS";

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  useEffect(() => {
    const loadposts = async () => {
      const response = await axios.get(baseURL);
      setPosts(response?.data?.Exceptions);
      setTotal(response?.data?.Exceptions?.length);
    }
    loadposts();
  }, []);

  const indexofLastpage = page + postsPerPage;
  const indexofFirstpage = indexofLastpage - postsPerPage;
  const currentPosts = posts?.slice(indexofFirstpage, indexofLastpage)

  const onShowSizeChange = (_current: any, pageSize: React.SetStateAction<number>) => {
    setPostsPerPage(pageSize)
  }
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
    <>
      <div className="container">
        <div className="border-0 card-header" style={{padding: "1.25rem 1.5rem 1.25rem 0.6rem"}}>
          <div className="align-items-center row">
            <div className="col">
              <h1 className="mb-0">SKU Master</h1>
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
                All Products
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
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              Product (20)
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              RFID (100)
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
              Add Product
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
                      <th scope="col">ID</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPosts.length > 0 ? currentPosts.map((post: any) => (
                      <tr key={post.id}>
                        <td>{post.RFID}</td>
                        <td>{post.destinationName}</td>
                        <td>{post.productName}</td>
                        <td>{post.sourceName}</td>
                        <td><a href="#">Edit</a></td>
                      </tr>
                    )) : <tr><td colSpan={5} style={{ textAlign: "center" }}>Loading Table Data......</td></tr>}
                  </tbody>
                </table>
                <div className="col text-right">
                  <Pagination
                    onChange={(value) => setPage(value)}
                    pageSize={postsPerPage}
                    total={total}
                    current={page}
                    showSizeChanger
                    showQuickJumper
                    onShowSizeChange={onShowSizeChange}
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
                      <th scope="col">RFID</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Quan</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1540434343434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
                      <td><a href="#">Edit</a></td>
                    </tr>
                    <tr>
                      <td>A1540434343434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
                      <td><a href="#">Edit</a></td>
                    </tr>
                    <tr>
                      <td>A1540434343434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
                      <td><a href="#">Edit</a></td>
                    </tr>
                    <tr>
                      <td>A154043553434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
                      <td><a href="#">Edit</a></td>
                    </tr>
                    <tr>
                      <td>A1540434343434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
                      <td><a href="#">Edit</a></td>
                    </tr>
                    <tr>
                      <td>A1540434343434</td>
                      <td>WYLD Elderberry Gummeis 2:1 TCH:CBN</td>
                      <td>Missiob Bay LLC</td>
                      <td>153</td>
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
                      <th scope="col">Source Name</th>
                      <th scope="col">Destination Name</th>
                      <th scope="col">Product Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1A406030</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 1</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 10</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Prod Name
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
                      <td>1A406030</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 1</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 10</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Prod Name
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
                      <td>1A406030</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 1</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 10</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Prod Name
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
                      <td>1A406030</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 1</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 10</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Prod Name
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
                      <td>1A406030</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 1</td>
                      <td>WYLD Elderberry Gummeis 12:11 TCG:AAA - 10</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Prod Name
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
                    total={10}
                    current={1}
                    itemRender={itemRender}
                  />
                </div>
              </div>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </>
  );
}