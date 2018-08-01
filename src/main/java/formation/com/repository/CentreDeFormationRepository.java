package formation.com.repository;

import formation.com.domain.CentreDeFormation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the CentreDeFormation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CentreDeFormationRepository extends JpaRepository<CentreDeFormation, Long> {

}
