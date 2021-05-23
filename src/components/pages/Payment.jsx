import React , {Component} from "react";
 import '../css/paypall.css'
import PayPal from "./PayPal";

export class Pay extends Component{

    state = {
        total:0
    }

    componentDidMount = () => {
        const total = this.props.match.params.total;

        this.setState({total})
    }

    render() {

        return (
            <div className="pay">

                <PayPal

                toPay={this.state.total}/>

            </div>
        );
    }
}

export default Pay;
