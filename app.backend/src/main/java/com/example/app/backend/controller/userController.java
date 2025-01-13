package com.example.app.backend.controller;



import com.example.app.backend.exception.UserNotFoundException;
import com.example.app.backend.exception.UsersNotFoundException;
import com.example.app.backend.model.User;
import com.example.app.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:5173/")

public class userController {

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/user")
    User newUser(@RequestBody User newUser){
      return  userRepository.save(newUser);
  }


  @GetMapping("/user/{id}")
  User getUserById(@PathVariable Long id){
    return userRepository.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
  }
    @GetMapping("/users")
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            throw new UsersNotFoundException("No users found");
        }
        return users;
    }

@PutMapping("/user/{id}")
  User updateUser(@RequestBody User newUser,@PathVariable Long id){
    return userRepository.findById(id)
            .map(user -> {
              user.setUsername(newUser.getUsername());
              user.setName(newUser.getName());
              user.setEmail(newUser.getEmail());
              return userRepository.save(user);
            }).orElseThrow(()->new UserNotFoundException(id));
}

@DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
      if(!userRepository.existsById(id)){
          throw new UserNotFoundException(id);
      }
      userRepository.deleteById(id);
      return "User with id "+id+" has been deleted successfully";
  }



}
