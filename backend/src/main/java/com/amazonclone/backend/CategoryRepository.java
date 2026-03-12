package com.amazonclone.backend;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amazonclone.backend.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByNameIgnoreCase(String name);

}