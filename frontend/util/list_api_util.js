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