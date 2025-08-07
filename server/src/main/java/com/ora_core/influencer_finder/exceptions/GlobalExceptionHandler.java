package com.ora_core.influencer_finder.exceptions;

import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.ResponseEntity;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<String> handleJsonParseError(HttpMessageNotReadableException ex) {
        Throwable cause = ex.getMostSpecificCause();
        String message = (cause != null) ? cause.getMessage() : ex.getMessage();
        return ResponseEntity.badRequest().body("JSON parse error: " + message);
    }

    // You can catch other exceptions similarly
}
