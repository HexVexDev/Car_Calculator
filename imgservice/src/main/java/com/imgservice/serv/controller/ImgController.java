package com.imgservice.serv.controller;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ImgController {

    private Map<String, byte[]> imageStore = new HashMap<>();

    @GetMapping(value = "/images/{image_id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getImage(@PathVariable String image_id) throws IOException {
        byte[] imageBytes = imageStore.get(image_id);

        if (imageBytes == null) {
            // Return a 404 response if the image with the given ID is not found.
            return ResponseEntity.notFound().build();
        }

        ByteArrayResource resource = new ByteArrayResource(imageBytes);

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(resource);
    }

    @PostMapping("/uploadImage/{image_id}")
    public ResponseEntity<String> uploadImage(@PathVariable("image_id") String image_id, @RequestBody byte[] imageData) {
        // Store the image data in the imageStore map with the provided image_id
        imageStore.put(image_id, imageData);

        // You can return a success message or appropriate response here.
        return ResponseEntity.status(HttpStatus.CREATED).body("Image uploaded successfully.");
    }
}