package formation.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A TypeQuestion.
 */
@Entity
@Table(name = "type_question")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TypeQuestion implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "i_d_type", nullable = false)
    private Long iDType;

    @Column(name = "nom_type")
    private String nomType;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getiDType() {
        return iDType;
    }

    public TypeQuestion iDType(Long iDType) {
        this.iDType = iDType;
        return this;
    }

    public void setiDType(Long iDType) {
        this.iDType = iDType;
    }

    public String getNomType() {
        return nomType;
    }

    public TypeQuestion nomType(String nomType) {
        this.nomType = nomType;
        return this;
    }

    public void setNomType(String nomType) {
        this.nomType = nomType;
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
        TypeQuestion typeQuestion = (TypeQuestion) o;
        if (typeQuestion.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), typeQuestion.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TypeQuestion{" +
            "id=" + getId() +
            ", iDType=" + getiDType() +
            ", nomType='" + getNomType() + "'" +
            "}";
    }
}
