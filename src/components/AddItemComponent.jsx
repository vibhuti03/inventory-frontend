import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';
import ItemsServices from '../services/ItemsServices';

class AddItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            productQuantity:'',
            costPrice:'',
            sellPrice:''
        }
        this.productNameChangeHandler = this.productNameChangeHandler.bind(this);
        this.quantityChangeHandler = this.quantityChangeHandler.bind(this);
        this.costPriceChangeHandler = this.costPriceChangeHandler.bind(this);
        this.sellPriceChangeHandler = this.sellPriceChangeHandler.bind(this);

        this.cancel = this.cancel.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    productNameChangeHandler = (event) => {
        this.setState({ productName : event.target.value});
    }

    quantityChangeHandler = (event) => {
        this.setState({ productQuantity : event.target.value});
    }

    costPriceChangeHandler = (event) => {
        this.setState({ costPrice : event.target.value});
    }

    sellPriceChangeHandler = (event) => {
        this.setState({ sellPrice : event.target.value});
    }

    cancel = (e) => {
        this.props.navigate('/');
    }

    saveItem = (e) => {
        e.preventDefault();

        let item = {productName: this.state.productName,
                    productQuantity: Number(this.state.productQuantity),
                    costPrice: Number(this.state.costPrice),
                    sellPrice: Number(this.state.sellPrice)
                };
        
        console.log('item=>' + JSON.stringify(item));

        ItemsServices.createItem(item).then( (res) => {
            this.props.navigate('/');
        });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className=' card col-md-6 offset-md-3'>
                            <h3 className=' card-title text-center'>Add Product</h3>
                            <div className='card-body'>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <label>Product Name</label>
                                            <input type="text" className="form-control" placeholder="Tata Salt" 
                                                value={this.state.productName} onChange={this.productNameChangeHandler} required/>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col">
                                            <label>Quantity</label>
                                            <input type="number" className="form-control" placeholder="##" 
                                                value={this.state.productQuantity} onChange={this.quantityChangeHandler} required/>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col">
                                            <label>Cost Price</label>
                                            <input type="number" className="form-control" placeholder="##"
                                            value={this.state.costPrice} onChange={this.costPriceChangeHandler} required/>
                                        </div>
                                        <div className="col">
                                            <label>Sell Price</label>
                                            <input type="number" className="form-control" placeholder="##"
                                            value={this.state.sellPrice} onChange={this.sellPriceChangeHandler} required/>
                                        </div>
                                    </div>

                                    <br/><br/>

                                    <button type="button" className="btn btn-outline-danger" onClick={this.cancel}>Cancel</button>
                                    <button type="button" className="btn btn-outline-success" onClick={this.saveItem} style={{marginLeft:"10px"}}>Submit</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function WithNavigate(props){
    const navigate = useNavigate();
    return <AddItemComponent {...props} navigate={navigate}/>
}

export default WithNavigate;