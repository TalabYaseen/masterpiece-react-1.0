
import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./modal.css"

function PricingBidModal(props) {
  const [show, setShow] = useState(false);
  const [Pricingtable, setPricingtable] = useState([]);
  const [itemnum, setitemnum] = useState(1);
  const [Descriptionerror, setDescriptionerror] = useState("");
  const [itemuniterror, setitemuniterror] = useState("");
  const [itemquantityerror, setitemquantityerror] = useState("");
  
  useEffect(() => {
    // props.PricingTableChange(Pricingtable)
  }, [Pricingtable]);
const saveitem =(props)=> {
    let itemid = itemnum ;
    let itemdescription = (document.getElementById("itemdescription").value)
    let itemunit = (document.getElementById("itemunit").value)
    let itemquantity = (document.getElementById("itemquantity").value)
    let item = {itemid,itemdescription,itemunit,itemquantity};
    if(itemdescription !="" && itemunit !="" && itemquantity != ""){
      setitemnum(itemnum+1);
      setPricingtable([...Pricingtable, item]);
      (document.getElementById("itemdescription").value) = "";
      (document.getElementById("itemunit").value) = "";
      (document.getElementById("itemquantity").value) = "";

    }
    else {
      if (itemdescription == "") {
        setDescriptionerror ("Fill Description please")
      }
      if (itemunit == "") {
        setitemuniterror ("Fill unit please")
      }
      if (itemquantity == "") {
        setitemquantityerror ("Fill quantity please")
      }
    }
    
}

const clean =()=> {
  setitemquantityerror ("")
  setitemuniterror ("")
  setDescriptionerror ("")
}
const handelchange =(id)=>{
  props.setprice(id,document.getElementById(id).value)
}
  return (
    <>
            <form>
      <Button variant="outline-success" size="lg" onClick={() => setShow(true)}>
       Price Bid
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
          <th className='itemquantity'>Price / Unit</th>
          <th className='itemquantity'>Total</th>
        </tr>
        
      </thead>
      <tbody>
      {(props.data).map (element => {
          // console.log  (element['itemdescription'])
            return (
            <tr key={element.item_id}>
                <td>{element.item_id}</td>
                <td>{element.item_description}</td>
                <td>{element.item_unit}</td>
                <td>{element.item_quantity}</td>
                <td>
                <Form.Control type="number" placeholder="Price/Unit" min={1} id={element.item_id} onChange={()=>handelchange(element.item_id)} value={element.item_price_per_unit} className='price'/>
                </td>
                <td>
                {element.item_price_per_unit * element.item_quantity}
                </td>
            </tr>
            )
        })}
      </tbody>
    </Table>
        </Modal.Body>
      </Modal>
      </form>
    </>
  );
}
export default PricingBidModal;