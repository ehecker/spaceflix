json.id user.id
json.email user.email
json.profiles do
    user.profiles.each do |profile|
        json.set! profile.id do
            json.id profile.id
            json.name profile.name
            json.user_id profile.user_id
            json.list_id profile.list.id
            # json.list do
            #     json.list_id profile.list.id
            #     json.profile_id profile.list.profile_id
            #     json.movies profile.list.movies
            #     json.movie_associations profile.list.movie_associations
            # end
        end
    end
end