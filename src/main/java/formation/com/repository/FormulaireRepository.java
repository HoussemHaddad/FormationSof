package formation.com.repository;

import formation.com.domain.Formulaire;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Formulaire entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FormulaireRepository extends JpaRepository<Formulaire, Long> {

}
