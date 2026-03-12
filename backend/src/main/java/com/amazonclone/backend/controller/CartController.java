
package com.amazonclone.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.amazonclone.backend.model.Cart;
import com.amazonclone.backend.service.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*")
public class CartController {

    @Autowired
    private CartService cartService;

    // Create a new cart
    @PostMapping("/create")
    public Cart createCart() {
        return cartService.createCart();
    }

    // Get cart by ID
    @GetMapping("/{cartId}")
    public Cart getCart(@PathVariable Long cartId) {
        return cartService.getCart(cartId);
    }

    // Add product to cart
    @PostMapping("/{cartId}/add/{productId}")
    public Cart addProduct(
            @PathVariable Long cartId,
            @PathVariable Long productId,
            @RequestParam int quantity) {

        return cartService.addProduct(cartId, productId, quantity);
    }

    // Remove item from cart
    @DeleteMapping("/item/{itemId}")
    public void removeItem(@PathVariable Long itemId) {
        cartService.removeItem(itemId);
    }
}

