import { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = { data:[], value: '' };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/api/search`)
            .then(( { data } ) => this.props.parentCallback({ data }) )
            .catch(console.log)
    }
    guardar = (data) => {
        this.setState({ data })
        this.props.parentCallback({ data })
    }
    handleChange(e) {
        this.setState({ value: e.target.value }) 
        axios.get(`http://localhost:3001/api/search?query=${ e.target.value }`)
            .then(( { data } ) => this.guardar(data) )
    }
    handleSubmit(e) { 
        e.preventDefault()
     }

    render() {
        return(
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" onSubmit={this.handleSubmit}>
                    <Form.Control   type="text" 
                                    placeholder="Busca lo que quieras!" 
                                    onChange={this.handleChange}
                                    style={{ textAlign: "center"}}/>
                </Form.Group>
        )
    }
} 