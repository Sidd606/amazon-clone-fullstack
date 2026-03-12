package com.amazonclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.amazonclone.backend.model.Order;
import com.amazonclone.backend.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(Order order) {
        order.setStatus("CREATED");
        return orderRepository.save(order);
    }

    public Order getOrder(Long id) {
        return orderRepository.findById(id).orElseThrow();
    }

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}