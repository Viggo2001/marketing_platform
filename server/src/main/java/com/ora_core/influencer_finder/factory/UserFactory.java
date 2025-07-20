package com.ora_core.influencer_finder.factory;

import java.time.LocalDateTime;
import java.util.UUID;

import com.ora_core.influencer_finder.domain.User;
import com.ora_core.influencer_finder.domain.UserType;
import com.ora_core.influencer_finder.utils.Helper;

public class UserFactory {

    public static User creatUser(String email, String passwordHash, UserType userType, boolean isActive, boolean isVerified) throws Exception {
        if (!Helper.isEmail(email)) {
            throw new Exception("Wrong code");
        }

        String userId = UUID.randomUUID().toString();
        return new User.UserBuilder()
            .setUserId(userId)
            .setEmail(email)
            .setPasswordHash(passwordHash)
            .setUserType(userType)
            .setCreatedAt(LocalDateTime.now())
            .setUpdatedAt(LocalDateTime.now())
            .setLastLogin(LocalDateTime.now())
            .setActive(isActive)
            .setVerified(isVerified)
            .buildUser();
    }

}
