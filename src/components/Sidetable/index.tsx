import React from "react";

export default function Sidetable() {
  return (
    <div className="col-xl-4">
      <div className="shadow card ">
        {/* <> */}
        <div className="border-0 card-header">
          <div className="align-items-center row">
            <div className="col-8">
              <h3 className="mb-0">Attention ( 5 issue )</h3>
            </div>
            <div className="col-4 text-right">
              <a href="#" className="btn btn-primary btn-sm">
                See all
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow card my-4">
        <div className="border-0 card-header">
          <div className="align-items-center row">
            <div className="col">
              <h3 className="mb-0">Consumer Sale</h3>
            </div>
            <div className="col text-right">
              <a href="#" className="btn btn-primary btn-sm">
                See all
              </a>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-items-center table-flush table">
            <thead className="thead-light">
              <tr>
                <th scope="col">SKU</th>

                <th scope="col">WoW</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Brownie Bites</th>

                <td>
                  <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                </td>
              </tr>
              <tr>
                <th scope="row">RSO</th>
                <td>
                  <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                </td>
              </tr>
              <tr>
                <th scope="row">Baby Jeeters</th>

                <td>
                  <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                </td>
              </tr>
              <tr>
                <th scope="row">Moonbites</th>

                <td>
                  <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                </td>
              </tr>
              <tr>
                <th scope="row">0.5g Cart</th>

                <td>
                  <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="shadow card my-4">
        <div className="border-0 card-header">
          <div className="align-items-center row">
            <div className="col">
              <h3 className="mb-0">Top Stores</h3>
            </div>
            <div className="col text-right">
              <a href="#" className="btn btn-primary btn-sm">
                See all
              </a>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-items-center table-flush table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Account</th>
                <th scope="col">Location</th>

                <th scope="col">WoW</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">CC</th>
                <td>THCSD</td>

                <td>
                  <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                </td>
              </tr>
              <tr>
                <th scope="row">Eaze</th>
                <td>Arcata</td>

                <td>
                  <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                </td>
              </tr>
              <tr>
                <th scope="row">M&A</th>
                <td>Vista</td>

                <td>
                  <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                </td>
              </tr>
              <tr>
                <th scope="row">One Pla</th>
                <td>Desert</td>

                <td>
                  <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                </td>
              </tr>
              <tr>
                <th scope="row">Cloud 9</th>
                <td>SacTo</td>

                <td>
                  <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="shadow card my-4">
        <div className="border-0 card-header">
          <div className="align-items-center row">
            <div className="col">
              <h3 className="mb-0">Bottom Stores</h3>
            </div>
            <div className="col text-right"><a href="#" className="btn btn-primary btn-sm">See all</a>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="align-items-center table-flush table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Account</th>
                <th scope="col">Location</th>


                <th scope="col">WoW</th>              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">CC</th>
                <td>THCSD</td>

                <td><i className="fas fa-arrow-up text-success mr-3"></i> 46,53%</td>
              </tr>
              <tr>
                <th scope="row">Eaze</th>
                <td>Arcata</td>

                <td><i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%</td>
              </tr>
              <tr>
                <th scope="row">M&A</th>
                <td>Vista</td>

                <td><i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%</td>
              </tr>
              <tr>
                <th scope="row">One Pla</th>
                <td>Desert</td>

                <td><i className="fas fa-arrow-up text-success mr-3"></i> 50,87%</td>
              </tr>
              <tr>
                <th scope="row">Cloud 9</th>
                <td>SacTo</td>

                <td><i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
