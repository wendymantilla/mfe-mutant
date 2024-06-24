import React, {useEffect, useState} from 'react';
import DnaButtons from './DnaButtons';
import {getReport, isMutant} from '../service/apiService'
import DnaTable from "./DnaTable";
import ReportTable from "./ReportTable";
import Alert from "./Alert";
import ReportCountTable from "./ReportCountTable";

const MainForm = () => {

        const [formData, setFormData] = useState({name: '', age: '', dna: []});

        const [alert, setAlert] = useState({show: true, type: "info", message: "Enter the DNA sequence"});

        const [reportData, setReportData] = useState({})

        const [dnaData, setDnaData] = useState("")

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleDNAButtonClick = (letter) => {
            if (formData.dna.length >= 6) {
                setAlert({...alert, message: "DNA is complete!", type: "warning", show: true})
                return
            }
            if (dnaData.length < 6) {
                setDnaData(dnaData.concat(letter))
            } else {
                setFormData({
                    ...formData,
                    dna: [...formData.dna, dnaData]
                });
                setDnaData("")
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (formData.dna.length >= 6) {
                console.log(formData);
                isMutant(formData)
                    .then(data => setAlert({
                        ...alert,
                        message: data.is_mutant ? `${formData.name} is a mutant!` : `${formData.name} is not a mutant!`,
                        type: "success",
                        show: true
                    }))
                    .catch((err) => setAlert({...alert, message: err.message, type: "error", show: true}))
                //handleReset(e);

            } else {
                setAlert({...alert, message: "DNA is NOT complete!", type: "error", show: true})
            }
        };

        const handleReset = (e) => {
            e.preventDefault();
            setDnaData('')
            setFormData({name: '', age: '', dna: []})
            setAlert({show: true, type: "info", message: "Enter the DNA sequence"})
        }


        useEffect(() => {
            getReport()
                .then(response => setReportData(response))
                .catch(err => setAlert({...alert, message: err, type: "error", show: true}))
        }, [alert])

        const generateDNA = () => {
            const letters = ['A', 'C', 'G', 'T'];
            const random = Array.from({length: 6}, () => Array.from({length: 6}, () => letters[Math.floor(Math.random() * letters.length)]).join(''))
            setFormData({...formData, dna: random})
        }

        return (
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Mutant Test</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7 mt-3">
                            <form onSubmit={handleSubmit} onReset={handleReset} className="form-inline">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Name:</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        title="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        maxLength="20"
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Age:</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        name="age"
                                        title="age"
                                        value={formData.age}
                                        maxLength="3"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <DnaButtons handleButtonClick={handleDNAButtonClick} data={dnaData}
                                            generateDNA={generateDNA}/>
                                <Alert alert={alert}/>

                                <div className="btn-group">
                                    <button type="submit" className="btn btn-outline-primary ">Send</button>
                                    <button type="reset" className="btn btn-outline-info ">Clean</button>
                                </div>
                            </form>
                            <ReportCountTable reportData={reportData}/>
                        </div>
                        <div className="col">
                            <DnaTable dna={formData.dna}/>
                        </div>
                    </div>
                    <ReportTable reportData={reportData}/>
                </div>

            </div>


        );
    }
;

export default MainForm;
