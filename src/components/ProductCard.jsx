import { Component } from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default class ProductCard extends Component {
    
    render() {
        const { title, price, currency_id, available_quantity, thumbnail, condition } = this.props
        let condicion = ''
        if(condition === "new") condicion = 'Nuevo'
        else condicion = 'Usado'
        return(
            

            <MDBCard className='mb-2' style={{maxHeight: '180px'}}>
                <MDBRow className='g-0' >
                    <MDBCol md='3' sm={2} className="d-none d-md-block" style={{maxHeight: '180px', margin: 'auto'}}>
                        <MDBCardImage   src={thumbnail} 
                                        alt={title} 
                                        style={{
                                            objectFit: 'contain', 
                                            width: '150px', 
                                            height: '150px',
                                            margin: 'auto'
                                        }}
                                        className='img simg-fluid' />
                    </MDBCol>
                    <MDBCol md='9' sm={10} style={{maxHeight: '180px'}}>
                        <MDBCardBody>
                            <MDBCardTitle>{ title }</MDBCardTitle>
                            <MDBCardText> { condicion } — Stock: { available_quantity } </MDBCardText>
                            <MDBCardText> <strong style={{color: 'green'}}>$ { price.toLocaleString() } { currency_id }</strong> </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        )
    }
} 