package ro.siit.dao;

import ro.siit.model.Patient;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PatientDAOImpl extends BaseDAOImpl implements PatientDAO {

    @Override
    @SuppressWarnings("unchecked")
    public List<Patient> getPatients() {
        String q = "select new ro.siit.model.Patient(e.id, e.cnp, e.firstName, e.lastName, e.generalPractitioner, e.hospital, "
                + "e.county, e.city, e.address, e.phone, e.email, e.dueDate, e.done) "
                + "from ro.siit.entity.PatientEntity e "
                + "where 1 = 1 ";
        q += "order by e.id";
        final Query jpaQuery = getCurrentSession().createQuery(q);
        return jpaQuery.list();
    }
}
