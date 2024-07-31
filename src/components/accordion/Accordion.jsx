import { React, useState } from 'react';
import './Accordion.css';
import data from './data';

const Accordion = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [multipleSelectedId, SetMultipleSelectedId] = useState([]);

    const [enableMutiSelection, setEnableMultiSelection] = useState(false);

    const handleSelected = (getCurrentId) => {
        setSelectedId(getCurrentId == selectedId ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
        let cpyMultipleId = [...multipleSelectedId]
        const findIndexOfMultipleId = cpyMultipleId.indexOf(getCurrentId);

        if (findIndexOfMultipleId == -1) {
            cpyMultipleId.push(getCurrentId)
        }
        else {
            cpyMultipleId.splice(findIndexOfMultipleId, 1);
        }
        SetMultipleSelectedId(cpyMultipleId);


    }

    console.log(multipleSelectedId);

    return (
        <div className="acc-wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMutiSelection)}>Enable multiSelection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <div className='item'>
                            <div onClick={() => enableMutiSelection ? handleMultiSelection(dataItem.id) : handleSelected(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMutiSelection ? 
                                multipleSelectedId.indexOf(dataItem.id) !==-1 &&
                                <div className="acc-content">{dataItem.answer}</div>
                                : selectedId === dataItem.id ?
                                    <div className="acc-content">{dataItem.answer}</div>
                                    : null
                            }
                            {selectedId === dataItem.id ?
                                <div className="acc-content">{dataItem.answer}</div>
                                : null}
                        </div>)
                        : <div>Data not found</div>
                }
            </div>
        </div>
    )
}

export default Accordion;
