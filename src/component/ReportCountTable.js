const ReportCountTable = (props) => {


    return (
        <div className="table-responsive p-3">
            <table className="table table-striped table-sm table-bordered">
                <thead>
                <tr>
                    <th scope="col">Human DNA</th>
                    <th scope="col">Mutant DNA</th>
                    <th scope="col">Mutant ratio</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.reportData.count_human_dna}</td>
                    <td>{props.reportData.count_mutant_dna}</td>
                    <td>{Math.floor(props.reportData.ratio_mutan * 100)}</td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ReportCountTable;