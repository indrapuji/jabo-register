const AdminCheck = (data) => {
    let result = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].klinik === "DUMMY") {
            result.push(data[i])
        }
    }
    return result
}

export default AdminCheck