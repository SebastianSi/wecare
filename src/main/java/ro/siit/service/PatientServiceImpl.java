package ro.siit.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import ro.siit.dao.PatientDAO;
import ro.siit.entity.PatientEntity;
import ro.siit.model.Patient;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service("patientService")
public class PatientServiceImpl implements PatientService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PatientServiceImpl.class);

    @Resource
    private PatientDAO patientDAO;

    @Override
    @Transactional
    public List<Patient> getPatients() {
        return patientDAO.getPatients();
    }

    @Override
    @Transactional
    public Optional<Patient> getById(final long id) {
        final Optional<PatientEntity> entity = patientDAO.findEntity(id, PatientEntity.class);
        return entity.map(e -> {
            final Patient p = new Patient();
            p.setId(e.getId());
            p.setCnp(e.getCnp());
            p.setFirstName(e.getFirstName());
            p.setLastName(e.getLastName());
            p.setGeneralPractitioner(e.getGeneralPractitioner());
            p.setHospital(e.getHospital());
            p.setCounty(e.getCounty());
            p.setCity(e.getCity());
            p.setAddress(e.getAddress());
            p.setPhone(e.getPhone());
            p.setEmail(e.getEmail());
            p.setDueDate(e.getDueDate());
            p.setDone(e.getDone());
            return p;
        });
    }

    @Override
    @Transactional
    public Optional<Long> createOrUpdate(final Patient patient) {
        return Optional.ofNullable(patient).map(p -> {
            if (p.getId() == null) {
                return create(p);
            } else {
                return update(p);
            }
        });
    }

    private Long create(final Patient p) {
        final PatientEntity entity = new PatientEntity();
        entity.setCnp(p.getCnp());
        entity.setFirstName(p.getFirstName());
        entity.setLastName(p.getLastName());
        entity.setGeneralPractitioner(p.getGeneralPractitioner());
        entity.setHospital(p.getHospital());
        entity.setCounty(p.getCounty());
        entity.setCity(p.getCity());
        entity.setAddress(p.getAddress());
        entity.setPhone(p.getPhone());
        entity.setEmail(p.getEmail());
        entity.setDueDate(p.getDueDate());
        entity.setDone(p.getDone());
        return patientDAO.create(entity);
    }

    private Long update(final Patient p) {
        final Optional<PatientEntity> entity = patientDAO.findEntity(p.getId(), PatientEntity.class);
        entity.ifPresent(e -> {
            e.setCnp(p.getCnp());
            e.setFirstName(p.getFirstName());
            e.setLastName(p.getLastName());
            e.setGeneralPractitioner(p.getGeneralPractitioner());
            e.setHospital(p.getHospital());
            e.setCounty(p.getCounty());
            e.setCity(p.getCity());
            e.setAddress(p.getAddress());
            e.setPhone(p.getPhone());
            e.setEmail(p.getEmail());
            e.setDueDate(p.getDueDate());
            e.setDone(p.getDone());
            patientDAO.update(e);
        });
        return p.getId();
    }

    @Override
    @Transactional
    public void delete(final long id) {
        final Optional<PatientEntity> entity = patientDAO.findEntity(id, PatientEntity.class);
        entity.ifPresent(patientDAO::delete);
    }

    @Override
    @Transactional
    public Optional<Long> setFlag(final long id, final boolean value) {
        final Optional<PatientEntity> entity = patientDAO.findEntity(id, PatientEntity.class);
        entity.ifPresent(e -> {
            e.setDone(value);
            patientDAO.update(e);
        });
        return Optional.of(id);
    }
}
