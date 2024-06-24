import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import MainForm from "./component/MainForm";
import Alert from "./component/Alert";
import DnaButtons from "./component/DnaButtons";
import DnaTable from "./component/DnaTable";
import ReportTable from "./component/ReportTable";
import ReportCountTable from "./component/ReportCountTable";

afterEach(cleanup);

test('renders MainForm component', () => {
    const component = renderer.create(<MainForm/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


test('MainForm AUTO', () => {
    render(<MainForm/>);
    expect(screen.getByText('AUTO')).toBeTruthy()
    fireEvent.click(screen.getByText('AUTO'))
    fireEvent.click(screen.getByTitle('A'))
    fireEvent.change(screen.getByTitle("age"), {target: {value: 'Wendy'}})
    fireEvent.change(screen.getByTitle("name"), {target: {value: '30'}})
    fireEvent.click(screen.getByText('Send'))
});

test('MainForm reset', () => {
    render(<MainForm/>);
    expect(screen.getByText('Clean')).toBeTruthy()
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(screen.getByText('Clean'))
});

test('MainForm dna buttons', () => {
    render(<MainForm/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(screen.getByTitle('A')).toBeTruthy()
    expect(screen.getByTitle('C')).toBeTruthy()
    expect(screen.getByTitle('G')).toBeTruthy()
    expect(screen.getByTitle('T')).toBeTruthy()
    Array.from({length: 37}, () => fireEvent.click(screen.getByTitle('A')))

});

test('renders Alert component', () => {
    const error = {message: "DNA is NOT complete!", type: "error", show: true}
    const success = {message: "", type: "success", show: true}
    const warning = {message: "DNA is complete!", type: "warning", show: true}
    const component = renderer.create(<Alert alert={error}/>);
    const component2 = renderer.create(<Alert alert={success}/>);
    const component3 = renderer.create(<Alert alert={warning}/>);
    let tree = component.toJSON();
    let tree2 = component2.toJSON();
    let tree3 = component3.toJSON();
    expect(tree).toBeTruthy();
    expect(tree2).toBeTruthy();
    expect(tree3).toBeTruthy();

})

test('renders DnaButtons component', () => {
    const component = renderer.create(<DnaButtons handleButtonClick={() => {
    }}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders DnaTable component', () => {
    const dna = ["ACGTACG", "ACGTACG", "ACGTACG", "ACGTACG", "ACGTACG",]
    const component = renderer.create(<DnaTable dna={dna}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders ReportTable component', () => {
    const reportData = {data: [{"name": "Wendy", "age": "30", "is_mutant": false}]}
    const component = renderer.create(<ReportTable reportData={reportData}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders ReportCountTable component', () => {
    const reportData = {"count_human_dna": 20, "count_mutant_dna": 10, "ratio_mutan": 0.3}
    const component = renderer.create(<ReportCountTable reportData={reportData}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

