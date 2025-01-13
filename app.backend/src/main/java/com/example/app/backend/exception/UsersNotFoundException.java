package com.example.app.backend.exception;

public class UsersNotFoundException extends RuntimeException{
    public UsersNotFoundException(String message) {
        super(message);
    }
}
