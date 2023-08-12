package com.imesh.pos.thogakade.controller;

import com.imesh.pos.thogakade.entity.Customer;
import com.imesh.pos.thogakade.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }

    @PutMapping
    public Customer updateCustomer(@RequestBody Customer customer){
        return customerService.updateCustomer(customer);
    }

    @DeleteMapping
    public boolean deleteCustomer(@PathVariable Integer id){
        return customerService.deleteCustomer(id);
    }

    @GetMapping
    public Customer getCustomer(@PathVariable() Integer id){
        return customerService.getCustomer(id);
    }

    @GetMapping
    public List<Customer> getAllCustomer(){
        return customerService.getAllCustomer();
    }

}
