import'./styles/styles.css';
import Arrow from './assets/icon.png';
import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';
import PropTypes from 'prop-types'; 
import {InfoCard} from'./InfoCard';
import Async from 'react-async';



function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
async function start(){
await Promise.resolve(InfoCard);

}

const info={MSRP: 35000,
      VehicleName: "Toyota",
      MonthlyPayment: 368,
      taxes:220104,
      DealerPhoneNumber: "617-564-3254",
      DealerRating:100};

const MSRP=35000;
const CheckDownPayment=MSRP/4;



const scaleNames = {
  c: 'Down Payment',
  f: 'Monthly payment loan',
  t:'Trade-In value',
  z:'Home Zip Code',
  a:'APR %',
  f: 'Credit score value'
};

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if ((Number.isNaN(input))||(input<0)) {
    return '0';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function CheckDownPaymentVerdict(props) {
  if ((props.downPayment <= CheckDownPayment)&&(props.downPayment >=0)){
    return <p></p>;
  }
  return <p>Change the value.It can’t be greater than {CheckDownPayment} $ or less 0 or a letter or a sign</p>;
}

function CheckDownTradeInVerdict(props) {
  if ((props.tradeIn <= CheckDownPayment)&&(props.tradeIn >=0)){
    return <p></p>;
  }
  return <p>Change the value.It can’t be greater than {CheckDownPayment} $ or less 0</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend> {scaleNames[scale]}:</legend>
      <input  value={temperature} onChange={this.handleChange} /> <div className="btn-search1"> <div class="speech" id="speech">$</div></div> 
      </fieldset>
 
    );
  }
}

class TemperatureInput1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend> {scaleNames[scale]}:</legend>
         <input  value={temperature} onChange={this.handleChange} /> 
      </fieldset>
 
    );
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class MileagesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const mileages = this.props.mileages;
    return (
    
        <label>
        <h3>Mileages:</h3>  
          <select value={mileages} onChange={this.handleChange}>
            <option value="10000">10 000</option>
            <option value="12000">12 000</option>
            <option value="15000">15 000</option>
          </select>
        </label>
    );
  }
}

class TermsLeaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange1(e.target.value);
  }
  render() {
    const termlease = this.props.termlease;
    return (
        <label>
        <h3>Terms:</h3>  
          <select value={termlease} onChange={this.handleChange}>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </label>
    );
  }
}
class  CreditScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange1(e.target.value);
  }
  render() {
    const creditScoreLease = this.props.creditScoreLease;
    return (
        <label>
        <h3>creditScoreLease:</h3>  
          <select value={creditScoreLease} onChange={this.handleChange}>
            <option value="600">600</option>
            <option value="650">650</option>
            <option value="700">700</option>
            <option value="750">750</option>
            <option value="800">800</option>
            <option value="850">850</option>
            <option value="900">900</option>
          </select>
        </label>
    );
  }
}


function UserGreeting(props) {
  return <h3 className="results">Welcome in leasing calculator</h3>;
}

function GuestGreeting(props) {
  return <h3 className="results">Welcome in loan calculator</h3>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Leasing
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Loan
    </button>
  );
}

function toFahrenheit(CreditScoreChange) {
let CreditScoreValue
  if(CreditScoreChange>=750)
 { CreditScoreValue=0.95 }
  if((CreditScoreChange>=700)&(CreditScoreChange<750))
 {CreditScoreValue= 1} ;
 if((CreditScoreChange>=640)&(CreditScoreChange<700))
 {CreditScoreValue= 1.05} ;
 if((CreditScoreChange<640))
 {CreditScoreValue= 1.2} ;
   return CreditScoreValue
}
function LeaseCounter(tradeIn,downPayment,mileages,termlease,creditScoreLease) {
  let CreditScoreValue
  if(creditScoreLease>=750)
 { CreditScoreValue=0.95 }
  if((creditScoreLease>=700)&(creditScoreLease<750))
 {CreditScoreValue= 1} ;
 if((creditScoreLease>=640)&(creditScoreLease<700))
 {CreditScoreValue= 1.05} ;
 if((creditScoreLease<640))
 {CreditScoreValue= 1.2} ;
 let  result=Math.round((MSRP - tradeIn - downPayment) * mileages / 10000 / termlease * CreditScoreValue);
 if ((Number.isNaN(result))||(result<0)) {
  return result='check input values 0';
}

  return result
}
function LoanCounter(tradeIn,downPayment,term,fahrenheit,apr){
 let  result1=Math.round((MSRP-tradeIn-downPayment)/term*(fahrenheit*apr)/100);
 if ((Number.isNaN(result1))||(result1<0)) {
  return result1='check input values 0';
}
return result1
}
function Hide(isLoggedIn){
  let result
  if(isLoggedIn){ result='hide'}
  else{result='show'}
  return result
}
function Show(isLoggedIn){
  let result
  if(!isLoggedIn){ result='show'}
  else{result='hide'}
  return result
}
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
function WarningBanner1(isLoggedIn) {
  if (isLoggedIn) {
    return null;
  }

  return 'warning'
}
function WarningBanner2(isLoggedIn) {
  if (!isLoggedIn) {
    return null;
  }

  return 'warning'
}









class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handleTradingChange = this.handleTradingChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleAprChange = this.handleAprChange.bind(this);
    this.handleCreditScoreChange = this.handleCreditScoreChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleMiliagesChange= this.handleMiliagesChange.bind(this);
    this.handleTermleaseChange= this.handleTermleaseChange.bind(this);
    this.handleCreditScoreLeaseChange= this.handleCreditScoreLeaseChange.bind(this);
    this.handleLeasingResultChange= this.handleLeasingResultChange.bind(this);
    this.handleLoanResultChange= this.handleLoanResultChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.handleLoggedInClick=this.handleLoggedInClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      downPayment:'0',
      scale: 'c',
      tradeIn: '0',
      zipCode:'220002',
      apr:'1',
      term:'24',
      CreditScoreChange:'750',
      creditSV:'0.95',
      loading: true,
      infoCardData: '0',
      mileages:'12000',
      termlease:'36',
      creditScoreLease:'750',
      leasingResult:'0',
      loanResult:'0',
      showWarning: true,
      hide:'hide',
      isLoggedIn: false,
      show:'show'
    };
    
  }
 
  handleDownPaymentChange(downPayment) {
     if (downPayment>=0)
    {this.setState({scale: 'c', downPayment});}
  
  }
  handleFahrenheitChange(creditSV) {
    this.setState({scale: 'f', creditSV});
  }
 
  handleTradingChange(tradeIn) {
    if (tradeIn>=0)
    this.setState({scale: 't', tradeIn});
  }
  handleZipChange(zipCode) {
    this.setState({scale: 'z', zipCode});
  }
  handleZipChange(zipCode) {
    this.setState({scale: 'z', zipCode});
  }
  handleAprChange(apr) {
    this.setState({scale: 'a',apr});
  }
 
handleAprClick(apr) {
  this.setState({scale: 'a',apr});
}


handleCreditScoreChange(CreditScoreChange) {
  this.setState({scale: 'a',CreditScoreChange});
}
handleCreditScoreChangeValue(creditSV) {
  this.setState({scale: 'a',creditSV});
}


componentDidMount() {
  // this simulates an async action, after which the component will render the content
  demoAsyncCall().then(() => this.setState({ loading: false }));


}

handleFahrenheitChange(temperature) {
  this.setState({scale: 'f', temperature});
}

handleMiliagesChange(mileages) {
  this.setState({ mileages});
}
handleTermleaseChange(termlease) {
  this.setState({ termlease});
}
handleCreditScoreLeaseChange(creditScoreLease) {
  this.setState({ creditScoreLease});
}
handleLeasingResultChange(leasingResult) {
  this.setState({ leasingResult});
}
handleLoanResultChange(loanResult) {
  this.setState({ loanResult});
}

handleToggleClick() {
  this.setState(prevState => ({
    showWarning: !prevState.showWarning
  }));
}

handleHideClick(hide) {
  this.setState({ hide});
}
handleShowClick(show) {
  this.setState({ show});
}
handleLoggedInClick(isLoggedIn) {
  this.setState({ isLoggedIn});
}
handleLoginClick() {
  this.setState({isLoggedIn: true});
}

handleLogoutClick() {
  this.setState({isLoggedIn: false});
}

  render() {
    
    const scale = this.state.scale;
    const downPayment = this.state.downPayment;
    const tradeIn=this.state.tradeIn;
    const zipCode=this.state.zipCode;
    const apr=this.state.apr;
    const term=this.state.term;
    const CreditScoreChange=this.state.CreditScoreChange;
    const { loading } = this.state;
    const infoCardData=this.state.infoCardData;
    const mileages=this.state.mileages;
    const termlease=this.state.termlease;
    const creditScoreLease=this.state.creditScoreLease;
  
    const isLoggedIn=this.state.isLoggedIn;
 
    let button;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

   

     const fahrenheit = tryConvert(CreditScoreChange, toFahrenheit);
    const leasingResult= LeaseCounter(tradeIn,downPayment,mileages,termlease,creditScoreLease); 
    const loanResult= LoanCounter(tradeIn,downPayment,term,fahrenheit,apr);
    const hide=WarningBanner1(isLoggedIn);
    const show=WarningBanner2(isLoggedIn);

    const loadUsers = () =>
     fetch("https://ipinfo.io/json?token=1db77c7739473f")
       .then(res => (res.ok ? res : Promise.reject(res)))
       .then(res => res.json())
      
    const loadUsers1 =start().then()
      
    return (  
      <div  className="container ">
          <Async promiseFn={loadUsers}>
              <Async.Loading>Loading...</Async.Loading>
              <Async.Fulfilled>
                
                {data => {
                  return (
                  <div>
                      <h3>Your post code {data.postal}</h3>  
                    </div>
                  )
                }}
              </Async.Fulfilled>
              <Async.Rejected>
                {error => `Something went wrong: ${error.message}`}
              </Async.Rejected>
         </Async>

  
    <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <TemperatureInput
              scale="c"
              downPayment={downPayment}
              onTemperatureChange={this.handleDownPaymentChange} />
            <CheckDownPaymentVerdict
              downPayment={parseFloat(downPayment)} />
            <TemperatureInput
              scale="t"
              tradeIn={tradeIn}
              onTemperatureChange={this.handleTradingChange} />
            <CheckDownTradeInVerdict
              tradeIn={parseFloat(tradeIn)} />
            <TemperatureInput1
              scale="z"
              zipCode={zipCode}
              onTemperatureChange={this.handleZipChange} /> 
            <TemperatureInput1
              scale="a"
              apr={apr}
              onTemperatureChange={this.handleAprChange} /> 

      </div>

            <div className="CardInfo results">
          <h2 className="results">Card Info:</h2> <br/>
                MRSP: {info.MSRP} $ <br/>
                vehicle name: "{info.VehicleName}"<br/>
                monthly payment:{info.MonthlyPayment} $<br/>
                taxes: {zipCode.split('').map(num => num * 11)} <br/>
                dealer phone number:{info.DealerPhoneNumber} <br/>
                dealer rating:{info.DealerRating}
              </div>
             
            <div>

        

            <br/>
            <div className= {show} > 
                <h3>Terms</h3><br/>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 12})}>12</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 24})}>24</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 36})}>36</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 48})}>48</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 72})}>72</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ term: 84})}>84</button>
                </div>
                <br/>
                <h3>Credit Score</h3><br/>
                <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 600})}>600</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 650})}>650</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 700})}>700</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 750})}>750</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 800})}>800</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 850})}>850</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.setState({ CreditScoreChange: 900})}>900</button>
                </div>
                <br/>
                <br/>
                  <div className="results">Monthly payment loan:  {loanResult} $</div>
             <div className="counters">  (({MSRP}-{tradeIn}-{downPayment})/{term})*{fahrenheit}*{apr}/100 ;</div> 
            </div>
      </div>

      <div className={hide}>
          <MileagesForm mileages={mileages} onTemperatureChange={this.handleMiliagesChange}  /><br/>
           <TermsLeaseForm termlease={termlease} onTemperatureChange1={this.handleTermleaseChange}  /><br/>
           <CreditScoreForm creditScoreLease={creditScoreLease} onTemperatureChange1={this.handleCreditScoreLeaseChange}  /><br/>
           <div className="results">Monthly payment lease: {leasingResult} $</div>
           <div className="counters">(MSRP {MSRP}- tradeIn{tradeIn} - downPayment{downPayment} ) *
            mileages{mileages} / 10000 / termlease{termlease} * CreditScoreValue)
        </div>   
      </div>
  

      <div>
       
      </div>
      
    </div>


      
    );
  }
}




render(

  <Calculator />,
  document.getElementById('root')
);




