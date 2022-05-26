import React, { Component } from 'react';
import ItemsServices from '../services/ItemsServices';
import {useNavigate} from 'react-router-dom';

class ListItemsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : []
        }
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount(){
        ItemsServices.getItems().then((res) => {
            this.setState({ items : res.data});
        });
    }

    addItem(){
        this.props.navigate('/add-inventory-items');
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Inventory Items</h2>
                    <button className='btn btn-outline-primary' onClick={this.addItem}>Add Item</button>
                <div className='row'>

                    <table className='table table-hover table-bordered'>

                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity Available</th>
                            <th>Cost Price</th>
                            <th>Sell Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.items.map(
                                item => 
                                <tr key={item.id}>
                                    <td>{item.productName}</td>
                                    <td>{item.productQuantity}</td>
                                    <td>{item.costPrice}</td>
                                    <td>{item.sellPrice}</td>
                                    <td></td>
                                </tr>
                            )
                        }
                    </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

function WithNavigate(props){
    const navigate = useNavigate();
    return <ListItemsComponent {...props} navigate={navigate}/>
}


export default WithNavigate;