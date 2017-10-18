import React from 'react';
import ReactDOM from 'react-dom';
import Api from '../../util/api.jsx';

const style = {
   
};

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            errors: false,
            loading: true
        };
    
        const success = (response) => {
            this.setState({
                data : response,
                loading:false,
                showApp: true
            });
        };

        const error = (response) => {
            this.setState({errors: 'Error Occurred: '+response})
        };

        this.getData = (url) => {
           Api.call(url,success,error);
        };
        this.getData = this.getData.bind(this);
    }
    
    componentDidMount(){
        this.getData('http://10.0.1.6/wp-json/wp/v2/pages');
    };
    
    render() {
        console.log(this.state.data);
        let pageData = this.state.data !== null ? this.state.data[0]: false;
        
        /*Basic Page Implementation */
        return (
            <div>
                <h1>{pageData ? pageData.title.rendered : null}</h1>
                <br/>
                <div dangerouslySetInnerHTML={{ __html:pageData ? pageData.content.rendered : null}}></div>
            </div>
        );
    }
}