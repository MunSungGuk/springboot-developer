package me.munsungguk.springbootdeveloper.repository;

import me.munsungguk.springbootdeveloper.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Article, Long> {
}
