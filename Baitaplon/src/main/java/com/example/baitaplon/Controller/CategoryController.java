package com.example.baitaplon.Controller;

import com.example.baitaplon.Models.Category;
import com.example.baitaplon.Reponsitory.CategoryReponsitory;
import com.example.baitaplon.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryReponsitory categoryReponsitory;
    private final CategoryService categoryService;
    @GetMapping
    public ResponseEntity<List<Category>>getAllCategory(){
        List<Category> categories= categoryService.GetallCategory();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createCategory(@RequestBody Category category){
        categoryService.createCategory(category);
        return ResponseEntity.ok().body("+1");
    }
    @GetMapping("/detail/{id}")
    public Category getCategoryid(@PathVariable String id){
        return categoryReponsitory.findById(id).orElse(null);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable String id) {
        if (categoryReponsitory.existsById(id)) {
            categoryReponsitory.deleteById(id);
            return ResponseEntity.ok("ok");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("err");
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(
            @PathVariable String id,
            @RequestBody Category category) {

        Category exCategory = categoryReponsitory.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        exCategory.setCategory_name(category.getCategory_name());
        Category updatedCategory = categoryReponsitory.save(exCategory);
        return ResponseEntity.ok(updatedCategory);
    }
}
