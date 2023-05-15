const Step = (props) => {
    const onNext = () => {
        props.onNext();
    }
    return (
        <div className="step">
            {props.children}
            <button onClick={onNext}>التالي</button>
        </div>
    )
}

export default Step;