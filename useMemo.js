//-------------------------------------------------------------------------------------
//useMemo
const dataFiltered = useMemo(() => {
    return data.filter((record) => {
        for (let i = 0; i < localColumns.length; i++) {
            if (record[localColumns[i].dataIndex] && record[localColumns[i].dataIndex].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                return record;
            }
        }
    })
}, [data, searchText])

