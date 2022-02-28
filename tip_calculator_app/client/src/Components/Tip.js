import React,{useState} from 'react';

function Tip() {
  const [percentageTip, setPercentageTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [people,setPeople] = useState(1);
  

  const handleTip= (e) => {
    e.preventDefault();

    const formValid = +billAmount > 0 && +percentageTip > 0;
    if (!formValid) {
      return;
    }
    const tipAmount = +billAmount * (percentageTip / 100)/people;
    const tip=billAmount * (percentageTip / 100);

    const total = (+billAmount + tip) / people;

    setTipAmount(tipAmount);
    setTotal(total);
    
  }

  const resetHandler = () => {
   setPercentageTip (0);
  setBillAmount (0);
    setTipAmount(0);
    setTotal(0);
   setPeople (1)
  }


  return <div className="tip-container">
     <form className="tip-details" onSubmit= {handleTip}>
    
     
      <label>Bill</label>
      <input type="number" name="bill" value= {billAmount} onChange= {(e)=>setBillAmount(e.target.value)}/>

      <div className="tip"> 
        <div className="title"> Select Tip %</div>
        
        <select className="buttons" value= {percentageTip} onChange= {(e)=>setPercentageTip(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
  
      </div>

      <label>Number of People </label>
      <input type="number" name="people" value= {people} onChange= {(e)=>setPeople(e.target.value)}/>
    
      <button>Calculate</button>
    </form>

    <div className="tip-display">
      <div className="detail">
        <p>Tip Amount</p>
        <p>$ {tipAmount.toFixed(2)}</p>
      </div>
      <div className="detail">
        <p>Total</p>
        <p>$  {total.toFixed(2)}</p>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>

  </div>;
}

export default Tip;
