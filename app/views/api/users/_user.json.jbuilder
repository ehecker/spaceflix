json.id user.id
json.email user.email
json.profiles do
    user.profiles.each do |profile|
        json.set! profile.id do
            json.id profile.id
            json.name profile.name
            json.user_id profile.user_id
        
            json.list profile.list
        end
    end
end