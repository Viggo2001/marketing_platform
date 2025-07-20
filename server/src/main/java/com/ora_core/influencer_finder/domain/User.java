package com.ora_core.influencer_finder.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;

@Entity(name="Users")
public class User implements Serializable {
    @Id
    private String userId;
    @Column(unique = true)
    private String email;
    private String passwordHash;
    @Enumerated(EnumType.STRING)
    private UserType userType;
    @CreationTimestamp    
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;
    private LocalDateTime lastLogin;
    private boolean active;
    private boolean verified;

    protected User() {}

    public User(UserBuilder userBuilder) {
        this.userId = userBuilder.userId;
        this.email = userBuilder.email;
        this.passwordHash = userBuilder.passwordHash;
        this.userType = userBuilder.userType;
        this.createdAt = userBuilder.createdAt;
        this.updatedAt = userBuilder.updatedAt;
        this.lastLogin = userBuilder.lastLogin;
        this.active = userBuilder.active;
        this.verified = userBuilder.verified;
    }

    public String getUserId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public UserType getUserType() {
        return userType;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public LocalDateTime getLastLogin() {
        return lastLogin;
    }

    public boolean isActive() {
        return active;
    }

    public boolean isVerified() {
        return verified;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((userId == null) ? 0 : userId.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        User other = (User) obj;
        if (userId == null) {
            if (other.userId != null)
                return false;
        } else if (!userId.equals(other.userId))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "User {userId='" + userId + "', email='" + email + "', passwordHash='" + passwordHash + "', userType='"
                + userType + "', createdAt='" + createdAt + "', updatedAt='" + updatedAt + "', lastLogin='" + lastLogin
                + "', isActive=" + active + ", isVerified=" + verified + "}";
    }

    public static class UserBuilder {
        private String userId;
        private String email;
        private String passwordHash;
        private UserType userType;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private LocalDateTime lastLogin;
        private boolean active;
        private boolean verified;

        public UserBuilder() {}

        public UserBuilder setUserId(String userId) {
            this.userId = userId;
            return this;
        }
        public UserBuilder setEmail(String email) {
            this.email = email;
            return this;
        }
        public UserBuilder setPasswordHash(String passwordHash) {
            this.passwordHash = passwordHash;
            return this;
        }
        public UserBuilder setUserType(UserType userType) {
            this.userType = userType;
            return this;
        }
        public UserBuilder setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }
        public UserBuilder setUpdatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }
        public UserBuilder setLastLogin(LocalDateTime lastLogin) {
            this.lastLogin = lastLogin;
            return this;
        }
        public UserBuilder setActive(boolean active) {
            this.active = active;
            return this;
        }
        public UserBuilder setVerified(boolean verified) {
            this.verified = verified;
            return this;
        }

        public UserBuilder copy(User user) {
            this.userId = user.userId;
            this.email = user.email;
            this.passwordHash = user.passwordHash;
            this.userType = user.userType;
            this.createdAt = user.createdAt;
            this.updatedAt = user.updatedAt;
            this.lastLogin = user.lastLogin;
            this.active = user.active;
            this.verified = user.verified;
            return this;
        }

        public User buildUser() { return new User(this); }
        
    }
}
