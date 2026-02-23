import { useState } from "react";
import { Table, Spinner } from "react-bootstrap";

function Tbl() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul className="bg-primary d-flex p-3 justify-content-around list-unstyled">
        <li className="text-white p-3 ">Home</li>
        <li className="text-white p-3 ">About</li>
        <li className="text-white p-3 ">Contact</li>
        <li className="text-white p-3 ">Details</li>
        <li className="text-white p-3 ">Products</li>
      </ul>

      <Table striped variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rohan</td>
            <td>Pune</td>
          </tr>
        </tbody>
      </Table>

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export default Tbl;
