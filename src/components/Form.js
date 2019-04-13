import React, { Component } from 'react';


class Form extends Component {

    render() { 
        return ( 
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="zip" type="text" name="cityZip" placeholder="Zip Code" />
                <input className="city" type="text" name="cityName" placeholder="City" />
                <input className="country" type="text" name="country" placeholder="Country" defaultValue="us"/>
                <button type="submit" name="submit">Enter</button>
            </form>
         );
    }
}
 
export default Form;