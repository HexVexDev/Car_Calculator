package com.company.project.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TokenUtils {
    private final static String ACCESS_TOKEN_SECRET="EqfuVKqllsC3tvnAaa1S/QE6va9rEEXE34xTgz+gMuAcLK3tdkJy/QqVL0woZc/E6WKxtpHQqHYuoMVOUTsiX8K4fkpefAyKdZDEglCNq7zd+/+M/cObKEvWtsNTE6RgncbVsmg1z1M1ezYYZsBCAgAi2njzw9uf/hFr9n7nt6eYJWRHNDrayRlMMWinfae4UQbbHq50Vk4h9ZR3e0ZWeWhGeDEK3w5CoOvT/6zXnc4r7AAXJmBP7uI7AOQctwT8emu2G0QCVgRKtJ9nLMZe9ja/KZy8mNB4t/goBjlQzQtaq5Q91DwnmT19p4tuJBa3tWxVIupMFSpSfTGE1dxE1ddhLD1R+fN7hP1vk4VX5VA";
    private final static Long ACCESS_TOKEN_VALIDITY_SECONDS=2_592_000L;

    public static String createToken(String nombre,String email){
        Long expirationTime = ACCESS_TOKEN_VALIDITY_SECONDS*1_000;
        Date expirationDate = new Date(System.currentTimeMillis()+expirationTime);

        Map<String,Object> extra = new HashMap<>();
        extra.put("nombre", nombre);
        return Jwts.builder()
                .setSubject(email)
                .setExpiration(expirationDate)
                .addClaims(extra)
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
                .compact();
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(String token){
        try{
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            String email = claims.getSubject();
            return new UsernamePasswordAuthenticationToken(email,null, Collections.emptyList());
        }catch (JwtException E){
            return null;
        }

    }
}
