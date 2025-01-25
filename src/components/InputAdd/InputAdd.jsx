

function InputAdd({valueText, onclick, ondelete}) {
    return (
        <>

            <input type="checkbox" onClick={onclick}/>
            {valueText}
            <button type='button' onClick={ondelete}>delete</button>

        
        </>
    );
};

export default InputAdd;