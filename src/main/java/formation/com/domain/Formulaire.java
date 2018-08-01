package formation.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Formulaire.
 */
@Entity
@Table(name = "formulaire")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Formulaire implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "i_d_formulaire")
    private Long iDFormulaire;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getiDFormulaire() {
        return iDFormulaire;
    }

    public Formulaire iDFormulaire(Long iDFormulaire) {
        this.iDFormulaire = iDFormulaire;
        return this;
    }

    public void setiDFormulaire(Long iDFormulaire) {
        this.iDFormulaire = iDFormulaire;
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
        Formulaire formulaire = (Formulaire) o;
        if (formulaire.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), formulaire.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Formulaire{" +
            "id=" + getId() +
            ", iDFormulaire=" + getiDFormulaire() +
            "}";
    }
}
