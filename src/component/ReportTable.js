const ReportTable = (props) => {


    return (
        <div className="table-responsive p-3">

            <table className="table table-striped table-sm table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Is mutant</th>
                </tr>
                </thead>
                <tbody>
                {props.reportData?.data?.map((row, index) => (
                    <tr key={row.name + index}>
                        <td>{index + 1}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.is_mutant ? "Yes" : "No"}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

    )
}

export default ReportTable;