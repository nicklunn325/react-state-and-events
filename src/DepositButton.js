

const DepositButton = (props) => {
    return(
        <button onClick={() => props.handleClick(props.amount)}>{props.coin}</button>
    )
}

export default DepositButton