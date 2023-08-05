import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import deskOne from './images/image-hero-desktop.png'

import databiz from './images/client-databiz.svg'
import audiophile from './images/client-audiophile.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'

import Button from 'react-bootstrap/esm/Button';
import Stack from 'react-bootstrap/Stack';
import './index.css'
import mobile from './images/image-hero-mobile.png'



const Body = () => {
    return ( 
        <Container >
            <Row className=' align-items-lg-end align-items-md-center'>
            
              <Col className='mt-lg-5 pb-3 pb-sm-1 ' xs={{ span: 12, offset: 0 , order:'last'}}  md={{ span: 6, offset: 0 , order:'first'}}><h1 className='text-center big text-sm-start'>Make remote work</h1>
              <Row >
                
                <Col className='text-center text-sm-start mt-lg-5  pb-3 pb-sm-1'  xs={12} >
                 <p> Get your team in sync,no matter your location.
                    Streamline processes,create team rituals,and
                    watch productivity soar.</p>
                </Col>
                <Col className='text-center text-sm-start mt-lg-5 mb-3'>
                  <Button  className='btn btn-dark py-2 px-4 large' >Learn more</Button>
                </Col>

                            
              
              
                </Row>
                  
              <Row className='  pt-lg-5'>
              <Col  xs={3}>
                <Image  fluid src={databiz} /> 
                </Col>
                <Col  xs={3}>
                <Image fluid src={audiophile} /> 
                </Col>
                <Col  xs={3}>
                <Image fluid src={meet} /> 
                </Col>
                <Col  xs={3}>
                <Image fluid src={maker} />
                </Col>
              </Row>
                    
               
              
               
              
                    
                  
                    
                    

                    </Col>


              <Col className='ps-lg-5  pb-3 pb-sm-1 px-0' xs={{ span: 12, offset: 0 , order:'first'}}  md={{ span: 6, offset: 0 , order:'last'}} >< Image className='d-none d-sm-block' style={{maxHeight:'80vh'}} fluid  src={deskOne} /> <Image fluid className='d-block d-sm-none' src={mobile}  /> </Col>
              
              
            </Row>
            
        </Container>

     );
}
 
export default Body;