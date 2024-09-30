package com.fannycacilie.aulateste.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException(Long id) {
        super("Cliente com ID " + id + " não foi encontrado.");
    }
}
