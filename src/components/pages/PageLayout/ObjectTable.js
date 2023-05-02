import '../scss/ObjectTable.scss';

export default function ObjectTable({ object, attributes }) {
  // State ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };
  return (
    <table className="ObjectTable">
      <tbody>
      {attributes.map((attribute) => {
          const value = typeof(object[attribute.key]) === "boolean" 
          ? (object[attribute.key]
            ? "true" 
            : "false") 
            : attribute.key === 'Date'
            ? formatDate(object[attribute.key])
            : object[attribute.key];
          return (
            <tr key={attribute.key}>
              <td className="left">{attribute.label}</td>
              <td className="right">{value}</td>
            </tr>
          )
        })
      } 
      </tbody>
    </table>
  );
}