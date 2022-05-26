import { Component } from 'react'
import ProductCard from './ProductCard';
import SearchBar from './SearchBar'
import { Row, Col, Button } from 'react-bootstrap'

export default class Catalogo extends Component {
    state = {
        data: {data: []},
    }
    
    handleCallback = (childData) => {
        this.setState({
            data: childData
        })
    }

    render() {
        const { data } = this.state
        return(
            <div>
                <SearchBar parentCallback = {this.handleCallback}/>
                <Row>
                    <Col xs={12} lg={12}>
                        <Row>
                        { data.data.map( res =>                 
                            <Col lg={12}>
                                <ProductCard key={res.id}
                                    id = { res.id }
                                    title = { res.title }
                                    price = { res.price }
                                    currency_id = { res.currency_id }
                                    available_quantity = { res.available_quantity }
                                    thumbnail = { res.thumbnail }
                                    condition = { res.condition }
                                />
                            </Col>
                        )}
                        {/* {midata} */}
                        </Row>
                    </Col>
                </Row>
                
            </div>
            
            
        )
    }
} 