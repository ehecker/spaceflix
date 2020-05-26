# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#

class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :profiles,
        foreign_key: :user_id,
        class_name: :Profile
    

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
