import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Modal, Button } from 'react-bootstrap';

class CoopViewComponent extends React.Component {
    constructor(){
        super()

        this.state = {
            activeListings: [{
                id: 0,
                product: "Carrots",
                pricePerPound: 2.77,
                demandInPounds: 74,
                toBeDelivered: 13,
                negotiable: false,
            }, {
                id: 1,
                product: "Beans",
                pricePerPound: 2.55,
                demandInPounds: 83,
                toBeDelivered: 10,
                negotiable: true
            }],
            formProduct: "",
            formPrice: 0,
            formDemand: 0,
            formNegotiable: false,
            pendingOffers: [{
                id: 0,
                seller: "Russel Westbrook",
                product: "Brussel Sprouts",
                pricePerPound: 1.22,
                poundsOfProduct: 54
            }],
            toBeDelivered: [],
            addListingToggled: false,
        }
    }

    componentDidMount = () => {
        console.log(this.state)
    }

    handleFormProduct = (event) => {
        this.setState({
            formProduct: event.target.value
        })
        console.log(event.target.value)
    }

    handleFormPrice = (event) => {
        this.setState({
            formPrice: event.target.value
        })
        console.log(event.target.value)
    }

    handleFormDemand = (event) => {
        this.setState({
            formDemand: event.target.value
        })
        console.log(event.target.value)
    }

    handleFormNegotiable = (event) => {
        this.setState({
            formNegotiable: event.target.value
        })
    }

    handleSubmit = () => {
        let id = this.state.activeListings.length;
        let negotiableVar = false;
        if (this.state.formNegotiable === "true") {
            negotiableVar = true;
        }
        let submission = {
            id: id,
            product: this.state.formProduct,
            pricePerPound: this.state.formPrice,
            demandInPounds: this.state.formDemand,
            toBeDelivered: 0,
            negotiable: negotiableVar,
        }
        this.state.activeListings.push(submission)
        let updatedArray = this.state.activeListings

        this.setState({
            activeListings: updatedArray
        })
    }

    toggleAddListing = () => {
        this.setState(prevState => ({
            addListingToggled: !prevState.addListingToggled
          }));
    }

    render(){    

        let listArray = this.state.activeListings

        return(
            <>
                <div className="jumbotron-header jumbotron jumbotron-fluid color">
                    <div className="container">
                        <h1 className="display-4">Your Active Listings...</h1>
                        <p className="lead">Add, remove or edit current listings! 💵</p>
                    </div>
                </div>

                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price (per lb)</th>
                                <th>Demand (lbs)</th>
                                <th>To be delivered... (lbs)</th>
                                <th>Negotiable?</th>
                                <th></th>
                            </tr>
                        </thead>       
                    {listArray.map(listing => {
                        return(
                        <tbody>
                            <tr>
                                <td>{listing.product}</td>
                                <td>{listing.pricePerPound}</td>
                                <td>{listing.demandInPounds}</td>
                                <td>{listing.toBeDelivered}</td>
                                <td>{listing.negotiable ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                        )
                    })}
                    </table>  
                    <div>
                        <button onClick={this.toggleAddListing.bind(this)} className="add-listing">{this.state.addListingToggled ? 'Cancel' : 'Add a listing...'}</button>
                    </div>
                    <div>
                        {this.state.addListingToggled &&
                            <div className="addListingForm">
                                    <p>Product: <input onChange={this.handleFormProduct.bind(this)}value={this.state.formProduct} type="text" placeholder="Please enter a product..."/></p>
                                    <p>Price: <input onChange={this.handleFormPrice.bind(this)} value={this.state.formPrice} type="text" placeholder="Please enter a price"/></p>
                                    <p>Demand: <input onChange={this.handleFormDemand.bind(this)} value={this.state.formDemand} type="text" placeholder="Please enter the demand"/></p>
                                    <p>Price negotiable? <input onChange={this.handleFormNegotiable.bind(this)} value={this.state.formNegotiable} type="text" placeholder="True or False" /></p>
                                    <button className="add-listing" onClick={this.handleSubmit.bind(this)}> Submit</button>
                            </div>
                        }
                    </div>
                    <div className="pendingOffers">
                        <div className="pendingOffersHeader">Pending Offers...</div>
                        {this.state.pendingOffers.map(offer => {
                            return (
                            <div class="pendingOffer">
                                <p>{offer.seller} would like to sell <u>{offer.poundsOfProduct} lbs</u> of <u>{offer.product}</u> for <u>{offer.pricePerPound}</u> per pound for a total of <strong>${offer.poundsOfProduct * offer.pricePerPound}</strong>. Would you like to Accept? <button className="buttonAccept">Accept</button><button className="buttonDecline">Decline</button></p>
                            </div>
                            )
                        })}
                    </div>
            </>
        )
    }
}

export default CoopViewComponent;


