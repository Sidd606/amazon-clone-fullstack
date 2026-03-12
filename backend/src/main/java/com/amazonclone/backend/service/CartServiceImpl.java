package com.amazonclone.backend.service;

import org.springframework.stereotype.Service;

import com.amazonclone.backend.model.Cart;

@Service
public class CartServiceImpl implements CartService {

    @Override
    public Cart createCart() {
        return new Cart();
    }

    @Override
    public Cart getCart(Long cartId) {
        return new Cart();
    }

    @Override
    public Cart addProduct(Long cartId, Long productId, int quantity) {
        return new Cart();
    }

    @Override
    public void removeItem(Long itemId) {
        // remove item logic
    }
}