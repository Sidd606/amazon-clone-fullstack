package com.amazonclone.backend.service;

import com.amazonclone.backend.ProductDTO;
import com.amazonclone.backend.model.Product;
import com.amazonclone.backend.repository.ProductRepository;

import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<ProductDTO> getAllProducts(
            int page,
            int size,
            String sortBy,
            String direction,
            Double minPrice,
            Double maxPrice,
            String category,
            String keyword
    ) {

        Sort sort = direction.equalsIgnoreCase("DESC")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Product> products = productRepository.findAll(pageable);

        return products.map(this::convertToDTO);
    }

    public ProductDTO createProduct(ProductDTO dto) {

        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setImageUrl(dto.getImageUrl());

        Product saved = productRepository.save(product);

        return convertToDTO(saved);
    }

    public ProductDTO updateProduct(Long id, ProductDTO dto) {

        Product product = productRepository.findById(id).orElseThrow();

        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setImageUrl(dto.getImageUrl());

        Product updated = productRepository.save(product);

        return convertToDTO(updated);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    private ProductDTO convertToDTO(Product product) {

        ProductDTO dto = new ProductDTO();

        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setImageUrl(product.getImageUrl());

        return dto;
    }
}
