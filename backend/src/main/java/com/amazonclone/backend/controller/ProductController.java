package com.amazonclone.backend.controller;

import com.amazonclone.backend.ProductDTO;
import com.amazonclone.backend.service.ProductService;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public Page<ProductDTO> getProducts(

            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "ASC") String direction,

            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String keyword
    ) {

        return productService.getAllProducts(
                page,
                size,
                sortBy,
                direction,
                minPrice,
                maxPrice,
                category,
                keyword
        );
    }

    @PostMapping("/add")
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO) {

        return productService.createProduct(productDTO);

    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(
            @PathVariable Long id,
            @RequestBody ProductDTO productDTO
    ) {

        return productService.updateProduct(id, productDTO);

    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {

        productService.deleteProduct(id);

    }

}