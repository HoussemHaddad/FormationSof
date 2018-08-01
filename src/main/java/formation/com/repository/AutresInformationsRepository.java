package formation.com.repository;

import formation.com.domain.AutresInformations;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AutresInformations entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AutresInformationsRepository extends JpaRepository<AutresInformations, Long> {

}
