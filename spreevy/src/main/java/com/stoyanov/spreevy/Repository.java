package com.stoyanov.spreevy;

import com.stoyanov.spreevy.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Repository extends JpaRepository<Tutorial, Integer> {
    List<Tutorial> findAllByPublished(boolean published);
    List<Tutorial> findAllByTitleContaining(String title);
}
