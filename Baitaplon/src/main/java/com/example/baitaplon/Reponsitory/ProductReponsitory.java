    package com.example.baitaplon.Reponsitory;

    import com.example.baitaplon.Models.Product;
    import org.springframework.data.mongodb.repository.MongoRepository;
    import org.springframework.data.mongodb.repository.Query;

    import java.util.List;

    public interface ProductReponsitory extends MongoRepository<Product,String> {
        @Query("{'product_name': {$regex : ?0, $options: 'i'}}")
        List<Product> searchProduct(String query);

    }
