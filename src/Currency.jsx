import React from 'react';
import Button from './Button';
export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.fullName = props.fullName;
        this.buy = props.buy;
        this.sell = props.sell;
        this.onClick = props.onClick;
    }
    render() {
        return <div className="currency">
            <div className="currency_fullname">{this.fullName}</div>
            <div className="currency_name">{this.name}</div>
            <div className="currency_value">
                <div className="currency_value_buy">{`${this.buy} ${this.name}`}</div>
                |
                <div className="currency_value_sell">{`${this.sell} UAH`}</div>
            </div>
            <Button className="button favorite" active={this.props.active} onClick={this.onClick}>
                <i className="fas fa-star"></i></Button>
        </div>
    }
}
//