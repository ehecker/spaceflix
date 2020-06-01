export const createProfile = profile => {
    return $.ajax({
        url: "/api/profiles",
        method: "POST",
        data: { profile }
    })
}

export const fetchUserProfiles = id => {
    return $.ajax({
        url: `/api/users/${id}`,
        method: "GET"
    })
}

export const deleteUserProfile = id => {
    return $.ajax({
        url: `/api/profiles/${id}`,
        method: "DELETE"
    })
}