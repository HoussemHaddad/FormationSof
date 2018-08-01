package formation.com.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(formation.com.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(formation.com.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(formation.com.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(formation.com.domain.PersistentToken.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.User.class.getName() + ".persistentTokens", jcacheConfiguration);
            cm.createCache(formation.com.domain.Category.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Category.class.getName() + ".categoryBlogs", jcacheConfiguration);
            cm.createCache(formation.com.domain.Blog.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Utilisateur.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Formulaire.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Question.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.TypeQuestion.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Reservation.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.AutresInformations.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Role.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Commentaire.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Formation.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.CentreDeFormation.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.Notification.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.TypeDeNotification.class.getName(), jcacheConfiguration);
            cm.createCache(formation.com.domain.CategorieFormation.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
