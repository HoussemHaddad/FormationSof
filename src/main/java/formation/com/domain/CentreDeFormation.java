package formation.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A CentreDeFormation.
 */
@Entity
@Table(name = "centre_de_formation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CentreDeFormation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "i_d_centre")
    private Long iDCentre;

    @Column(name = "nom_centre")
    private String nomCentre;

    @Column(name = "adresse")
    private String adresse;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getiDCentre() {
        return iDCentre;
    }

    public CentreDeFormation iDCentre(Long iDCentre) {
        this.iDCentre = iDCentre;
        return this;
    }

    public void setiDCentre(Long iDCentre) {
        this.iDCentre = iDCentre;
    }

    public String getNomCentre() {
        return nomCentre;
    }

    public CentreDeFormation nomCentre(String nomCentre) {
        this.nomCentre = nomCentre;
        return this;
    }

    public void setNomCentre(String nomCentre) {
        this.nomCentre = nomCentre;
    }

    public String getAdresse() {
        return adresse;
    }

    public CentreDeFormation adresse(String adresse) {
        this.adresse = adresse;
        return this;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
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
        CentreDeFormation centreDeFormation = (CentreDeFormation) o;
        if (centreDeFormation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), centreDeFormation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CentreDeFormation{" +
            "id=" + getId() +
            ", iDCentre=" + getiDCentre() +
            ", nomCentre='" + getNomCentre() + "'" +
            ", adresse='" + getAdresse() + "'" +
            "}";
    }
}
