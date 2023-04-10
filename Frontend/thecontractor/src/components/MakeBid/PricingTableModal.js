
import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./modal.css"

function PricingTableModal() {
  const [show, setShow] = useState(false);
  const [Pricingtable, setPricingtable] = useState([]);
  const [itemnum, setitemnum] = useState(1);
  useEffect(() => {
    console.log(Pricingtable);
  }, [Pricingtable]);
const saveitem =()=> {
    let itemid = itemnum ;
    let itemdescription = (document.getElementById("itemdescription").value)
    let itemunit = (document.getElementById("itemunit").value)
    let itemquantity = (document.getElementById("itemquantity").value)
    let item = {itemid,itemdescription,itemunit,itemquantity};
    setitemnum(itemnum+1);
    setPricingtable([...Pricingtable, item]);
    console.log(Pricingtable)
}
  return (
    <>
      <Button variant="outline-success" size="lg" onClick={() => setShow(true)}>
      Add Pricing Table
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover >
      <thead>
        <tr className='trheight'>
          <th className='itemid'>Item id</th>
          <th className='itemdescription'>Item Description</th>
          <th className='itemunit'>Unit</th>
          <th className='itemquantity'>Quantity</th>
          <th className='itemquantity'>Action</th>
        </tr>
        {Pricingtable.map (element => {
            return (
            <tr key={element.itemid}>
                <td>{element['itemid']}</td>
                <td>{element['itemdescription']}</td>
                <td>{element["itemunit"]}</td>
                <td>{element["itemquantity"]}</td>
            </tr>
            )
        })}
      </thead>
      <tbody>
        <tr>
         <td>
         {itemnum}
         </td>
         <td>
            <Form.Control type="text" placeholder="Item Description" id="itemdescription"/>
         </td>
         <td>
         <Form.Control type="text" placeholder="Unit" id="itemunit"/>
         </td>
         <td>
         <Form.Control type="number" placeholder="Quantity" min={1} id="itemquantity"/>
         </td>
         <td><Button variant="outline-success" onClick={() => saveitem()}>+</Button></td>
        </tr>
      </tbody>
    </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PricingTableModal;