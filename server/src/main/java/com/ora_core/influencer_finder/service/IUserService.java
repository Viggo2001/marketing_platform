package com.ora_core.influencer_finder.service;

import java.util.List;

import com.ora_core.influencer_finder.domain.User;

public interface IUserService extends IService<User, String> {

    List<User> getAllUsers();
    
}
