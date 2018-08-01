package formation.com.repository;

import formation.com.domain.CategorieFormation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the CategorieFormation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CategorieFormationRepository extends JpaRepository<CategorieFormation, Long> {

}
