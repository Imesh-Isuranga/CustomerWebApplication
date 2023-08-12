package com.imesh.pos.thogakade.repository;

import com.imesh.pos.thogakade.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
}
