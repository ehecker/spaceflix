export const createList = list => {
    return $.ajax({
        url: "/api/lists",
        method: "POST",
        data: { list }
    })
}