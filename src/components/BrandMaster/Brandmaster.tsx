import React, { useState, useMemo } from "react";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import axios from "axios";
import Sidebar from "../Sidebar";
import Sidetable from "../Sidetable";
import Header from "../Header";
import { Pagination } from 'antd';


export default function BrandMaster() {
    // const [basicActive, setBasicActive] = useState("tab1");
    const [tabledata, setTabledata] = useState([]);
    const [basicActive, setBasicActive] = useState("tab1");
    // const [tabledata, setTabledata] = useState([]);
  
    const [posts,setPosts]=useState([]);
    const [total,setTotal]=useState("")
    const [page,setPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(10);
  
    const baseURL =
        "https://jotqvldydj.execute-api.us-west-1.amazonaws.com/PRODUCT_RFID_EXCEPTIONS";

    // React.useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //         setTabledata(response.data);
    //     });
    // }, []);
    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };


    useEffect(()=>{
        const loadposts=async()=>{
          const response=await axios.get(baseURL);
          // console.log(response.data.Exceptions)
          setPosts(response.data.Exceptions);
          setTabledata(response.data.Exceptions);
          setTotal(response.data.Exceptions.length);
        }
        loadposts();
      },[]);
      const indexofLastpage=page+postsPerPage;
      const indexofFirstpage=indexofLastpage-postsPerPage;
      const currentPosts=posts.slice(indexofFirstpage,indexofLastpage)
    
      const onShowSizeChange=(_current,pageSize)=>{
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
            <div className="cantainer">
                <div>
                    {/* <Sidebar /> */}
                    <div className="main-content">
                        {/* <Header /> */}
                        {/* <TableMines/> */}
                    </div>
                </div>
                <MDBTabs className="mb-3">
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleBasicClick("tab1")}
                            active={basicActive === "tab1"}
                        >
                            product
                            {/* My Brands */}

                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleBasicClick("tab2")}
                            active={basicActive === "tab2"}
                        >
                            RFID
                            {/* Product Mapping */}
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
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === "tab1"}>
                        <div className="shadow card my-4">
                            <div className="border-0 card-header">
                                <div className="align-items-center row">
                                    <div className="col">
                                        <h3 className="mb-0">My Brand</h3>
                                    </div>
                                    <div className="col text-right">
                                        <a href="#" className="btn btn-primary btn-sm">
                                            See all
                                        </a>
                                    </div>
                                    <li> <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            select Brand
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                    </li>
                                    {/* <div className="input-group rounded ">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search" >
                                          
                                        </i>
                                    </span>
                                </div> */}
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
                                    {/* <tbody>
                                    {tabledata?.Product?.map((item: any, i: number) => (
                                        <tr key={i}>
                                            <>
                                                
                                                <td>0001</td>       
                                                <td>{item.brand}</td>
                                                <td>{item.productName}</td>
                                                <td>{item.category}</td>
                                                <td>{item.subCategory}</td>
                                                <td>$100</td>
                                                <td> <a href="#" className="badge badge-primary">edit</a></td>
                                            </>
                                        </tr>
                                    ))}
                                </tbody> */}
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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
                                            See all
                                        </a>
                                    </div>
                                    <li> <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            select Brand
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form>
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
                                    {/* <tbody>
                                    {tabledata?.RFID?.map((item: any, i: number) => (
                                        <tr key={i}>
                                            <>
                                                
                                                <td>{item.location}</td>
                                                <td>{item.productName}</td>
                                                <td> <a href="#" className="badge badge-primary">edit</a></td>
                                            </>
                                        </tr>
                                    ))}
                                </tbody> */}
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
                            <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

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
                                            See all
                                        </a>
                                    </div>
                                    <li> <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            select Brand
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
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
                                            {/* <th scope="col">destinationName:</th> */}
                                            {/* <th scope="col">sourceName</th> */}
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                    {tabledata?.Exceptions?.map((item: any, i: number) => (
                                        <tr key={i}>
                                            <>
                                                <td>{item.RFID}</td>
                                                <td>{item.productName}</td>

                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            select Brand
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>
                                                </td>
                                              

                                            </>
                                        </tr>
                                    ))}
                                </tbody> */}
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
                                                <li> <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        select Brand
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div></li>
                                                <li> <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        select Brand
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div></li>
                                                <li> <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        select Brand
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div></li>
                                                <li> <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        select Brand
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div></li>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item ">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </MDBTabsPane>
                </MDBTabsContent>

                <div className="App">
      {currentPosts.map((post)=>(
        // <h3 key={post.id}>{post.body}</h3>
         <h2 key={post.Exception}>{post.Exception}</h2>
    ))}
    <Pagination
    onChange={(value)=>setPage(value)}
    pageSize={postsPerPage} total={total} 
    current={page}
    showSizeChanger
    showQuickJumper
    onShowSizeChange={onShowSizeChange}
    itemRender={itemRender}
    />
    </div>


            </div>
        </>
    );
}
