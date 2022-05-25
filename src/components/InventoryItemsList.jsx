import React, { Component } from 'react';

class InventoryItemsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : []
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Inventory Items</h2>
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

export default InventoryItemsList;