
package com.amazonclone.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amazonclone.backend.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}


