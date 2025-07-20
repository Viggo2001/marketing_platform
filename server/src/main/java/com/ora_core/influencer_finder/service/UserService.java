package com.ora_core.influencer_finder.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ora_core.influencer_finder.domain.User;
import com.ora_core.influencer_finder.factory.UserFactory;
import com.ora_core.influencer_finder.repository.IUserRepository;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public User save(User input) {
        User userObject = null;
        
        try {
            userObject = UserFactory.creatUser(
                input.getEmail(), 
                input.getPasswordHash(), 
                input.getUserType(),
                input.isActive(), 
                input.isVerified()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }

        return userRepository.save(userObject);
    }

    @Override
    public User read(String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User update(User updateValue) {
        User existingUser = userRepository.findById(updateValue.getUserId()).get(); 

        User userToUpdate = new User.UserBuilder()
            .copy(existingUser)
            .setEmail(updateValue.getEmail())
            .setActive(updateValue.isActive())
            .setUpdatedAt(LocalDateTime.now())
            .setVerified(updateValue.isVerified())
            .setLastLogin(LocalDateTime.now())
            .buildUser();

        return userRepository.save(userToUpdate);
    }

    @Override
    public boolean delete(String id) {
        if (userRepository.findById(id).isPresent()) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
}
