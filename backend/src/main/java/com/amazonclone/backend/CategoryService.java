package com.amazonclone.backend;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.backend.Category;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryDTO> getAllCategories() {

        List<Category> categories = categoryRepository.findAll();

        return categories.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public CategoryDTO getCategoryById(Long id) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        return convertToDTO(category);
    }

   public CategoryDTO createCategory(CategoryDTO dto) {

    categoryRepository.findByNameIgnoreCase(dto.getName())
        .ifPresent(c -> {
            throw new BadRequestException("Category already exists");
        });

    Category category = new Category();
    category.setName(dto.getName());

    Category saved = categoryRepository.save(category);

    CategoryDTO response = new CategoryDTO();
    response.setId(saved.getId());
    response.setName(saved.getName());

    return response;
}

    public CategoryDTO updateCategory(Long id, CategoryDTO dto) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        category.setName(dto.getName());

        Category updated = categoryRepository.save(category);

        return convertToDTO(updated);
    }

    public void deleteCategory(Long id) {

        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        categoryRepository.delete(category);
    }

    private CategoryDTO convertToDTO(Category category) {

        CategoryDTO dto = new CategoryDTO();

        dto.setId(category.getId());
        dto.setName(category.getName());

        return dto;
    }
}
