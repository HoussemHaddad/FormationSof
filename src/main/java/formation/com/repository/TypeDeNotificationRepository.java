package formation.com.repository;

import formation.com.domain.TypeDeNotification;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TypeDeNotification entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TypeDeNotificationRepository extends JpaRepository<TypeDeNotification, Long> {

}
