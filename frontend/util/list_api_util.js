export const createList = profileId => {
    return $.ajax({
        url: `/api/lists`,
        method: "POST",
        data: { list: profileId }
    })
}