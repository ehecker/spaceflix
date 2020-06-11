export const createList = list => {
    debugger
    return $.ajax({
        url: "/api/lists",
        method: "POST",
        data: { list }
    })
}