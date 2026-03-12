
package com.amazonclone.backend.service;

import com.amazonclone.backend.model.Cart;

public interface CartService {

    Cart createCart();

    Cart getCart(Long cartId);

    Cart addProduct(Long cartId, Long productId, int quantity);

    void removeItem(Long itemId);
}

