package formation.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A CategorieFormation.
 */
@Entity
@Table(name = "categorie_formation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CategorieFormation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "i_d_categorie")
    private Long iDCategorie;

    @Column(name = "nom_categorie")
    private String nomCategorie;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getiDCategorie() {
        return iDCategorie;
    }

    public CategorieFormation iDCategorie(Long iDCategorie) {
        this.iDCategorie = iDCategorie;
        return this;
    }

    public void setiDCategorie(Long iDCategorie) {
        this.iDCategorie = iDCategorie;
    }

    public String getNomCategorie() {
        return nomCategorie;
    }

    public CategorieFormation nomCategorie(String nomCategorie) {
        this.nomCategorie = nomCategorie;
        return this;
    }

    public void setNomCategorie(String nomCategorie) {
        this.nomCategorie = nomCategorie;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CategorieFormation categorieFormation = (CategorieFormation) o;
        if (categorieFormation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), categorieFormation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CategorieFormation{" +
            "id=" + getId() +
            ", iDCategorie=" + getiDCategorie() +
            ", nomCategorie='" + getNomCategorie() + "'" +
            "}";
    }
}
