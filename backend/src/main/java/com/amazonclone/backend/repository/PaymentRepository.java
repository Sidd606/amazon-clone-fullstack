package com.amazonclone.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amazonclone.backend.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}