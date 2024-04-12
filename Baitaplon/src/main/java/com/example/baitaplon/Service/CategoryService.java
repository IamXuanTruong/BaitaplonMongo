package com.example.baitaplon.Service;

import com.example.baitaplon.Models.Category;
import com.example.baitaplon.Reponsitory.CategoryReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryReponsitory categoryRepository;
    @Autowired
    public CategoryService(CategoryReponsitory categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    public List<Category> GetallCategory(){
        return categoryRepository.findAll();
    }
    public Category createCategory(Category category){
        Category category1 = new Category();
        category1.setCategory_name(category.getCategory_name());
        return categoryRepository.save(category1);
    }
    public Optional<Category> getCategoryid(String id){
        return categoryRepository.findById(id);
    }
    public void deleteCategory(String id){
        categoryRepository.deleteById(id);
    }
}
