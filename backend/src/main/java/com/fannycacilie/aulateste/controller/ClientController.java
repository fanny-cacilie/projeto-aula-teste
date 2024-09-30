package com.fannycacilie.aulateste.controller;

import com.fannycacilie.aulateste.exception.ClientNotFoundException;
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

    @GetMapping("/client/{id}")
    Client getClientById(@PathVariable Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new ClientNotFoundException(id));
    }

    @PutMapping("/client/{id}")
    Client updateClient(@RequestBody Client newClient, @PathVariable Long id) {
        return clientRepository.findById(id)
                .map(client -> {
                    client.setName(newClient.getName());
                    client.setEmail(newClient.getEmail());
                    client.setPhone(newClient.getPhone());
                    return clientRepository.save(client);
                }).orElseThrow(() -> new ClientNotFoundException(id));
    }

    @DeleteMapping("/client/{id}")
    String deleteClient(@PathVariable Long id){
        if(!clientRepository.existsById(id)){
            throw new ClientNotFoundException(id);
        }
        clientRepository.deleteById(id);
        return  "Cliente com ID "+id+" foi deletado com sucesso.";
    }


}
