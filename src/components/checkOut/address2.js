import data from '../../assets/DB.json'

import CartHeader from '../CartHeader'
import { Link } from 'react-router-dom'
function address2() {
   
    const Address = data.address
    return (
        <>
        
        <CartHeader  headerName="C A R T " headerName1=" A D D R E S S " headerName2=" P A Y M E N T"/>
           
       
        <div className='Address'>
        <h1 className='styling'>Adresses</h1>
     {
                    
                        Address.map((a) =>
                            <div className='cartSummary1'>
                           <ul className="cartSummaryUl1"> 
                             
                             
                              <li>  Pincode:{a.Pincode}</li>
                           <li> common Address:{a.comAdd}</li>
                             <li>   Town:{a.Town}</li>
                             <li>   District:{a.District}</li>
                             <li>   State:{a.State}</li>
                                

                                </ul></div>

                        )
                    }

<Link to="/Credit"><button className="paymentbtn">continue</button></Link>
<Link to="/Address"><button className="paymentbtn">add address</button></Link>
</div>
            

        </>
    )
}
export default address2