package com.fannycacilie.aulateste.controller;

import com.fannycacilie.aulateste.model.Client;
import com.fannycacilie.aulateste.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/client")
    Client newClient(@RequestBody Client newClient) {
        return clientRepository.save(newClient);
    }

    @GetMapping("/clients")
    List<Client> getAllClients() {
        return clientRepository.findAll();
    }

}
