import React from 'react';

const DnaButtons = ({handleButtonClick, data, generateDNA}) => {
    const dnaLetters = ['A', 'C', 'G', 'T'];

    return (
        <div className="input-group mb-3">
            <span className="input-group-text">DNA:</span>
            <div className="btn-group" role="group" aria-label="Botones DNA">
                {dnaLetters.map((letter, index) => (
                    <button
                        key={index}
                        type="button"
                        className="btn btn-outline-primary  "
                        onClick={() => handleButtonClick(letter)}
                    >
                        <span className="p-2 font-monospace" title={letter}>{letter}</span>
                    </button>
                    ))}
                <button type="button" className="btn btn-outline-success "
                        onClick={generateDNA}><span className="p-2 font-monospace">AUTO</span>
                </button>
            </div>
            <input
                type="text"
                className="form-control"
                id="dna"
                name="dna"
                value={data}
                readOnly/>

        </div>
    );
};

export default DnaButtons;
