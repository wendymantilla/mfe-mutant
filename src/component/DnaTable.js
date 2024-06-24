import React from 'react';


const DnaTable = (props) => {

    return (
        <div className="input-group ">
            <ul className="list-group list-group-flush mx-auto ">
                {props.dna.map((item, index) => (
                    <li className="list-group-item" key={item + index}>
                        <div className="btn-group btn-group-lg " role="group" key={index}>
                            {item.split('').map((letter, index) => (
                                <button type="button" className="btn btn-outline-primary" key={index}>
                                    <span className="p-2 font-monospace">{letter}</span>
                                </button>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DnaTable;