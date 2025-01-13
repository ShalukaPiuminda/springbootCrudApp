package com.example.app.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> singleexceptionHandler(UserNotFoundException exception){
        Map<String,String>errorMap=new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());
        return errorMap;
    }

    @ResponseBody
    @ExceptionHandler(UsersNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> multipleuserexceptionHandler(UsersNotFoundException  exception){
        Map<String,String>errorMap=new HashMap<>();
        errorMap.put("errorMessage",exception.getMessage());
        return  errorMap;
    }
}
