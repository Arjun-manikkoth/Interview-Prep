const Child = (prop) => {
    console.log("child component re-renderd");
    return (
        <>
            <div>child component</div>
            <div>value:{prop.value}</div>
        </>
    );
};

export default Child;
