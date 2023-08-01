import Card from './card'
import successLogo from '../assets/icon-complete.svg'

function Success() {
    return ( 
        <div className="main">
            <Card />
            <div className="right-side">
                <div className="success">
                <img src={successLogo} className='success-logo' alt="success" />
                <h4 className='success-heading'>Thank You</h4>
                <p>We've added your card details</p>
                <button className='btn-submit'>Continue</button>
                </div>
              
            </div>
        </div>
     );
}

export default Success;