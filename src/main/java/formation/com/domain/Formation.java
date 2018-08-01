package formation.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Formation.
 */
@Entity
@Table(name = "formation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Formation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "i_d_formation")
    private Long iDFormation;

    @Column(name = "nom_formation")
    private String nomFormation;

    @Column(name = "information")
    private String information;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getiDFormation() {
        return iDFormation;
    }

    public Formation iDFormation(Long iDFormation) {
        this.iDFormation = iDFormation;
        return this;
    }

    public void setiDFormation(Long iDFormation) {
        this.iDFormation = iDFormation;
    }

    public String getNomFormation() {
        return nomFormation;
    }

    public Formation nomFormation(String nomFormation) {
        this.nomFormation = nomFormation;
        return this;
    }

    public void setNomFormation(String nomFormation) {
        this.nomFormation = nomFormation;
    }

    public String getInformation() {
        return information;
    }

    public Formation information(String information) {
        this.information = information;
        return this;
    }

    public void setInformation(String information) {
        this.information = information;
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
        Formation formation = (Formation) o;
        if (formation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), formation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Formation{" +
            "id=" + getId() +
            ", iDFormation=" + getiDFormation() +
            ", nomFormation='" + getNomFormation() + "'" +
            ", information='" + getInformation() + "'" +
            "}";
    }
}
