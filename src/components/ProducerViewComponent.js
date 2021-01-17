import React, { Component } from 'react'
import { produceArray } from "../data.json";
//import './checkOut.css'
import 'semantic-ui-css/semantic.min.css';
import {Modal,Button} from 'react-bootstrap';

export default class CheckOut extends Component {
    constructor(){
        super()
        this.state = produceArray;
    }

    render() {

          
          let rows = this.state;
        return (
            <>
                        <div class="jumbotron-header jumbotron jumbotron-fluid color">
                            <div class="container">
                                <h1 class="display-4">Grow-Op</h1>
                                <p class="lead">Looking to sell your local produce to a food co-op? 🥕</p>
                            </div>
                        </div>

                        <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Produce</th>
                            <th>Demand</th>
                            <th>Price</th>
                            <th>Buyer</th>
                            <th>Negotiable?</th>
                            <th>Looking to Sell?</th>

                            </tr> </thead>
                        {rows.map( row =>(
                            <tbody>
                            <tr>
                            <td>{row.produceType}</td>
                            <td>{row.demand}</td>
                            <td>{row.price}</td>
                            <td>{row.Buyer}</td>
                            <td>{row.Negotiable}</td>
                            
                            <button class="ui secondary button">
                                Sell
                            </button>
                            </tr>

                            </tbody>
                         ))}


                       
                       

                        </table>


            
            </>
        )





    }
}

