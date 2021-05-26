// import {Component} from 'react';
import DepositButton from './DepositButton'

const PiggyBank = ({handleDeposit, amount, quarters, dimes, nickels, pennies}) => {


    
        return(
            <>
                <h1>Piggy Bank</h1>
                <h2>{amount}</h2>
                <DepositButton handleClick={handleDeposit} coin="quarter" amount={.25}/>
                <DepositButton handleClick={handleDeposit} coin="dime" amount={.10}/>
                <DepositButton handleClick={handleDeposit} coin="nickel" amount={.05}/>
                <DepositButton handleClick={handleDeposit} coin="penny" amount={.01}/>
            </>

        )

}

export default PiggyBank;