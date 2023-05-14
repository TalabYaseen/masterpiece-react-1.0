import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./modal.css";
import OfferService from '../../apis/OfferService';
import { Link } from 'react-router-dom';

function OffersModal(props) {
  const [show, setShow] = useState(false);
  const [offersdata, setoffersdata] = useState([]);
  const [offerTotals, setOfferTotals] = useState([]);
  console.log(props.data);

  useEffect(() => {
    OfferService.getsbidoffers(props.data).then(function(res) {
      setoffersdata(res.data);
      calculateOfferTotals(res.data);
    });
  }, []);

  const calculateOfferTotals = (data) => {
    const totals = data.map((offer) => {
      const total = offer.reduce((acc, item) => {
        return acc + item.offer_item_price_total;
      }, 0);
      return total;
    });
    setOfferTotals(totals);
  };

  return (
    <>
      <p>
        <div className="sec-title" onClick={() => setShow(true)}>
          Show offers
        </div>
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Bid Offers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr className="trheight">
                <th className="itemid">Offer</th>
                <th className="itemdescription">Item Description</th>
                <th className="itemunit">Unit</th>
                <th className="itemquantity">Quantity</th>
                <th className="itemquantity">Price / Unit</th>
                <th className="itemquantity">Total</th>
              </tr>
            </thead>
            <tbody>
              {offersdata.length === 0 ? (
                <tr>
                  <td colSpan={6}>No offers</td>
                </tr>
              ) : (
                <>
                  {offersdata.map((offer, index) => {
                    return (
                      <React.Fragment key={offer[0].offer_user_id}>
                        <tr>
                          <Link to={`/user/${offer[0]["offer_user_id"]}`}><td colSpan={6}>
                            {offer[0].first_name} {offer[0].second_name}{' '}
                            {offer[0].last_name}
                          </td></Link>
                        </tr>
                        {offer.map((item) => {
                          return (
                            <tr key={item.item_id}>
                              <td>{item.item_id}</td>
                              <td>{item.offer_item_description}</td>
                              <td>{item.offer_item_unit}</td>
                              <td>{item.offer_item_quantity}</td>
                              <td>{item.offer_item_unit_price}</td>
                              <td>{item.offer_item_price_total}</td>
                            </tr>
                          );
                        })}
                        <tr>
                            <td>Total</td>
                          <td colSpan={4}></td>
                          <td>{offerTotals[index]}</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OffersModal;
