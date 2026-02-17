import "./Table.scss"

const Table = (props) => {
  const { className, headCells, rows } = props
  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({ children, width }, index) => (
              <th width={width} key={index}>
                {children}
              </th>
            ))}
            <tbody>
              {rows.map(({ cells }, index) => (
                <tr key={index}>
                  {cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </tr>
        </thead>
      )}
    </table>
  )
}

export default Table
