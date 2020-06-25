export const createList = list => {
    return $.ajax({
        url: "/api/lists",
        method: "POST",
        data: { list }
    })
}

export const addMovieToList = listItemInfo => {
    return $.ajax({
        url: "/api/list_movies",
        method: "POST",
        data: { list_movie: listItemInfo }
    })
}

export const removeMovieFromList = id => {
    return $.ajax({
        url: `/api/list_movies/${id}`,
        method: "DELETE",
        data: { id }
    })
}

export const fetchList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: "GET",
        data: {id: listId}
    })
}