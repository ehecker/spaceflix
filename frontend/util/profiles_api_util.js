export const createProfile = profile => {
    return $.ajax({
        url: "/api/profiles",
        method: "POST",
        data: { profile }
    })
}